import type { Component, JSX } from 'solid-js';
import {Test} from "./components/Test";
import { Routes, Route } from "@solidjs/router";
import Home from "./Pages/Home";
import logo from './logo.svg';
import styles from './App.module.css';
import Login from './Pages/Login';

const App: Component = () => {

  return (
    <div class={styles.App}>
        <Routes>
            <Route path="/home" component={Home} />
            <Route path="/" component={Home} />
            <Route path="/login" component={Login}/>
            <Route path="/post_login_home" component={Login}/>
            <Route path="/register" component={Login}/>
            <Route path="/exercise_scheduler" component={Login}/>
            <Route path="/weekly_workouts" component={Login}/>
            <Route path="/exercise_summary" component={Login}/>
        </Routes>
    </div>
  );
};

export default App;
