# eslint-config

eslint config for gmo-media.

## Basic Usage

Install

```bash
$ npm install --save-dev eslint @gmo-media/eslint-config
```

`.eslintrc`

```json
{
  "extends": "@gmo-media/eslint-config",
  "env": {
    "browser": true
  },
  "rules": {
    "indent": ["error", 2]
  }
}
```

## Rule sets

### `@gmo-media/eslint-config/legacy`
* for legacy JavaScript.

### `@gmo-media/eslint-config/es5`
* for modern es5 script. (default)

### `@gmo-media/eslint-config/es6`
* for es6 script.

### `@gmo-media/eslint-config/react`
* for React.
* Please install the `eslint-plugin-react`.

## Development
1. Edit the rules.
2. `npm test`
3. `npm version XXX -m 'message'`
4. `git push origin master`
5. `git push origin v1.x.x`
6. `npm publish --access=public`

## License

MIT
