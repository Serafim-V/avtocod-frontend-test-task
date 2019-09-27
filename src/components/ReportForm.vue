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
  import { mapActions } from 'vuex'

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
      ...mapActions({
        ADD_REPORT: 'reports/addReport'
      }),

      test(regExp, textError) {
        const id = this.id.trim()
        if (!regExp.test(id)) {
          this.idError = textError
          return false
        } else {
          return true
        }
      },
      checkBody() {
        let regExp, textError
        regExp = new RegExp('.{7,15}')
        textError = 'Значение должно быть от 7 до 15 символов'
        if (!this.test(regExp, textError)) return

        regExp = new RegExp('[A-Za-z0-9\\-\\s]{7,15}')
        textError = 'Латиница, цифры, пробел и дефис(-)'
        if (!this.test(regExp, textError)) return

        this.idError = null
      },
      checkGRZ() {
        let regExp, textError
        const tmpl = '[АВЕКМНОРСТУХавекмнорстух]'

        regExp = new RegExp(`.{8,9}`, 'i')
        textError = 'Значение должно быть от 8 до 9 символов'
        if (!this.test(regExp, textError)) return

        regExp = new RegExp(`^${tmpl}.{7,8}`)
        textError = 'Недопустимый символ 1'
        if (!this.test(regExp, textError)) return

        regExp = new RegExp(`^${tmpl}\\d{3}.{4,5}`)
        textError = 'Символы 2-4 цифры'
        if (!this.test(regExp, textError)) return

        regExp = new RegExp(`^${tmpl}\\d{3}${tmpl}{2}.{2,3}`)
        textError = 'Недопустимы символ 5-6'
        if (!this.test(regExp, textError)) return

        regExp = new RegExp(`^${tmpl}\\d{3}${tmpl}{2}\\d{2,3}`)
        textError = 'Символы 7-9 цифры'
        if (!this.test(regExp, textError)) return

        this.idError = null
      },
      checkVIN() {
        this.idError = null
      },
      validate() {
        switch (this.type) {
          case "BODY":
            this.checkBody()
            break
          case "VIN":
            this.checkVIN()
            break
          case "ГРЗ":
            this.checkGRZ()
            break
        }
      },
      doSomething(type) {
        this.type = type
        this.id = ''
        this.idError = null
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
        this.ADD_REPORT(report)
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
