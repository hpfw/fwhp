import React from "react";
import '../style/fahrzeuge.css';
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

                <div>
                    <div id="topFontContainer">LF10 - Funkrufname: Waldburg 42</div>
                    <img src={"../../images/fahrzeuge/lf10/lf10ges.jpg"} width="100%" height="100%"/>
                </div>

                <div>
                    <div id="fahrzeuge">LF16/12 - Funkrufname: Waldburg 44</div>
                    <img src={"../../images/fahrzeuge/lf16/lf16ges.jpg"} width="100%" height="100%"/>
                </div>

                <div>
                    <div id="fahrzeuge">MTW - Funkrufname: Waldburg 19</div>
                    <img src={"../../images/fahrzeuge/mtw/mtwges.jpg"} width="100%" height="100%"/>
                </div>

                <div>
                    <div id="fahrzeuge">Anhänger</div>
                    <img src={"../../images/fahrzeuge/anhaenger/anhaengerges.jpg"} width="100%" height="100%"/>
                    <div id="fahrzeuge">Fa. Voss:</div>
                    <div id="fahrzeugeTextKlein">Baujahr 2008</div>
                    <div id="fahrzeugeTextKlein">Zul. Gesamtgewicht: 2,5 Tonnen</div>
                    <div id="fahrzeuge">Beladung:</div>
                    <div id="fahrzeugeTextKlein">400 Meter B-Schläuche in Buchten</div>
                    <div id="fahrzeugeTextKlein">Ölbinder</div>
                    <div id="fahrzeugeTextKlein">Verkehrsabsicherungsmaterial</div>
                    <div id="fahrzeugeTextKlein">Wassersauger</div>
                </div>

            </div>
        );
    }
}

