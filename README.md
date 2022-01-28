# React Pokédex

:red_circle: Pokédex developed in React + Typescript

## Install Create React App:

```bash
npx create-react-app my-app --template typescript
```

## Install and config ESlint, Prettier and Editor Config:

Install:

```bash
yarn add eslint --dev
```

Config:

```bash
yarn create @eslint/config
```

Install plugins:

```
yarn add --dev eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin

yarn add -D eslint-config-prettier eslint-plugin-prettier
```

Create/edit file '.eslintrc.json'

```json
{
  "env": {
    "browser": true,
    "es2021": true,
    "jest": true
  },
  "extends": [
    "plugin:react/recommended",
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    // "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    "plugin:react-hooks/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "react-hooks",
    "@typescript-eslint",
    "prettier"
  ],
  "rules": {
    "prettier/prettier": "error",
    "react/react-in-jsx-scope": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-props-no-spreading": "off",
    "no-unused-expressions": "off",
    "react/prop-types": "off",
    "import/no-extraneous-dependencies": "off",
    "import/prefer-default-export": "off",
    "no-param-reassign": 0,
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".tsx",
          ".ts"
        ]
      }
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "ts": "never",
        "tsx": "never"
      }
    ]
  },
  "settings": {
    "import/resolver": {
      "node": {
        "paths": [
          "src"
        ],
        "extensions": [
          ".js",
          ".jsx",
          ".ts",
          ".tsx"
        ]
      }
    }
  }
}
```

Create file '.prettierrc.js'

```
module.exports = {
  semi: true,
  trailingComma: 'all',
  singleQuote: true,
  printWidth: 120,
  tabWidth: 2
}
```

Create '.editorconfig'

```
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```

Run eslint:

```
yarn eslint src/**/*.tsx --fix
```

## Install Styled Components:

```
yarn add styled-components
```
