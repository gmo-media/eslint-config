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
  "extends": "@gmo-media/eslint-config/es6"
}
```

## Rule sets

### `@gmo-media`
* for legacy JavaScript.
* Same as `@gmo-media/eslint-config` and `@gmo-media/eslint-config/index`.

### `@gmo-media/eslint-config/es5`
* for modern es5 script.

### `@gmo-media/eslint-config/es5`
* for es6 script.

### `@gmo-media/eslint-config/react`
* for with React.
* Please install the `eslint-plugin-react`.

## Development
1. Edit the rules.
2. `npm test`
3. Update version of package.json.
4. `git commit -am 'message'`
5. `git push` and `npm publish --access=public`

## License

MIT
