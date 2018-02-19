import React from "react";
import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";
import style from '../style/style.css';
import { Link } from "react-router";

export default class Layout extends React.Component {
  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "50px"
    };
    console.log("layout");
    return (
      <div class="schrift">
        
        <Nav location={ location } />

            {this.props.children}
        <Footer/>

      </div>

    );
  }
}
