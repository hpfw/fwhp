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


                    <img src={"../images/fahrzeuge/lf10/lf10ges.jpg"} width="100%" height="100%"/>
                    <div id="fahrzeuge">LF10 - Funkrufname: Waldburg 42</div>
                    <div id="fahrzeugeTextKlein">MAN 12/250</div>
                    <div id="fahrzeugeTextKlein">Baujahr 2013</div>
                    <div id="fahrzeugeTextKlein">Aufbau: Rosenbauer</div>
                    <div id="fahrzeugeTextKlein">Leistung: 250 PS</div>
                    <div id="fahrzeugeTextKlein">Zul. Gesamtgewicht: 12,5 Tonnen</div>
                    <div id="fahrzeugeTextKlein">Besatzung: 1/8</div>
                    <div id="fahrzeugeTextKleinBeladung">Beladung:</div>
                    <div id="fahrzeugeTextKlein">2000 Liter Wasser</div>
                    <div id="fahrzeugeTextKlein">120 Liter Schaum</div>
                    <div id="fahrzeugeTextKlein">Schaumlöscher MicroCafs</div>
                    <div id="fahrzeugeTextKlein">Pulverlöscher</div>
                    <div id="fahrzeugeTextKlein">Kohlendioxidlöscher</div>
                    <div id="fahrzeugeTextKlein">4 Pressluftatmer im Mannschaftsraum</div>
                    <div id="fahrzeugeTextKlein">Wärmebildkamera Fa. Flir</div>
                    <div id="fahrzeugeTextKlein">Notstromaggregat 13 KVA</div>
                    <div id="fahrzeugeTextKlein">Lüfter elektrich</div>
                    <div id="fahrzeugeTextKlein">Lichtmast LED</div>
                    <div id="fahrzeugeTextKlein">Stativ mit 2 Flutlichtstrahler</div>
                    <div id="fahrzeugeTextKlein">Wassersauger</div>
                    <div id="fahrzeugeTextKlein">Schmutzwasserpumpe</div>
                    <div id="fahrzeugeTextKlein">Säbelsäge</div>
                    <div id="fahrzeugeTextKlein">Spinboard</div>
                    <div id="fahrzeugeTextKlein">Verkehrsabsicherungsmaterial</div>
                    <div id="fahrzeugeTextKlein">Rettungssäge</div>
                    <div id="fahrzeugeTextKlein">Rettungsrucksack</div>
                    <div id="fahrzeugeTextKlein">Türöffnungssatz</div>
                    <div id="fahrzeugeTextKlein">Schachtabdeckungen</div>
                    <div id="fahrzeugeTextKlein">Einreißhaken</div>
                    <div id="fahrzeugeTextKlein">Halligan Tool</div>
                    <div id="fahrzeugeTextKlein">Propangasbrenner</div>
                    <div id="fahrzeugeTextKlein">4 teilige Steckleiter</div>
                </div>

                <div>
                    <img src={"../images/fahrzeuge/lf16/lf16ges.jpg"} width="100%" height="100%"/>
                    <div id="fahrzeuge">LF16/12 - Funkrufname: Waldburg 44</div>
                    <div id="fahrzeugeTextKlein">Mercedes Benz 12/24</div>
                    <div id="fahrzeugeTextKlein">Baujahr 1997</div>
                    <div id="fahrzeugeTextKlein">Aufbau: Ziegler</div>
                    <div id="fahrzeugeTextKlein">Leistung: 240 PS</div>
                    <div id="fahrzeugeTextKlein">Zul. Gesamtgewicht: 13,5 Tonnen</div>
                    <div id="fahrzeugeTextKlein">Besatzung: 1/8</div>
                    <div id="fahrzeugeTextKleinBeladung">Beladung:</div>
                    <div id="fahrzeugeTextKlein">1600 Liter Wasser</div>
                    <div id="fahrzeugeTextKlein">120 Liter Schaum in Kanister</div>
                    <div id="fahrzeugeTextKlein">Pulverlöscher</div>
                    <div id="fahrzeugeTextKlein">Kohlendioxidlöscher</div>
                    <div id="fahrzeugeTextKlein">TS 8 Fa. Ziegler</div>
                    <div id="fahrzeugeTextKlein">6 Pressluftatmer, 2 davon im Mannschaftsraum</div>
                    <div id="fahrzeugeTextKlein">Notstromaggregat 7 KVA</div>
                    <div id="fahrzeugeTextKlein">Hebekissen</div>
                    <div id="fahrzeugeTextKlein">Lüfter Motorbetrieben</div>
                    <div id="fahrzeugeTextKlein">Lichtmast Halogen</div>
                    <div id="fahrzeugeTextKlein">Stativ mit 2 Flutlichtstrahler</div>
                    <div id="fahrzeugeTextKlein">Tauchpumpe</div>
                    <div id="fahrzeugeTextKlein">2 Haspel am Fahrzeugheck</div>
                    <div id="fahrzeugeTextKlein">Tauchpumpe</div>
                    <div id="fahrzeugeTextKlein">Motorsäge/Winkelschleifer</div>
                    <div id="fahrzeugeTextKlein">Schnellangriff mit Formschlauch auf Haspel</div>
                    <div id="fahrzeugeTextKlein">3-teilige Schiebeleiter</div>
                    <div id="fahrzeugeTextKlein">4-teilige Steckleiter</div>
                </div>

                <div>
                    <img src={"../images/fahrzeuge/mtw/mtwges.jpg"} width="100%" height="100%"/>
                    <div id="fahrzeuge">MTW - Funkrufname: Waldburg 19</div>
                    <div id="fahrzeugeTextKlein">Opel Movano 2,3 CDI</div>
                    <div id="fahrzeugeTextKlein">Baujahr 2016</div>
                    <div id="fahrzeugeTextKlein">Aufbau: Wagener Technik</div>
                    <div id="fahrzeugeTextKlein">Leistung: 136 PS</div>
                    <div id="fahrzeugeTextKlein">Zul. Gesamtgewicht: 3,5 Tonnen</div>
                    <div id="fahrzeugeTextKlein">Besatzung: 1/8</div>
                    <div id="fahrzeugeTextKleinBeladung">Beladung:</div>
                    <div id="fahrzeugeTextKlein">Micro Cafs</div>
                    <div id="fahrzeugeTextKlein">2 Pressluftatmer</div>
                    <div id="fahrzeugeTextKlein">Verkehrsabsicherungsmaterial</div>
                </div>

                <div>
                    <img src={"../images/fahrzeuge/anhaenger/anhaengerges.jpg"} width="100%" height="100%"/>
                    <div id="fahrzeuge">Anhänger</div>
                    <div id="fahrzeugeTextKlein">Fa. Voss</div>
                    <div id="fahrzeugeTextKlein">Baujahr 2008</div>
                    <div id="fahrzeugeTextKlein">Zul. Gesamtgewicht: 2,5 Tonnen</div>
                    <div id="fahrzeugeTextKleinBeladung">Beladung:</div>
                    <div id="fahrzeugeTextKlein">400 Meter B-Schläuche in Buchten</div>
                    <div id="fahrzeugeTextKlein">Ölbinder</div>
                    <div id="fahrzeugeTextKlein">Verkehrsabsicherungsmaterial</div>
                    <div id="fahrzeugeTextKlein">Wassersauger</div>
                </div>

            </div>
        );
    }
}

