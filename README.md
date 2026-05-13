## 🌍 @theo-i18n/globalize-kit

<p align="center">
  <img src="https://raw.githubusercontent.com/sanaynayoo/globalize-kit/main/assets/demo.gif" alt="Globalize Kit Demo" width="100%" />
</p>

A lightweight, TypeScript-first internationalization toolkit for React Native, Expo, and React applications.

---

### ✨ Features

- 🌐 Multi-language translation support
- ⚛️ Works with React Native, Expo, and React
- 🔷 TypeScript-first
- 🔄 Dynamic language switching
- 🧩 Nested translation support
- 🔁 Fallback language support
- 🪶 Lightweight and dependency-free
- 📦 ESM module support

---

### 📦 Installation

#### npm

```bash
npm install @theo-i18n/globalize-kit
```

#### yarn

```bash
yarn add @theo-i18n/globalize-kit
```

---

### 🚀 Quick Start

#### 1. Create Translation Files

#### English

```ts
// translations/en.ts

export const en = {
  welcome: "Welcome!",
  auth: {
    login: "Login",
    register: "Register",
  },
};
```

#### Burmese (Myanmar)

```ts
// translations/my.ts

export const my = {
  welcome: "ကြိုဆိုပါသည်!",
  auth: {
    login: "အကောင့်ဝင်ရန်",
    register: "စာရင်းသွင်းရန်",
  },
};
```

#### French

```ts
// translations/fr.ts

export const fr = {
  welcome: "Bienvenue!",
  auth: {
    login: "Connexion",
    register: "S'inscrire",
  },
};
```

---

#### 2. Initialize Globalize

```ts
// globalize.ts

import { createGlobalize } from "@theo-i18n/globalize-kit";

import { en } from "./translations/en";
import { my } from "./translations/my";
import { fr } from "./translations/fr";

export const globalize = createGlobalize({
  defaultLanguage: "en",
  fallbackLanguage: "en",

  languages: [
    { key: "en", language: "English" },
    { key: "my", language: "Burmese (Myanmar)" },
    { key: "fr", language: "French" },
  ],

  translations: {
    en,
    my,
    fr,
  },
});
```

---

#### 3. Wrap Your App with `GlobalizeProvider`

```tsx
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

---

#### 4. Use Translation in Your Component

```tsx
// HomeScreen.tsx

import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useTranslation } from "@theo-i18n/globalize-kit";

export default function HomeScreen() {
  const { t, language, changeLanguage } = useTranslation();

  return (
    <View style={{ padding: 20 }}>
      <Text>{t("welcome")}</Text>

      <TouchableOpacity
        onPress={() =>
          changeLanguage({
            key: "my",
            language: "Burmese (Myanmar)",
          })
        }
      >
        <Text>Change to Burmese</Text>
      </TouchableOpacity>
    </View>
  );
}
```

---

### 🌍 Recommended ISO Language Codes

| Language | ISO Code |
|----------|----------|
| English | `en` |
| Burmese / Myanmar | `my` |
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

---

### 📊 Feature Summary

| Feature | Supported | Description |
|:--------|:---------:|-------------|
| Flat Translation Keys | ✅ | Supports simple translations like `t("welcome")`. |
| Nested Keys (Dot Notation) | ✅ | Supports nested translations like `t("auth.login")`. |
| TypeScript Support | ✅ | Fully typed for better developer experience. |
| React Native Support | ✅ | Works seamlessly with React Native. |
| Expo Support | ✅ | Fully compatible with Expo projects. |
| React Support | ✅ | Can also be used in React web applications. |
| Current Language Code | ✅ | Access current language using `language`. |
| Dynamic Language Switching | ✅ | Switch languages at runtime using `changeLanguage()`. |
| Fallback Language | ✅ | Uses fallback language when translation is missing. |
| Missing Key Handling | ✅ | Returns the key itself if translation does not exist. |
| Global State Management | ✅ | Uses React Context for app-wide localization. |
| Lightweight | ✅ | Small package size with minimal overhead. |
| Dependency-Free | ✅ | No external dependencies required. |
| ESM Module Support | ✅ | Supports modern JavaScript module systems. |
| Tree-Shakable Exports | ✅ | Optimized for smaller bundle sizes. |
| Scoped npm Package | ✅ | Published as `@theo-i18n/globalize-kit`. |

---

### 📁 Suggested Project Structure

```bash
project-root/
│
├── helpers/translations/
│   ├── en.ts
│   ├── my.ts
│   └── fr.ts
```

---

### 📄 License

MIT License

Copyright (c) 2026 Theo

This project is licensed under the MIT License.

If you find `@theo-i18n/globalize-kit` useful, please consider:

- ⭐ Giving it a star on GitHub
- 📢 Sharing it with others
- ✍️ Writing about it

---