<template>
  <form id="report" class="form form-report">
    <div class="form-report__item">
      <p class="form__label form-report__label">
        <label for="id">Идентификатор</label>
      </p>
      <p>
        <input type="text" id="id" class="input form__input" style="text-transform: uppercase" v-model="id">
      </p>
      <p v-if="idError" v-text="idError" class="input__error"></p>
    </div>
    <div class="form-report__item">
      <p class="form__label form-report__label">
        <label for="typeId">Тип идентификатора</label>
      </p>
      <p>
        <Select :items="types" v-on:my-event="doSomething"/>
      </p>
    </div>
    <div class="form-report__item">
      <button
          class="button form-report__button"
          @click="addReport"
      >
        Создать
      </button>
    </div>
  </form>
</template>

<script>
  import Select from './Select'
  import _ from 'lodash'
  import data from '../common'

  export default {
    name: "ReportForm",
    components: {
      Select
    },
    data() {
      return {
        idError: null,
        types: data.typeId,
        status: data.status,
        id: '',
        type: ''
      }
    },
    methods: {
      validate() {
        const id = this.id.trim()
        let regExp
        switch (this.type) {
          case "BODY":
            if (!/.{7,15}/.test(id)) {
              this.idError = 'Значение должно быть от 7 до 15 символов'
              return
            }
            if (!/[A-Za-z0-9\-\s]{7,15}/.test(id)) {
              this.idError = 'Латиница, цифры, пробел и дефис(-)'
              return
            }
            this.idError = null
            break
          case "VIN":
            break

          case "ГРЗ":
            if (!/.{8,9}/.test(id)) {
              this.idError = 'Значение должно быть от 8 до 9 символов'
              return
            }

            regExp = /^[АВЕКМНОРСТУХ].{7,8}/
            if (!regExp.test(id)) {
              this.idError = 'Недопустимый символ 1'
              return
            }

            regExp = /^[АВЕКМНОРСТУХ]\d{3}.{4,5}/
            if (!regExp.test(id)) {
              this.idError = 'Символы 2-4 цифры'
              return
            }

            regExp = /^[АВЕКМНОРСТУХ]\d{3}[АВЕКМНОРСТУХ]{2}.{2,3}/
            if (!regExp.test(id)) {
              this.idError = 'Недопустимы символ 5-6'
              return
            }

            regExp = /[АВЕКМНОРСТУХ]\d{3}[АВЕКМНОРСТУХ]{2}\d{2,3}/
            if (!regExp.test(id)) {
              this.idError = 'Символы 7-9 цифры'
              return
            }
            this.idError = null
            break
        }
      },
      doSomething(type) {
        this.type = type
      },
      addReport(e) {
        e.preventDefault()
        this.validate()
        if (this.idError) return

        const report = {
          id: this.id.toUpperCase(),
          type: this.type,
          date: new Date().toLocaleString().replace(/,/, ''),
          status: this.status[_.random(0, this.status.length - 1)]
        }
        this.$store.dispatch('reports/addReport', report)
      }
    }
  }
</script>

<style lang="scss">
  .form-report {
    &__button {
      margin-bottom: 30px;
      @media(max-width: 425px) {
        margin: 0 auto;
        display: block;
        margin-bottom: 0;
      }
    }

    .form &__label {
      font-size: 14px;
    }

    .input {
      height: 40px;
      width: 100%;
      font-size: 18px;
    }

    .button {
      height: 40px;
      width: 170px;
    }
  }
</style>
