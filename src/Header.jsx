import React from "react";
import logo from './logo.svg';

export default function Header() {
  return (
    <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>SelectBox</h1>
    </header>
  );
}