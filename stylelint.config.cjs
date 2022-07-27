module.exports = {
    extends: ['stylelint-config-standard', 'stylelint-config-prettier', 'stylelint-config-standard-scss'],
    plugins: ['stylelint-order'],
    rules: {
      'scss/double-slash-comment-empty-line-before': null,
      'scss/operator-no-unspaced': null,
      'scss/no-global-function-names': null,
      'scss/at-if-closing-brace-newline-after': null,
      'scss/at-if-closing-brace-space-after': null,
      'scss/at-else-empty-line-before': null,
      'named-grid-areas-no-invalid': true,
      'block-no-empty': true,
      'keyframes-name-pattern': null,
      'hue-degree-notation': 'number',
      'at-rule-empty-line-before': [
        'always',
        {
          except: ['blockless-after-same-name-blockless', 'first-nested'],
          ignore: ['after-comment'],
        },
      ],
      'property-no-vendor-prefix': [true, { ignoreProperties: ["background-clip"] }],  
      'function-url-quotes': null,
      'selector-id-pattern': null,
      'no-descending-specificity': null,
      'declaration-block-no-shorthand-property-overrides': null,
      'declaration-block-no-redundant-longhand-properties': null,
      'declaration-empty-line-before': [
        'always',
        {
          except: ['first-nested'],
          ignore: ['after-comment', 'after-declaration', 'inside-single-line-block'],
          message: 'Please, do not leave empty lines',
        },
      ],
      'max-empty-lines': 1,
      'order/order': ['custom-properties', 'declarations'],
      'at-rule-no-unknown': null,
      'order/properties-order': [
        'content',
        'list-type',
        'font',
        'font-size',
        'font-family',
        'font-weight',
        'text-decoration',
        'text-align',
        'line-height',
        'letter-spacing',
        'color',
        'box-sizing',
        'width',
        'min-width',
        'max-width',
        'height',
        'min-height',
        'max-height',
        'display',
        'gap',
        'flex-direction',
        'flex-wrap',
        'flex-flow',
        'align-items',
        'justify-items',
        'justify-content',
        'place-items',
        'place-content',
        'grid',
        'grid-area',
        'grid-auto-columns',
        'grid-auto-flow',
        'grid-auto-rows',
        'grid-column',
        'grid-row',
        'gap',
        'grid-gap',
        'row-gap',
        'column-gap',
        'grid-template-areas',
        'grid-template-columns',
        'grid-template-rows',
        'overflow',
        'overflow-x',
        'overflow-y',
        'background',
        'background-color',
        'background-image',
        'background-position',
        'background-attachment',
        'background-repeat',
        'background-size',
        'margin',
        'margin-top',
        'margin-bottom',
        'margin-left',
        'margin-right',
        'padding',
        'padding-top',
        'padding-bottom',
        'padding-right',
        'padding-left',
        'box-shadow',
        'outline',
        'border',
        'border-radius',
        'border-top',
        'border-bottom',
        'border-left',
        'border-right',
        'border-top-right-radius',
        'border-top-left-radius',
        'border-bottom-right-radius',
        'border-bottom-left-radius',
        'cursor',
        'position',
        'top',
        'bottom',
        'left',
        'right',
        'z-index',
      ],
      'declaration-block-trailing-semicolon': 'always',
      indentation: [2],
      'custom-property-pattern': null,
      'color-function-notation': null,
      'color-no-invalid-hex': true,
      'color-hex-case': [
        'lower',
        {
          message: 'Lowercase letters are easier to distinguish from numbers',
        },
      ],
      'color-no-hex': [
        true,
        {
          message: "We don't want to use Hex colors on the css files.",
        },
      ],
      'selector-class-pattern': null,
    },
  };