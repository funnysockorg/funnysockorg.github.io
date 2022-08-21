<script lang="ts">
  import { inviteUrl } from "./common"
</script>

<header>
  <div class="container">
    <div class="container__item--empty"/>
    <div class="container__item--content info_container center">
      <div class="info_container__item--content">
        <h2>Discord-сервер</h2>
        <h1>«Веселый носок»</h1>
        <div style="margin-bottom: 2vh;">Если вам давно за 18-ть и вы отчаялись искать себе уютное местечко на просторах Discord'а, где нет докучливой шпаны с их мелкими проблемками, идиотским поведением и дурацким молодежным сленгом, то это место именно для вас. Здесь вы найдете взрослое общение на любой вкус, подурачитесь вволю и блеснете своими сакральными знаниями, приобретенными с годами. Здесь вы сможете поиграть в картишки или любые другие настольные игры, как когда-то играли в кругу друзей, пока их не затянуло в водоворот взрослой жизни. В «Веселом носке» мы встретим вас с распростертыми объятьями, глупыми, но милыми шутками, и всячески разбавим скучные серые деньки. Добро пожаловать в «Веселый носок»!</div>
        <div class="center">
          <div class="join">
            <a href={inviteUrl}>
              <img class="join__image image_button" src="./assets/join.png" alt="присоединиться">
            </a>
          </div>
        </div>
      </div>
      <div class="info_container__item--empty" />
      <div class="info_container__item--logo center">
        <img class="logo-img" src="./assets/hero-logo.png" alt="лого">
      </div>
    </div>
    <div class="container__item--down_arrow down_arrow_container" on:click={() => void console.log("join down")}>
      <!-- <img class="image_button" src="./assets/down-arrow.png" alt="down_arrow" /> -->
    </div>
  </div>
</header>

<style>
  header {
    height: 100vh;
    background-color: rgb(255, 255, 255);
  }

  .container {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .container__item--empty {
    height: 100%;
    flex-grow: 1;
  }
  .container__item--content {
    height: 100%;
    flex-grow: 1;
  }
  .container__item--down_arrow {
    height: 100%;
    flex-grow: 1;
  }

  .down_arrow_container {
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }

  .info_container {
    display: flex;
  }
  .info_container__item--content {
    flex-basis: 500px;
  }
  .info_container__item--empty {
    width: 110px;
  }
  .info_container__item--logo {
    flex-basis: 425px;
  }

  @media (max-width: 800px), (max-height:580px) {
    .info_container__item--empty {
      display: none;
    }
    .info_container__item--logo {
      display: none;
    }
  }

  .logo-img {
    width: 100%;
  }

  .join {
    width: 30vh;
  }

  .join__image {
    width: 100%;
  }
</style>
