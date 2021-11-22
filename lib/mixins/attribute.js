const attribute = {
  props: {
    /**
     * The label of the attribute.
     */
    label: {
      type: [String, Function]
    },

    /**
     * The attribute value.
     */
    modelValue: {
      type: [String, Function]
    },

    /**
     * Whether the attribute is editable.
     */
    editable: {
      default: true,
      type: [Boolean, Function]
    },

    /**
     * Whether the attribute is being edited.
     */
    edit: {
      default: false,
      type: [Boolean, Function]
    },
  }
}

export default attribute
