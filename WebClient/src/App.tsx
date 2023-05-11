import { Component, JSX, Show, createEffect, createSignal, } from 'solid-js';
import {Test} from "./components/Test";
import { Routes, Route, A} from "@solidjs/router";
import Home from "./Pages/Home";
import logo from './logo.svg';
import styles from './App.module.css';
import Login from './Pages/Login';
import PostLoginHome from './Pages/PostLoginHome';
import RegisterPage from './Pages/RegisterPage';
import ExerciseScheduler from './Pages/ExerciseScheduler';
import WeeklyWorkouts from './Pages/WeeklyWorkouts';
import ExerciseSummary from './Pages/ExerciseSummary';
import navbar_styles from './styles/navbar.module.css';
import { Container, Navbar, Image, Nav, NavDropdown } from 'solid-bootstrap';
import SignedInAlready from './Pages/SignedInAlready';

window.addEventListener("load", () => { 
  var mySession = sessionStorage.getItem("loggedIn");
  if(mySession == null)
    sessionStorage.setItem("loggedIn", "false");
})

const App: Component = () => {
  const [isLoggedIn, setIsLoggedIn] = createSignal(sessionStorage.getItem("loggedIn") == "true");
  const [isLoggedInText, setIsLoggedInText] = createSignal("In");
  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn())
    sessionStorage.setItem("loggedIn", isLoggedIn() ? "true" : "false");
  };
  createEffect(() => {
    if(isLoggedIn())
      setIsLoggedInText("Out");
    else
      setIsLoggedInText("In");
  })
  return (
    <div>
      <Navbar bg="light"expand="lg">
          <Navbar.Brand href="/home">
              <div style={{display: 'flex'}}>
                <img src={logo} height={30} width={30} />
                <div class={navbar_styles.text_spacing_from_logo}>Live Better</div>
              </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav class="mr-auto"style={{ "margin-left": "auto", "margin-right": "10px"}}>
            <Show when={isLoggedIn()} fallback={
              <>
              <A style={{"margin-right": "10px"}} href="/login">Login</A>
              <A href="/register">Register</A>
              </>
            }>
              <NavDropdown title="Hi, John" class="dropdown-menu-right" style={{"margin-right": "10px"}}>
                <div style={{"display": "flex", "flex-direction": "column", "align-items": "center", "margin-right": "100px"}}>
                  <A href="/exercise_scheduler">Exercise Scheduler</A>
                  <A href="/exercise_summary">Exercise Summary</A>
                  <A href="/weekly_workouts">Weekly Workouts</A>
                </div>
              </NavDropdown>
            </Show>
          </Nav>
      </Navbar>
        <button onClick={() => toggleLogin()}>Log {isLoggedInText()}</button>
        <Routes>
          <Show when={!isLoggedIn()} fallback={
            <>
              <Route path="/post_login_home" component={PostLoginHome}/>
              <Route path="/exercise_scheduler" component={ExerciseScheduler}/>
              <Route path="/weekly_workouts" component={WeeklyWorkouts}/>
              <Route path="/exercise_summary" component={ExerciseSummary}/>
              <Route path="/home" component={Home} />
              <Route path="/" component={Home} />
              <Route path="/login" component={SignedInAlready}></Route>
              <Route path="/register" component={SignedInAlready}/>
            </>
          }>
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
