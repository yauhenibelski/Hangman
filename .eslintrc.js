module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
  },
  "extends": 'airbnb-base',
  "overrides": [
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "ignorePatterns": [".eslintrc.js", "webpack.config.js", "build"],
  "rules": {
    "no-underscore-dangle": "off",
    "consistent-return": "off",
    "import/no-cycle": "off",
    "import/prefer-default-export": "off",
    "arrow-body-style": "off",
    "no-param-reassign": "off",
    "no-unused-expressions": "off"
  }
}