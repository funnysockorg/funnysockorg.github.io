<script lang="ts">

</script>

<nav class="center">
  <div class="container">
    <div class="container__left">
      <div class="brand">
        <div class="brand__logo center">
          <img style="width: 100%;" src="/assets/logo.png" alt="brand">
        </div>
        <div class="brand__name">Веселый носок</div>
      </div>
    </div>
    <div class="container__right">
      <div class="right_container">
        <div class="right_container__item">
          У нас есть...
        </div>
        <div class="right_container__item">
          Отзывы
        </div>
        <div class="right_container__end">
          <div class="join">
            Присоединиться
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>

<style>
  nav {
    position: fixed;
    top: 0;
    z-index: 2048;
    width: 100%;
  }

  .container {
    display: flex;

    background-color: rgb(255, 255, 255);
    width: 98%;
    border-radius: 50px;
  }
  .container__left {
    flex-grow: 10;
  }
  .container__right {
    flex-grow: 1;
    margin-right: 5px;
  }

  .brand {
    display: flex;
    align-items: center;
  }
  .brand__name {
    font-size: large;
  }

  .brand__logo {
    width: 40px;
    margin-right: 10px;
  }

  .right_container {
    display: flex;
    justify-content: space-between;

    height: 100%;
  }
  .right_container__item {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .right_container__end {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .join {
    background-color: rgb(192, 196, 218);
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 5px;
    padding-bottom: 5px;

    border-radius: 30px;
  }
</style>
