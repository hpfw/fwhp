import React from "react";
import '../style/style.css';
import {connect} from "react-redux"
import {termineFW} from "../actions/termine_fw_action"
import {termineJF} from "../actions/termine_jf_action"
import {aktuelles} from "../actions/aktuelles_action"
import {kontakt} from "../actions/kontakt_action"
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

@connect((store) => {
    return {

    };
})

export default class Fahrzeuge extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentWillMount() {

    }

    render() {

        return (
            <div class="fahrzeuge">
                <img src={"../../images/waldburg1.jpg"} width="110%" height="110%"/>
                <div>asdasdasdasdsad</div>
                <div>asdasdasdasdsad</div>
                <div>asdasdasdasdsad</div>
                <div>asdasdasdasdsad</div>
                <div>asdasdasdasdsad</div>
                <div>asdasdasdasdsad</div>
                <div>asdasdasdasdsad</div>
                <div>asdasdasdasdsad</div>
                <div>asdasdasdasdsad</div>
                <div>asdasdasdasdsad</div>
                <div>asdasdasdasdsad</div>
                <div>asdasdasdasdsad</div>
                <div>asdasdasdasdsad</div>
                <div>asdasdasdasdsad</div>
                <div>asdasdasdasdsad</div>
                <div>asdasdasdasdsad</div>
                <div>asdasdasdasdsad</div>
                <div>asdasdasdasdsad</div>
                <div>asdasdasdasdsad</div>
                <div>asdasdasdasdsad</div>
                <div>asdasdasdasdsad</div>
            </div>
        );
    }
}

