<script>
/**
 * String attribute component for vue.js.
 * 
 * @author Dzango Technologies Limited
 * @license MIT
 */
import attributeMixin from '../mixins/attribute'

export default {
  name: 'MultilineTextAttribute',

  mixins: [attributeMixin],
}
</script>

<template>
  <div
    class="c-attribute --string"
    :class="edit ? 'editing' : ''"
  >
    <label>
      {{ label }}
    </label>
    <span>
      {{ modelValue }}
    </span>
    <textarea
      class="input"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>
