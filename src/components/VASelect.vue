<template>
  <div v-if="isHorizontal"
    class="form-group"
  >
    <label :for="vaId" class="col-sm-2 control-label">{{ title }}</label>
    <div class="col-sm-10">
      <select
      v-on:change="changed"
      class="form-control" :disabled="isDisabled" :multiple="isMultiple">
        <option v-for="(item,index) in list" :value="item.value" :data="item.label" :key="index">
          {{ item.label }}
        </option>
      </select>
    </div>
  </div>
  <select v-else
    class="form-control" :disabled="isDisabled" :multiple="isMultiple">
    <option v-for="(item,index) in list" :value="item.value" :data="item" :key="index">
      {{ item.label }}
    </option>
  </select>
</template>
<script>
export default {
  name: 'va-select',
  props: {
    list: {
      type: Array,
      default: () => {  return  [] }
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    isMultiple: {
      type: Boolean,
      default: false
    },
    isHorizontal: {
      type: Boolean,
      default: false
    },
    title: {
      type: String
    },
    vaId: {
      type: String
    }
  },
  methods : {
    changed(event){
        this.$emit('changed', event.target.value)
    }
  },
  created () {

  }
}
</script>
