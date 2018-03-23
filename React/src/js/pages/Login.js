import React from "react";
import '../style/login.css';
import Footer from "../components/layout/Footer";


export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            pw: "",
            error: "",
            errorMsg: "",
        };
    }

    componentWillMount() {

    }

    handleChange = (e, name) => {
        this.setState({[name]: e.target.value})
    }

    render() {
        var {id, pw} = this.state


        return (

                <div id="home" data-spy="scroll" data-target=".navbar" data-offset="50">

                    <div class="container container_login">
                        <form action="/login" method="post">
                            <div id="errorMsg" class="error error_login">
                                <div class="alert alert_login alert-danger">
                                    <strong>Bitte alle Felder ausfüllen.</strong>
                                </div>
                            </div>
                            <div class="input-group">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                                <input id="id" type="text" class="form-control" name="username" placeholder="ID"
                                       value={id}
                                       onChange={(e) => {
                                           this.handleChange(e, "id")
                                       }}/>
                            </div>
                            <br/>
                            <div class="input-group">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                                <input id="passwort" type="password" class="form-control" name="password"
                                       placeholder="Passwort" value={pw} onChange={(e) => {
                                    this.handleChange(e, "pw")
                                }}/>
                            </div>
                            <br/>
                            <button type="submit" class="btn_login btn pull-right">Login</button>
                        </form>

                    </div>
                </div>


        );
    }
}

