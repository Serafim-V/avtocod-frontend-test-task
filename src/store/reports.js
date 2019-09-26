export default {
  state: {
    reports: [
      {id: '4F2YU08102KM26251', type: 'VIN', date: '26.05.2019 10:00:00', status: 'ERROR'},
      {id: 'A007AA197', type: 'ГРС', date: '26.05.2019 10:00:00', status: 'PROGRESS'},
      {id: 'XYZ12-3456789', type: 'BODY', date: '26.05.2019 10:00:00', status: 'DONE'},
    ]
  },
  getters: {
    reports: state => state.reports,
    typeId: state => state.typeId,
    status: state => state.status
  },
  mutations: {
    addReport(state, report) {
      state.reports.push(report)
    },
    removeReport(state, id) {
      const reports = state.reports
      state.reports = reports.filter(i => i.id !== id)
    }
  },
  actions: {
    addReport({commit}, report) {
      commit('addReport', report)
    },
    removeReport({commit}, id) {
      commit('removeReport', id)
    }
  }
}
