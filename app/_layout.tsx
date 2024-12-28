import '../global.css';

import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

export default function Layout() {
  return (
    <>
      <Stack />
      <StatusBar style="auto" />
    </>
  );
}
