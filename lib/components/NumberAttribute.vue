<script>
/**
 * Number attribute component for vue.js.
 * 
 * @author Dzango Technologies Limited
 * @license MIT
 */
import attributeMixin from '../mixins/attribute'

export default {
  name: 'NumberAttribute',

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
    <input
      class="input"
      type="number"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>
