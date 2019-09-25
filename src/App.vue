<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss">
  *,
  ul {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Muli, Helvetica, Arial;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.3px;
    color: #000;
    background: #F7F8FC;
  }

  input:focus,
  button:focus {
    outline: none;
  }

  button {
    border: none;
  }
</style>
