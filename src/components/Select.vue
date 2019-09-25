<template>
  <div class="">
    <div class="select">
      <input
          type="text"
          id="typeId"
          class="input form__input"
          autocomplete="off"
          @click="openList"
          v-model="select"
      >
      <div class="select__list card">
        <div class="select__item" v-for="item in items" :key="item" @click="changeSelect(item, $event)">
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Select",
    data() {
      return {
        select: this.items[0]
      }
    },
    props: ['items'],
    methods: {
      openList(e) {
        const target = e.target
        const list = target.nextSibling
        list.style.display = 'block'
      },
      changeSelect(type, e) {
        const target = e.target
        const list = target.parentElement
        list.style.display = 'none'
        this.select = type
        this.$emit('my-event', type)
      }
    },
    mounted() {
      this.$emit('my-event', this.select)
    }
  }
</script>

<style scoped lang="scss">
  .select {
    position: relative;

    .input {
      background: url("../assets/polygon.png") no-repeat center right 14px;

      &:hover .select .select__list {
        color: green;
        display: block;
      }
    }

    &__list {
      position: absolute;
      top: calc(100% - 30px);
      left: 0;
      background: #fff;
      width: 100%;
      box-shadow: 0 5px 10px 1px lightgray;
      display: none;
    }

    &__item {
      border-bottom: 1px solid #DFE0EB;
      margin: 0 -15px;
      padding: 7px 15px;

      &:hover {
        background: #F7F8FF;
      }
    }
  }
</style>
