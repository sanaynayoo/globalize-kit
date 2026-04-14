# 🌍 @theo/globalize-kit

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
npm install @theo/globalize-kit

```
### Or

```bash
yarn add @theo/globalize-kit

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

#Create your own translation file under helpers/translations/mm
# my.ts
export const my = {
  auth:{
    login: "အကောင့်ဝင်ရန်",
  },
  register: "စာရင်းသွင်းရန်",
};

```

### 2. Initialize the Library

``` bash
// globalize.ts

import { createGlobalize } from "@theo/globalize-kit";
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
import { GlobalizeProvider } from "@theo/globalize-kit";
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
import { useLocale } from "@theo/globalize-kit";

export default function HomeScreen() {
  const { locale, changeLanguage } = useLocale();

  return (
    <View>
      <Text>{locale.login}</Text>

      <TouchableOpacity onPress={() => changeLanguage("en")}>
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
| Arabic | `ar` |
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
| Scoped npm Package | ✅ | Distributed as `@theo/globalize-kit`. |
| Tree-Shakable Exports | ✅ | Optimized for smaller bundle sizes. |

