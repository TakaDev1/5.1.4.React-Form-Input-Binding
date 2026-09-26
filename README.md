# 5.1.4.React-Form-Select-Value

## 目次

* [概要](#概要)
* [課題](#課題)
* [条件](#条件)
* [解答例](#解答例)
* [学習内容](#学習内容)
* [使用技術](#使用技術)
* [ディレクトリ構成](#ディレクトリ構成)
* [実装内容](#実装内容)
* [動作](#動作)
* [起動方法](#起動方法)

## 概要

Reactの`useState`を使用して、セレクトボックスの選択状態を管理するフォームを実装する練習アプリです。

選択されたオプションを取得し、画面上にTailwind CSSを使用した青背景のメッセージとして表示します。

## 課題

### 問題文

セレクトボックスを作成し、選択されたオプションに応じてTailwind CSSで青背景のメッセージに選択内容を表示してください。

### 条件

1. TypeScriptで作成すること
2. `useState`でselectの選択値を管理すること
3. コンポーネント名は`SelectPage`とすること

## 解答例

```tsx
import React, { useState } from "react";

const SelectPage = () => {
  const [selectedOption, setSelectedOption] = useState("option1");

  const handleChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="p-4">
      <select
        value={selectedOption}
        onChange={handleChange}
        className="rounded border p-2"
      >
        <option value="option1">オプション1</option>
        <option value="option2">オプション2</option>
        <option value="option3">オプション3</option>
      </select>

      <p className="mt-2 bg-blue-200 p-2">
        選択されたオプション: {selectedOption}
      </p>
    </div>
  );
};

export default SelectPage;
```

## 学習内容

* `useState`によるselectの状態管理
* `HTMLSelectElement`のイベント型
* `React.ChangeEvent`の利用
* `event.target.value`による選択値の取得
* `onChange`による状態更新
* カスタムフックによるフォームロジックの分離
* Propsによる状態とイベント処理の受け渡し
* Tailwind CSSによるフォームのスタイリング

## 使用技術

* React
* TypeScript
* Vite
* Tailwind CSS

## ディレクトリ構成

```text
src/
├── hooks/
│   └── useHandleSelect.ts
├── pages/
│   └── SelectPage.tsx
├── App.tsx
├── index.css
└── main.tsx
```

## 実装内容

### 1. selectの状態を管理

`useState`を使用して、選択されているオプションを管理します。

```tsx
const [selectedOption, setSelectedOption] = useState("option1");
```

初期値には`option1`を設定しています。

### 2. 選択値を取得

`select`の変更イベントから選択された値を取得します。

```tsx
const handleChange = (
  event: React.ChangeEvent<HTMLSelectElement>,
) => {
  setSelectedOption(event.target.value);
};
```

`event.target.value`には、選択された`option`の`value`が入ります。

### 3. カスタムフックでロジックを分離

selectの状態と変更処理を`useHandleSelect.ts`に分離します。

```tsx
return {
  selectedOption,
  handleChange,
};
```

ページ側ではカスタムフックを使用します。

```tsx
const { selectedOption, handleChange } = useHandleSelect();
```

### 4. 選択内容を表示

取得した選択値を画面に表示します。

```tsx
<p className="mt-2 bg-blue-200 p-2">
  選択されたオプション: {selectedOption}
</p>
```

## 動作

初期状態では「オプション1」が選択されています。

```text
[ オプション1 ▼ ]

選択されたオプション: option1
```

「オプション2」を選択すると、

```text
[ オプション2 ▼ ]

選択されたオプション: option2
```

「オプション3」を選択すると、

```text
[ オプション3 ▼ ]

選択されたオプション: option3
```

のように表示内容が更新されます。

## 起動方法

### パッケージのインストール

```bash
npm install
```

### 開発サーバー起動

```bash
npm run dev
```

ブラウザで表示されたURLにアクセスしてください。
