<template>
  <div class="page-login">
    <div class="form-wrapper">
      <div class="form-wrapper__title">
        Авторизация
      </div>
      <form action="" class="form form--align-center">
        <p class="form__label"><label for="login">Логин</label></p>
        <p>
          <input
              v-model="login"
              class="input form__input"
              type="text"
              id="login"
              placeholder="username"
          >
        </p>
        <p v-if="loginError" v-text="loginError" class="input__error"></p>
        <p class="form__label"><label for="password">Пароль</label></p>
        <p>
          <input
              v-model="password"
              class="input form__input"
              type="password"
              id="password"
              placeholder="password"
          >
        </p>
        <p v-if="passwordError" v-text="passwordError" class="input__error"></p>
        <button @click="onSubmit" class="button form__button">Войти</button>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        login: '',
        password: '',
        loginError: null,
        passwordError: null
      }
    },
    methods: {
      onSubmit(e) {
        e.preventDefault()
        if (!this.validate()) return

        this.$store.commit('setUser', this.login)

        this.$router.push('/')
      },
      validate() {
        if (this.login !== 'username') {
          this.loginError = 'Такого пользователя не существует'
          return false
        }
        this.loginError = null
        if (this.password !== 'password') {
          this.passwordError = 'Пароль введен не верно'
          return false
        }
        this.passwordError = null
        return true
      }
    }
  }
</script>

<style lang="scss">
  .page-login {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background: linear-gradient(0deg, #067EFF, #067EFF);
  }

  .form-wrapper {
    background: #FFFFFF;
    border: 1px solid #409CFF;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    padding: 30px;
    max-width: 400px;

    &__title {
      font-weight: bold;
      font-size: 24px;
      line-height: 30px;
      color: #409CFF;
      text-align: center;
      margin-bottom: 18px;
    }
  }

  .form {
    &--align-center {
      text-align: center;
    }

    &__label {
      font-size: 18px;
      line-height: 23px;
      margin-bottom: 10px;
      @media (max-width: 425px) {
        margin-bottom: 0;
      }
    }

    &__input {
      margin-bottom: 30px;
      @media (max-width: 425px) {
        margin-bottom: 15px;
      }
    }
  }

  .input {
    width: 100%;
    height: 50px;
    border: 2px solid #CECECE;
    box-sizing: border-box;
    border-radius: 10px;
    font-size: 24px;
    line-height: 30px;
    letter-spacing: 0.3px;
    padding: 0 17px;

    &__error {
      color: red;
      margin-top: -30px;
      line-height: 30px;
      font-size: 12px;
      font-weight: 400;
      @media (max-width: 425px) {
        margin-top: -15px;
      }
    }
  }

  .button {
    background: #FFD306;
    border-radius: 50px;
    min-width: 192px;
    height: 50px;
    font-size: 18px;
    font-weight: bold;

    &:hover {
      cursor: pointer;
      background: darken(#FFD306, 10%);
    }
  }
</style>
