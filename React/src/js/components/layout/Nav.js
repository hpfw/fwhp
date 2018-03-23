import React from "react";
import { IndexLink, Link } from "react-router";
import '../../style/style.css';

export default class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
        home: true,
        aktuelles: false,
        termine: false,
        contact: false,
        mehr: false,
        einsaetze: false,
        login: false,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  handleClick = (element) => {
    if (element != null){
        this.setState({home: false, aktuelles: false, termine: false, contact: false, mehr: false, einsaetze: false, login: false,})
        this.setState({[element]: true})
        var element = document.getElementById(element);
        element.scrollIntoView({block: "start", behavior: "smooth"});
    }
  }
  
  handleDrowdown = (element) => {
      if (element != null) {
          this.setState({home: false, aktuelles: false, termine: false, contact: false, mehr: true, einsaetze: false, login: false,})
          this.setState({[element]: true})
      }
  }


  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    const home = location.pathname === "/" ? "active" : "";
    const navClass = collapsed ? "collapse" : "";
    const einsaetze = location.pathname.match(/^\/einsaetze/) ? "active" : "";


      return (
        <nav class="navbar navbar-default navbar-fixed-top schrift">
          <div class="container-fluid">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <IndexLink to="/" class="navbar-brand mouse_curser"  onClick={() => this.handleClick("home")}>Freiwillige Feuerwehr Waldburg</IndexLink>
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
              <ul class="nav navbar-nav navbar-right">
                <li class= {this.state.home == true ? 'mouse_curser active' : 'mouse_curser'} onClick={() => this.handleClick("home")}><IndexLink to="/">HOME</IndexLink ></li>
                <li class= {this.state.aktuelles == true ? 'mouse_curser active' : 'mouse_curser'} onClick={() => this.handleClick("aktuelles")}><IndexLink to="/">AKTUELLES</IndexLink ></li>
                <li class= {this.state.termine == true ? 'mouse_curser active' : 'mouse_curser'} onClick={() => this.handleClick("termine")}><IndexLink to="/">TERMINE</IndexLink ></li>
                <li class= {this.state.contact == true ? 'mouse_curser active' : 'mouse_curser'} onClick={() => this.handleClick("contact")}><IndexLink to="/">KONTAKT</IndexLink ></li>
                <li class= {this.state.mehr == true ? 'drowdown mouse_curser active' : 'drowdown mouse_curser'}>
                  <a class="dropdown-toggle" data-toggle="dropdown">MEHR
                    <span class="caret"></span></a>
                  <ul class="dropdown-menu">
                    <li class= {this.state.einsaetze== true ? ' mouse_curser active' : ' inactive mouse_curser'} onClick={() => this.handleDrowdown("einsaetze")}><Link to="einsaetze"> Einsätze</Link></li>
                    <li class= {this.state.login== true ? ' mouse_curser active' : 'inactive mouse_curser'} onClick={() => this.handleDrowdown("login")}><Link to="login"> Login</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    );
  }
}
