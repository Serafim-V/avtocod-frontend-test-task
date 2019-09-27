<template>
  <div class="">
    <template v-if="$resize && $mq.above(769)">
      <table class="table">
        <thead>
        <td>Идентификатор</td>
        <td>Тип идентификатора</td>
        <td>Дата</td>
        <td>Статус</td>
        <td></td>
        </thead>
        <tr
            v-for="report in REPORTS"
            :key="report.id"
        >
          <td>{{ report.id }}</td>
          <td>{{ report.type }}</td>
          <td>{{ report.date }}</td>
          <td>
            <div
                class="chip"
                :class="{
            'chip--red': report.status === 'ERROR',
            'chip--green': report.status === 'DONE',
            'chip--yellow': report.status === 'PROGRESS',
          }
        ">
              {{ report.status }}
            </div>
          </td>
          <td>
            <button
                class="button--remove"
                @click="removeReport(report.id)"
            >
            </button>
          </td>
        </tr>
      </table>
    </template>
    <template v-else>
      <div class="table">
        <div
            class="table__row table__row--width-769"
            v-for="report in REPORTS"
            :key="report.id"
        >
          <div style="display: flex; justify-content: space-between; align-items: center">
            <span>{{ report.id }}</span>
            <span style="width: 90px; display: flex;justify-content: space-between; align-items: center">
          {{ report.type }}
          <button
              class="button--remove"
              @click="removeReport(report.id)"
          ></button>
        </span>
          </div>
          <div style="display: flex; justify-content: space-between">
            <span>{{ report.date }}</span>
            <div
                class="chip"
                :class="{
            'chip--red': report.status === 'ERROR',
            'chip--green': report.status === 'DONE',
            'chip--yellow': report.status === 'PROGRESS',
          }
        ">
              {{ report.status }}
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: "Reports",
    computed: {
      ...mapGetters({
        REPORTS: 'reports/reports'
      }),
    },
    methods: {
      ...mapActions({
        REMOVE_REPORT: 'reports/removeReport'
      }),
      removeReport(id) {
        if (confirm('Удалить отчет?')) {
          this.REMOVE_REPORT(id)
        }
      }
    }
  }
</script>

<style lang="scss">
  tr {
    &:hover td {
      background: #F7F8FF;
      cursor: pointer;
    }
  }

  .table__row {
    border-top: 1px solid #DFE0EB;
    height: auto;
    padding: 15px;

    &:hover {
      background: #F7F8FF;
    }

    .button--remove {
      margin: 0;
    }

    &:last-child {
      padding-bottom: 0;
    }
  }

  .chip {
    width: 90px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    text-transform: uppercase;
    font-size: 11px;
    border-radius: 12px;
    color: #fff;

    &--red {
      background: #F12B2C;
    }

    &--yellow {
      background: #F1A22B;
    }

    &--green {
      background: #29CC97;
    }
  }

  .button--remove {
    background: url('../assets/trash.png') center / cover;
    width: 24px;
    height: 24px;
    margin: 10px 0;
  }
</style>
