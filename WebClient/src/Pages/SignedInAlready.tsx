import { Component } from "solid-js";
import styles from '../styles/temporary-all-div-styles.module.css';

const SignedInAlready : Component = () => {
    return(
        <div class={styles.all_divs}>
            <h1>You Are Already Signed In Or Have An Account</h1>
        </div>
    )
}

export default SignedInAlready;