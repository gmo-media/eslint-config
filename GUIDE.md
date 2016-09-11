# 利用およびルール作成にあたってのガイド

## 基本的な考え方
これは各サイトに共通のルールを適用するためのものであり、最低限の設定しか行っていません。
Parser Options や Environments などは、利用する側のESLint設定で指定するものとします。

## Rule sets
用途に応じて複数のルールセットを作成します。
すべてのルールは`eslint:recommended`をextendsしています。

### `legacy`
* 改修は行わないものの、コードを読んだり小さな修正をしたりすることがある、レガシーコード向けのルールセットです。
* Environments
    * `browser`と`jquery`を指定しています。
* Rules
    * Possible Errors : すべてデフォルト
    * Best Practices : すべて`off`
    * Strict Mode : 無効（デフォルト）
    * Variables : すべてデフォルト
    * Node.js and CommonJS : すべて`off`（デフォルト）
    * Stylistic Issues :
        * fixオプションで修正可能なものは有効
        * レガシーコードによくあるイディオムは`off`
    * ECMAScript 6 : すべてデフォルト

### `es5`
* 保守性が重視される、ES5で書かれたコードに適用します。
* `legacy`が無効化した設定を戻し、Best Practices や Variables、Stylistic Issues の一部を有効にしています。

### `es6`
* ES6で書かれたコードに適用します。
* `es5`をベースに、ECMAScript 6 向けの設定を追加しています。

### `react`
* Reactを使っているコードに適用します。
* `es6.js`をベースに、JSXとReact用の設定（`eslint-plugin-react`）を追加します。

## 設定値について
* `eslint:recommended`に定義されている設定のみを扱います。それ以外のルールは追加しません。
* デフォルトが`off`になっているルールを有効にする場合は`warn`にします。
* オプションを追加するだけなら`error`のままにします。

## 更新について
* Issueを立て、設定の変更を理由つきでリクエストします。
* 別の媒体担当者からの意見を元に、採用するかどうか検討します。
* 採用したら設定を変更し、マイナーバージョンを上げて公開します。
