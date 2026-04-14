import React from 'react';
import { GlobalizeProvider } from '@theo-i18n/globalize-kit'
import './globalize'

// screen
import HomeScreen from './screens/Home';

export default function App() {
  return (
    <GlobalizeProvider>
      <HomeScreen />
    </GlobalizeProvider>
  );
}
