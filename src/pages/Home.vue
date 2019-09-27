<template>
  <div class="layout">

    <Sidebar/>

    <div class="content">
      <div class="card">
        <div class="card__title">
          Создать отчет
        </div>

        <report-form/>

      </div>

      <div class="card">
        <div class="card__title">
          Все отчеты
        </div>

        <Reports/>

      </div>
    </div>
  </div>
</template>

<script>
  import Sidebar from '../components/Sidebar'
  import ReportForm from '../components/ReportForm'
  import Reports from '../components/Reports'

  export default {
    name: "Index",
    components: {
      Sidebar,
      ReportForm,
      Reports
    }
  }
</script>

<style lang="scss">
  .card {
    background: #fff;
    padding: 15px;
    margin-bottom: 30px;
    border: 1px solid #DFE0EB;
    box-sizing: border-box;
    border-radius: 8px;

    &__title {
      font-size: 24px;
      line-height: 30px;
      letter-spacing: 0.3px;
      margin: 8px 0;
      @media (max-width: 425px) {
        font-size: 18px;
      }
    }
  }

  .header {
    margin-bottom: 30px;
  }

  .content {
    padding: 30px 15px 30px 230px;
    @media (max-width: 992px) {
      padding-left: 45px;
    }
  }

  .form-report {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;

    &__item {
      margin-right: 30px;
      width: 25%;
      @media(max-width: 1200px) {
        width: 33%;
      }
      @media (max-width: 768px) {
        margin-right: 0;
        width: 100%;
      }
    }

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  }

  .table {
    width: calc(100% + 30px);
    margin: 0 -15px;
    border-collapse: collapse;

    td, .tr {
      border-bottom: 1px solid #DFE0EB;
      padding: 0 15px;
      height: 50px;
      color: #252733;
    }
  }
</style>
