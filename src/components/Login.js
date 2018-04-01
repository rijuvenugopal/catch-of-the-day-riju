import React from 'react';
import PropType from 'prop-types';

const Login = (props) => (
    <nav className="login">
        <h2>Inventory Login</h2>
        <p>Sign in to manage your store inventory.</p>
        <button
            className="github"
            onClick={() => props.authenticate("Github")}
        >
            Log In With Github
        </button>
        <button
            className="twitter"
            onClick={() => props.authenticate("Twitter")}
        >
            Log In With Twitter
        </button>
        <button
            className="facebook"
            onClick={() => props.authenticate("Facebook")}
        >
            Log In With Facebook
        </button>
    </nav>
);

Login.propTypes = {
    authenticate: PropType.func.isRequired
}

export default Login;
