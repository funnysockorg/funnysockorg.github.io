<script lang="ts">
  import { onMount } from "svelte"

  import MainNav from "./MainNav.svelte"
  import Hero from "./Hero.svelte"

  export let name: string

  let counter = 0 // @hmr:keep

  onMount(() => {
    const interval = setInterval(() => {
      counter++
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  })
</script>

<main>
  <MainNav />
  <Hero />
  <!-- <p>This page has been open for {counter}s.</p> -->
</main>
