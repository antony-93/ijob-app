import { Alert } from 'react-native';
import { useState } from 'react';
import * as LocalAuthentication from 'expo-local-authentication';
import { Router } from './src/routes/Router';
import { AuthProvider } from './src/core/context/Auth';
import { useFonts } from 'expo-font';

export default function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}