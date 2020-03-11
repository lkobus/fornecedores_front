<template>
    <div>
    <table class="table">
        <thead>
            <tr>
                <th>#</th>
                <th v-for="(column, index) in columns" v-bind:key="index">{{column}}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(d, index) in data" v-bind:key="index" scope="row">
                <th scope="row">{{index}}</th>
                <td v-for="(column, propIndex) in columns" v-bind:key="propIndex">{{d[column]}}</td>
            </tr>
        </tbody>
        </table>
    </div>
</template>

<script>
export default {
  name: 'Table',
  props: {
      columns: {
          type: Array,
          default: () => { return [] }
      },
      data: {
          type: Array,
          default: () => { return [] }
      }
  },
  created () {

  }
}
</script>
