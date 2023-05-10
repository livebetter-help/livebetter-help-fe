import { Component, JSX, Show, createSignal } from 'solid-js';
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
  const toggleLogin = () => setIsLoggedIn(!isLoggedIn());
  return (
    <div class={styles.App}>
        <Routes>
          <Show when={isLoggedIn()} fallback={
            <>
              <Route path="/post_login_home" component={PostLoginHome}/>
              <Route path="/exercise_scheduler" component={ExerciseScheduler}/>
              <Route path="/weekly_workouts" component={WeeklyWorkouts}/>
              <Route path="/exercise_summary" component={ExerciseSummary}/>
            </>
          }>
            <Route path="/home" component={Home} />
            <Route path="/" component={Home} />
            <Route path="/login" component={Login}/>
            <Route path="/register" component={RegisterPage}/>
          </Show>

            
            {/* <Route path="/post_login_home" component={Login}/>
            
            <Route path="/exercise_scheduler" component={Login}/>
            <Route path="/weekly_workouts" component={Login}/>
            <Route path="/exercise_summary" component={Login}/> */}
        </Routes>          
        <button onClick={() => toggleLogin()}>Log In</button>
        <p> This Button Will Allow You To Access The Loggin Restricted Pages </p>
    </div>
  );
};

export default App;
