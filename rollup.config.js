// @ts-check
import svelte from 'rollup-plugin-svelte-hot'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import livereload from 'rollup-plugin-livereload'
import { terser } from 'rollup-plugin-terser'
import sveltePreprocess from 'svelte-preprocess'
import hmr from 'rollup-plugin-hot'
import typescript from '@rollup/plugin-typescript'
import css from 'rollup-plugin-css-only'
import cleaner from 'rollup-plugin-cleaner'
import html from '@rollup/plugin-html'
import { makeHtmlAttributes } from '@rollup/plugin-html'

// Set this to true to pass the --single flag to sirv (this serves your
// index.html for any unmatched route, which is a requirement for SPA
// routers using History API / pushState)
//
// NOTE This will have no effect when running with Nollup. For Nollup, you'd
// have to add the --history-api-fallback yourself in your package.json
// scripts (see: https://github.com/PepsRyuu/nollup/#nollup-options)
//
const spa = false

// NOTE The NOLLUP env variable is picked by various HMR plugins to switch
// in compat mode. You should not change its name (and set the env variable
// yourself if you launch nollup with custom comands).
const isNollup = !!process.env.NOLLUP
const isWatch = !!process.env.ROLLUP_WATCH
const isLiveReload = !!process.env.LIVERELOAD

const isDev = isWatch || isLiveReload
const isProduction = !isDev

const isHot = isWatch && !isLiveReload

console.log(JSON.stringify({ isNollup, isWatch, isLiveReload, isDev, isHot }))

function serve() {
  let server

  function toExit() {
    if (server) server.kill(0)
  }

  return {
    name: 'svelte/template:serve',
    writeBundle() {
      if (server) return
      server = require('child_process').spawn(
        'npm',
        ['run', 'start', '--', '--dev'],
        {
          stdio: ['ignore', 'inherit', 'inherit'],
          shell: true,
        }
      )

      process.on('SIGTERM', toExit)
      process.on('exit', toExit)
    },
  }
}

/**
 * https://github.com/thgh/rollup-plugin-css-only/issues/25#issuecomment-821201007
 * @param {css.Options} options
 */
function hashFixCSS(options) {
  const plugin = css(options)
  const original_generateBundle = plugin.generateBundle
  const name = /** @type string */ (options.output)
  /** @type string */
  let source
  options.output = s => (source = s)
  plugin.generateBundle = function (opts, bundle) {
    if (original_generateBundle) {
      original_generateBundle.call(this, opts, bundle)
    }
    this.emitAsset(name, source)
  }
  return plugin
}

/**
 * @param {import('@rollup/plugin-html').RollupHtmlTemplateOptions | undefined} templateoptions
 */
const defaultTemplate = (templateoptions) => {
  if (!templateoptions) {
    throw Error("templateoptions is null")
  }
  const { attributes, files, meta, publicPath, title } = templateoptions

  const scripts = (files.js || [])
    .map(({ fileName }) => {
      const attrs = makeHtmlAttributes(attributes.script);
      return `<script defer src="${publicPath}${fileName}"${attrs}></script>`;
    })
    .join('\n')

  const links = (files.css || [])
    .map(({ fileName }) => {
        const attrs = makeHtmlAttributes(attributes.link);
        return `<link href="${publicPath}${fileName}" rel="stylesheet"${attrs}>`;
    })
    .join('\n')

  const metas = meta
    .map((input) => {
      const attrs = makeHtmlAttributes(input);
      return `<meta${attrs}>`;
    })
    .join('\n  ')

  const template = [
    `<!DOCTYPE html>`,
    `<html${makeHtmlAttributes(attributes.html)}>`,
    `<head>`,
    `  ${metas}`,
    `  <title>${title}</title>`,
    `  <link rel='icon' type='image/png' href='./favicon.png'>`,
    `  ${links}`,
    isHot ?
      `  <script defer src="./${buildDir}/bundle.js"></script>`:
      `  ${scripts}`,
    `</head>`,
    `<body>`,
    `</body>`,
    `</html>`
  ].join('\n')

  return template
}

const outputDir = 'public/build'
const buildDir = 'build'

/** @type {import('rollup').RollupOptions} */
const options = {
  input: 'src/main.ts',
  output: {
    sourcemap: !isProduction,
    format: 'iife',
    name: 'app',
    entryFileNames: isProduction ? `${buildDir}/bundle.[hash].js` : `${buildDir}/bundle.js`,
    assetFileNames: isProduction ? `${buildDir}/[name].[hash][extname]` : `${buildDir}/[name][extname]`,
    dir: './public'
  },
  plugins: [
    isProduction && cleaner ({
      targets: [
        outputDir
      ]
    }),
    svelte({
      preprocess: sveltePreprocess({ sourceMap: !isProduction }),
      compilerOptions: {
        // enable run-time checks when not in production
        dev: !isProduction
      },
      // @ts-ignore
      hot: isHot && {
        // Optimistic will try to recover from runtime
        // errors during component init
        optimistic: true,
        // Turn on to disable preservation of local component
        // state -- i.e. non exported `let` variables
        preserveState: true,

        // See docs of rollup-plugin-svelte-hot for all available options:
        //
        // https://github.com/rixo/rollup-plugin-svelte-hot#usage
      },
    }),
    // we'll extract any component CSS out into
    // a separate file - better for performance
    // NOTE when hot option is enabled, a blank file will be written to
    // avoid CSS rules conflicting with HMR injected ones
    hashFixCSS({ output: 'bundle.css' }),

    html({
      fileName: 'index.html',
      publicPath: './',
      title: 'Веселый носок',

      attributes: {
        html: { lang: 'ru' },
      },

      meta: [
        {
          charset: "utf-8"
        },
        {
          name: "viewport",
          content: "width=device-width,initial-scale=1"
        }
      ],

      template: defaultTemplate
    }),

    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration -
    // consult the documentation for details:
    // https://github.com/rollup/plugins/tree/master/packages/commonjs
    resolve({
      browser: true,
      dedupe: ['svelte']
    }),
    commonjs(),

    typescript({
      sourceMap: !isProduction,
      inlineSources: !isProduction
    }),
    // In dev mode, call `npm run start` once
    // the bundle has been generated
    isDev && !isNollup && serve(),

    // Watch the `public` directory and refresh the
    // browser on changes when not in production
    isLiveReload && livereload('public'),

    // If we're building for production (npm run build
    // instead of npm run dev), minify
    isProduction && terser(),

    hmr({
      public: 'public',
      inMemory: true,

      // Default host for the HMR server is localhost, change this option if
      // you want to serve over the network
      // host: '0.0.0.0',
      // You can also change the default HMR server port, if you fancy
      // port: '12345'

      // This is needed, otherwise Terser (in npm run build) chokes
      // on import.meta. With this option, the plugin will replace
      // import.meta.hot in your code with module.hot, and will do
      // nothing else.
      compatModuleHot: !isHot,
    }),
  ],
  watch: {
    clearScreen: false,
  },
}

export default options