import React from "react";
import { IndexLink, Link } from "react-router";
import style from '../../style/style.css';

export default class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  handleClick = (element) => {
    if (element != null){
        var element = document.getElementById(element);
        element.scrollIntoView({block: "start", behavior: "smooth"});
    }
  }


  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    const home = location.pathname === "/" ? "active" : "";
    const navClass = collapsed ? "collapse" : "";

    return (
        <nav class="navbar navbar-default navbar-fixed-top">
          <div class="container-fluid">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand mouse_curser"  onClick={() => this.handleClick("home")}>Freiwillige Feuerwehr Waldburg</a>
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
              <ul class="nav navbar-nav navbar-right">
                <li class="mouse_curser" onClick={() => this.handleClick("home")}><a>HOME</a></li>
                <li class="mouse_curser" onClick={() => this.handleClick("aktuelles")}><a>AKTUELLES</a></li>
                <li class="mouse_curser" onClick={() => this.handleClick("termine")}><a>TERMINE</a></li>
                <li class="mouse_curser" onClick={() => this.handleClick("contact")}><a>KONTAKT</a></li>
                <li class="dropdown">
                  <a class="dropdown-toggle" data-toggle="dropdown">MEHR
                    <span class="caret"></span></a>
                  <ul class="dropdown-menu">
                    <li><a href="#">Einsätze</a></li>
                    <li><a href="#">Probeplan</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    );
  }
}
