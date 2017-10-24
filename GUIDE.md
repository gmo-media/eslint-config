# 利用およびルール作成にあたってのガイド

## 基本的な考え方
これは各サイトに共通のルールを適用するためのものであり、最低限の設定しか行っていません。
Environments は利用する側のESLint設定で指定するものとします。（`legacy` を覗く）

## Rule sets
用途に応じて複数のルールセットを作成します。
すべてのルールは `eslint:recommended` を extends します。

### `legacy`
改修は行わないものの、コードを読んだり小さな修正をしたりすることがある、レガシーコード向けのルールセットです。

* Environments
    * `browser` と `jquery` を有効
* Rules
    * Possible Errors
        * recommended のうち、バグ発見の可能性が低いものは `off`
    * Best Practices
        * recommended のうち、fix オプションで修正できないものは `off`
    * Variables
        * recommended の設定をすべて `off`
    * Stylistic Issues
        * recommended のまま

### `es5`
保守性が重視される、ES5で書かれたコードに適用します。

### `es6`
ES6で書かれたコードに適用します。

### `react`
Reactを使っているコードに適用します。

* `eslint-plugin-react` を使用します。
* `plugin:react/recommended` を extends します。

## 設定値について
* recommended のままでよい設定は指定しません。
* `--fix` オプションで修正できるものは `error`、できないものは `warn` にします。

## 更新について
* Issueを立て、設定の変更を理由つきでリクエストします。
* 別の媒体担当者からの意見を元に、採用するかどうか検討します。
* 採用したら設定を変更し、マイナーバージョンを上げて公開します。
