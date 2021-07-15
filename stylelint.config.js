module.exports = {
  processors: ['stylelint-processor-styled-components'],
  extends: ['stylelint-config-standard', 'stylelint-config-react-native-styled-components'],
  plugins: [
    'stylelint-react-native',
    'stylelint-order',
  ],
  rules: {
    'order/properties-alphabetical-order': true,
    'value-keyword-case': null,
  },
};
