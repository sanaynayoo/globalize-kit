# 🌍 @theo-i18n/globalize-kit

<p align="center">
  <img src="https://raw.githubusercontent.com/sanaynayoo/globalize-kit/main/assets/demo.gif" alt="Demo" width="360" />
</p>

A lightweight, TypeScript-first internationalization toolkit for React Native, Expo, and React applications.

## ✨ Features

- 🌐 Multi-language translation support
- ⚛️ Optimized for React Native and Expo
- 🔷 Built with TypeScript
- 🔄 Dynamic language switching
- 🪶 Lightweight and dependency-free
- 🧩 Supports nested translations
- 🔁 Fallback language support

---

## 📦 Installation

```bash
npm i @theo-i18n/globalize-kit

```
### Or

```bash
yarn add @theo-i18n/globalize-kit

```

## 🚀 Quick Start

### 1. Define Your Translations
```bash
# Create your own translation file under helpers/translations/en
# en.ts
export const en = {
  auth: {
    login: "Login"
  },
  register: "Register",
};

#Create your own translation file under helpers/translations/my
# my.ts
export const my = {
  auth:{
    login: "အကောင့်ဝင်ရန်",
  },
  register: "စာရင်းသွင်းရန်",
};

#Create your own translation file under helpers/translations/fr
# fr.ts
export const fr = {
    auth: {
        login: "Connexion",
    },
    register: "S'inscrire",
};

```

### 2. Initialize the Library

``` bash
// globalize.ts

import { createGlobalize } from "@theo-i18n/globalize-kit";
import { en, my } from "./translations";

createGlobalize({
  defaultLanguage: "en",
  fallbackLanguage: "en",
  translations: {
      en,
      my,
  },
});

```

### 3. Wrap Your Application

``` bash
// App.tsx

import React from "react";
import { GlobalizeProvider } from "@theo-i18n/globalize-kit";
import "./globalize";
import HomeScreen from "./HomeScreen";

export default function App() {
  return (
    <GlobalizeProvider>
      <HomeScreen />
    </GlobalizeProvider>
  );
}

```

### 4. Use the Hook in Your Components

``` bash
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useTranslation } from '@theo-i18n/globalize-kit'

export default function HomeScreen() {
  const { t, language, changeLanguage } = useTranslation();

  return (
    <View>
      <Text>{t('auth.login')}</Text>

      <TouchableOpacity onPress={() => changeLanguage("my")}>
        <Text>Change Language</Text>
      </TouchableOpacity>
    </View>
  );
}

```

### 🌍 Recommended ISO Language Codes

| Language | ISO Code |
|----------|----------|
| English | `en` |
| Burmese (Myanmar) | `my` |
| Spanish | `es` |
| French | `fr` |
| German | `de` |
| Chinese | `zh` |
| Japanese | `ja` |
| Korean | `ko` |
| Portuguese | `pt` |
| Italian | `it` |
| Dutch | `nl` |
| Turkish | `tr` |
| Hindi | `hi` |
| Thai | `th` |
| Vietnamese | `vi` |


## 📊 Feature Summary

| Feature | Supported | Description |
|:--------|:---------:|-------------|
| Flat Translation Keys | ✅ | Supports simple key-value translations like `t("login")`. |
| Nested Keys (Dot Notation) | ✅ | Access nested values such as `t("auth.login")`. |
| TypeScript Support | ✅ | Fully typed for an improved developer experience. |
| React Native & Expo Compatible | ✅ | Designed for seamless integration with Expo and React Native. |
| Current Language Code | ✅ | Retrieve the active language at runtime using `language` (e.g., `en`, `my`). |
| Dynamic Language Switching | ✅ | Change languages at runtime using `changeLanguage()`. |
| Fallback Language | ✅ | Falls back to a default language when a key is missing. |
| Missing Key Handling | ✅ | Returns the key itself when a translation is unavailable. |
| Global State Management | ✅ | Uses React Context for app-wide localization. |
| Lightweight & Dependency-Free | ✅ | No external dependencies required. |
| ESM Module Support | ✅ | Compatible with modern JavaScript module systems. |
| Scoped npm Package | ✅ | Distributed as `@theo-i18n/globalize-kit`. |
| Tree-Shakable Exports | ✅ | Optimized for smaller bundle sizes. |


## 📄 License

This project is licensed under the MIT License.

If you find `@theo-i18n/globalize-kit` useful, please consider sharing it, writing about it, or giving it a ⭐ on GitHub.