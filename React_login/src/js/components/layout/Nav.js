import React from "react";
import { IndexLink, Link } from "react-router";
import style from '../../style/style.css';

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
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  handleClick = (element) => {
    if (element != null){
        this.setState({home: false, aktuelles: false, termine: false, contact: false, mehr: false})
        this.setState({[element]: true})
        var element = document.getElementById(element);
        element.scrollIntoView({block: "start", behavior: "smooth"});
    }
  }
  
  handleDrowdown = (element) => {
      if (element != null) {
          this.setState({home: false, aktuelles: false, termine: false, contact: false, mehr: false})
          this.setState({[element]: true})
      }
  }


  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    const home = location.pathname === "/" ? "active" : "";
    const navClass = collapsed ? "collapse" : "";


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
            </div>
          </div>
        </nav>
    );
  }
}
