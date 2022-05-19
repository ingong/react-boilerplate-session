module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "parser": "@babel/eslint-parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "prettier"
    ],
    "extends": [
        "eslint:recommended",
        "plugin:react-hooks/recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended" 
    ],
    "rules": {
        "prettier/prettier": "error",
        "no-extra-semi": "error",
        "no-unused-vars": "warn",
        "no-undef": "warn",
        "react/prop-types": "warn",
        "react/react-in-jsx-scope": "off"
    }
}
