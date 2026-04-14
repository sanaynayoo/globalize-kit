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
  login: "Login",
  register: "Register",
};

#Create your own translation file under helpers/translations/mm
# mm.ts
export const mm = {
  login: "လော့ဂ်အင်",
  register: "အကောင့်ဖွင့်ပါ",
};

```

### 2. Initialize the Library

``` bash
// globalize.ts

import { createGlobalize } from "@theo/globalize-kit";
import { en, mm } from "./translations";

createGlobalize({
  defaultLanguage: "en",
  fallbackLanguage: "en",
  translations: {
      en,
      mm,
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

<!-- ## 📚 API Reference -->

