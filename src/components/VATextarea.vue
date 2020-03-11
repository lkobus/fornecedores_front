<template>
  <textarea
    class="form-control"
    :rows="rowCount"
    :placeholder="placeholder"
    :disabled="isDisabled"
    :isHorizontal="true"
    v-model="field"
    v-on:change="changeField"
  ></textarea>
</template>

<script>
export default {
  name: 'va-textarea',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    rowCount: {
      type: Number,
      default: 3
    },
    isDisabled: {
      type: Boolean,
      default: false
    }
  },
  data: function(){
    return {
      field : ""
    }
  },
  methods : {
    changeField(){
      this.$emit('change', this.field)
    }
  },
  created () {

  }
}
</script>
