<template>
  <div class="sidebar">
    <template v-if="$resize && $mq.above(993)">
      <p class="sidebar__header">Demo application</p>
      <ul class="menu sidebar__menu">
        <li class="menu__item menu__item--active">Список отчетов</li>
        <li class="menu__item" @click="logout">Выход</li>
      </ul>
    </template>
    <template v-else>
      <ul class="menu sidebar__menu">
        <li class="menu__item menu__item--active">
          <img src="../assets/burger.png" alt="">
        </li>
        <li class="menu__item" @click="logout">
          <img src="../assets/io.png" alt="">
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
  export default {
    name: "Sidebar",
    methods: {
      logout() {
        this.$store.dispatch('auth/logout')
        this.$router.push('/login')
      }
    }
  }
</script>

<style lang="scss">
  .sidebar {
    background: #067EFF;
    height: 100vh;
    width: 215px;
    position: fixed;
    top: 0px;
    left: 0px;
    padding: 40px 0;
    @media (max-width: 992px) {
      width: 35px;
    }

    &__header {
      color: #fff;
      text-align: center;
      font-size: 19px;
      line-height: 24px;
      letter-spacing: 0.4px;
      margin-bottom: 60px;
    }
  }

  .menu {
    &__item {
      line-height: 56px;
      padding-left: 30px;
      font-weight: 400;
      color: #fff;
      @media (max-width: 992px) {
        padding-left: 0;
        height: 56px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      &:hover {
        cursor: pointer;
      }

      &--active {
        background: #FFD306;
        color: #000;
        border-left: 3px solid #000;
      }
    }
  }
</style>
