import { A } from '@solidjs/router';
import { Nav, NavDropdown, Navbar } from 'solid-bootstrap';
import { Accessor, Component, JSXElement, Show, children } from 'solid-js';
import logo from '../logo.svg';
import navbar_styles from '../styles/navbar.module.css';

const OurNavBar: Component<{ isLoggedIn: Accessor<Boolean> }> = (props) => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/home">
        <div style={{ display: 'flex' }}>
          <img src={logo} height={30} width={30} />
          <div class={navbar_styles.text_spacing_from_logo}>Live Better</div>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Nav class="mr-auto" style={{ 'margin-left': 'auto' }}>
        <Show
          when={props.isLoggedIn()}
          fallback={
            <>
              <A style={{ 'margin-right': '10px' }} href="/login">
                Login
              </A>
              <A href="/register">Register</A>
            </>
          }
        >
          <NavDropdown title="Hi, John" align={{ lg: 'end' }}>
            <div>
              <div style={{ display: 'flex', 'justify-content': 'center' }}>
                <A style={{ color: 'white' }} href="/exercise_scheduler">
                  Exercise Scheduler
                </A>
              </div>
              <div style={{ display: 'flex', 'justify-content': 'center' }}>
                <A style={{ color: 'white' }} href="/exercise_summary">
                  Exercise Summary
                </A>
              </div>
              <div style={{ display: 'flex', 'justify-content': 'center' }}>
                <A style={{ color: 'white' }} href="/weekly_workouts">
                  Weekly Workouts
                </A>
              </div>
            </div>
          </NavDropdown>
        </Show>
      </Nav>
    </Navbar>
  );
};

export default OurNavBar;
