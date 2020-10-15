import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import Navigator from './routers/homeStack';

export default function App() {
  return (
    <Navigator/>
  );
}

