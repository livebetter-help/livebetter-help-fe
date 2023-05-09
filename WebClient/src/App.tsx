import type { Component, JSX } from 'solid-js';
import {Test} from "./components/Test";
import { Routes, Route } from "@solidjs/router";
import Home from "./Pages/Home";
import logo from './logo.svg';
import styles from './App.module.css';

const App: Component = () => {

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> <br/>and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Routes>
            <Route path="/home" component={Home} />
          </Routes>
          Learn Solid
        </a>
        <Test/>
      </header>
    </div>
  );
};

export default App;
