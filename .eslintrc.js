module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
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
        "plugin:react/recommended",
        "plugin:prettier/recommended" 
    ],
    "rules": {
        "no-extra-semi": "error",
    }
}
