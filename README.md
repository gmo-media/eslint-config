# eslint-config

eslint config for gmo-media.

## Basic Usage

```bash
$ npm install --save-dev eslint @gmo-media/eslint-config
```

`.eslintrc` for legacy JavaScript

```json
{
  "extends": "@gmo-media/eslint-config"
}
```

`.eslintrc` for modern es5 script

```json
{
  "extends": "@gmo-media/eslint-config/es5"
}
```

`.eslintrc` for es6 script

```json
{
  "extends": "@gmo-media/eslint-config/es6"
}
```

## with React

```
$ npm install --save-dev eslint eslint-plugin-react @gmo-media/eslint-config
```

`.eslintrc`

```json
{
  "extends": "@gmo-media/eslint-config/react"
}
```

## License

MIT
