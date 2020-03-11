<template>

  <div v-if="isHorizontal"
    class="form-group"
  >

    <label :for="vaId" class="col-sm-2 control-label">{{ title }}</label>
    <div class="col-sm-10">
      <input v-if="mask !== '*'"
        :type="type"
        :class="[formControl, getSize]"
        :id="vaId"
        v-mask="mask"
        :placeholder="placeholder"
        :value="value"
        v-model="field"
        v-on:change="changeField"
        >

      </input>
      <input v-if="mask === '*'"
        :type="type"
        :class="[formControl, getSize]"
        :id="vaId"
        :placeholder="placeholder"
        :value="value"
        v-model="field"
        v-on:change="changeField">
      </input>
    </div>

  </div>
</template>

<script>

export default {
  name: 'va-input',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    vaId: {
      type: String
    },
    placeholder: {
      type: String,
      default: 'Enter Text...'
    },
    size: {
      type: String
    },
    value: {
      type: String
    },
    isFormControl: {
      type: Boolean,
      default: true
    },
    isHorizontal: {
      type: Boolean,
      default: false
    },
    title: {
      type: String
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    mask: {
      type: String,
      default: "*"
    }
  },
  data : function() {
    return {
      field : ""
    }
  },
  computed: {
    getSize () {
      if (!this.size) {
        return ''
      }

      return 'input-' + this.size
    },
    formControl () {
      return this.isFormControl ? 'form-control' : ''
    }
  },
  methods : {
    changeField(){
      this.$emit('change', this.field)
    }
  },
  created () {

  },


}
</script>
