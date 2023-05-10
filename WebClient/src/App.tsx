import { Component, JSX, Show, createEffect, createSignal } from 'solid-js';
import {Test} from "./components/Test";
import { Routes, Route } from "@solidjs/router";
import Home from "./Pages/Home";
import logo from './logo.svg';
import styles from './App.module.css';
import Login from './Pages/Login';
import PostLoginHome from './Pages/PostLoginHome';
import RegisterPage from './Pages/RegisterPage';
import ExerciseScheduler from './Pages/ExerciseScheduler';
import WeeklyWorkouts from './Pages/WeeklyWorkouts';
import ExerciseSummary from './Pages/ExerciseSummary';

const App: Component = () => {
  const [isLoggedIn, setIsLoggedIn] = createSignal(true);
  const [isLoggedInText, setIsLoggedInText] = createSignal("In");
  const toggleLogin = () => setIsLoggedIn(!isLoggedIn());
  createEffect(() => {
    if(isLoggedIn()){
      setIsLoggedInText("Out");
    }else{
      setIsLoggedInText("In");
    }
  })
  return (
    <div class={styles.App}>
        <button onClick={() => toggleLogin()}>Log {isLoggedInText()}</button>
        {/* <button onClick={() => toggleLogin()}>Log In</button> */}
        <Routes>
          <Show when={isLoggedIn()} fallback={
            <>
            <button onClick={() => toggleLogin()}>Log Out</button>
              <Route path="/post_login_home" component={PostLoginHome}/>
              <Route path="/exercise_scheduler" component={ExerciseScheduler}/>
              <Route path="/weekly_workouts" component={WeeklyWorkouts}/>
              <Route path="/exercise_summary" component={ExerciseSummary}/>
              
            </>
          }>
            <button onClick={() => toggleLogin()}>Log In</button>
            <Route path="/home" component={Home} />
            <Route path="/" component={Home} />
            <Route path="/login" component={Login}/>
            <Route path="/register" component={RegisterPage}/>
          </Show>
        </Routes>          
    </div>
  );
};

export default App;
