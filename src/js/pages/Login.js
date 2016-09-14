import React from 'react';
import jQuery from 'jquery'

class Login extends React.Component {
    handleLogin(e) {
        console.log(this.props);
        e.preventDefault();
        this.props.clickme();
        const form = e.target;
        console.log(e.target.username.value);
        // console.log(ref);
        const username = form.username.value;
        const password = form.password.value;
        jQuery.post("/senddata", {username, password});
        localStorage.get()

    }
    render() {
        return <div>
            <div class="row">
                <div class="col-md-4 col-md-offset-4">
                    <form class="login--box bounceInDown animated" ref="feedForm" action="loginForm" id="login-form" onSubmit={this.handleLogin.bind(this)}>
                        <div class="login--logo"><img src="images/logo.png" alt="" /></div>
                        <div class="form-group">
                            <input id="userid" type="text" class="form-control" name="username" placeholder="Username" required/> </div>
                        <div class="form-group">
                            <input id="password" type="password" class="form-control" name="password" placeholder="Password" required/> </div>
                        <div class="form-group">
                            <button class="btn btn--action btn-block js-button-login">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    }
}

export default Login;