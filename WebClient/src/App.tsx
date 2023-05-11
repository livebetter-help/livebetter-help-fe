import { Component, JSX, Show, createEffect, createSignal } from 'solid-js';
import { Test } from './components/Test';
import { Routes, Route, A } from '@solidjs/router';
import Home from './Pages/Home';
import Login from './Pages/Login';
import PostLoginHome from './Pages/PostLoginHome';
import RegisterPage from './Pages/RegisterPage';
import ExerciseScheduler from './Pages/ExerciseScheduler';
import WeeklyWorkouts from './Pages/WeeklyWorkouts';
import ExerciseSummary from './Pages/ExerciseSummary';
import SignedInAlready from './Pages/SignedInAlready';
import NavBar from './components/OurNavBar';

window.addEventListener('load', () => {
  var mySession = sessionStorage.getItem('loggedIn');
  if (mySession == null) sessionStorage.setItem('loggedIn', 'false');
});

const App: Component = () => {
  const [isLoggedIn, setIsLoggedIn] = createSignal(
      sessionStorage.getItem('loggedIn') === 'true'
    ),
    [isLoggedInText, setIsLoggedInText] = createSignal('In');
  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn());
    sessionStorage.setItem('loggedIn', isLoggedIn() ? 'true' : 'false');
  };
  createEffect(() => {
    if (isLoggedIn()) setIsLoggedInText('Out');
    else setIsLoggedInText('In');
  });
  return (
    <div>
      <NavBar isLoggedIn={isLoggedIn} />
      <button onClick={() => toggleLogin()}>Log {isLoggedInText()}</button>
      <Routes>
        <Show
          when={!isLoggedIn()}
          fallback={
            <>
              <Route path="/post_login_home" component={PostLoginHome} />
              <Route path="/exercise_scheduler" component={ExerciseScheduler} />
              <Route path="/weekly_workouts" component={WeeklyWorkouts} />
              <Route path="/exercise_summary" component={ExerciseSummary} />
              <Route path="/home" component={Home} />
              <Route path="/" component={Home} />
              <Route path="/login" component={SignedInAlready}></Route>
              <Route path="/register" component={SignedInAlready} />
            </>
          }
        >
          <Route path="/home" component={Home} />
          <Route path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={RegisterPage} />
        </Show>
      </Routes>
    </div>
  );
};

export default App;
