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
        new_termine_fw: store.termine_fw_red.termine,
        new_termine_jf: store.termine_jf_red.termine,
        new_aktuelles: store.aktuelles_red.aktuelles,
    };
})

export class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            comments: "",
            errorMsg: "",
        };
    }

    componentWillMount() {
        this.props.dispatch(termineFW());
        this.props.dispatch(termineJF());
        this.props.dispatch(aktuelles());
    }


    handleClick = (datei) => {
        window.open('http://feuerwehr-waldburg.de/probeplan_' + datei + '.pdf');
    }


    handleChange = (e, name) => {
        this.setState({[name]: e.target.value})
    }


    handleSend = () => {
        var {name, email, comments} = this.state;

        if (name != '' && email != '' && comments != '') {
            this.props.dispatch(kontakt(name, email, comments));
            this.setState({name: "", email: "", comments: ""});

            document.getElementById("errorMsg").style.display = "none";
            document.getElementById("successMsg").style.display = "inline";
        } else {
            document.getElementById("errorMsg").style.display = "inline";
            document.getElementById("successMsg").style.display = "none";
        }

    }


    render() {
        const termine_fw = this.props.new_termine_fw;
        const termine_jf = this.props.new_termine_jf;
        const aktuelles = this.props.new_aktuelles;
        var {name, email, comments} = this.state
        const images = [{original: require("../../images/waldburg1.jpg")}, {original: require("../../images/waldburg2.jpg")}, {original: require("../../images/waldburg5.jpg")}, {original: require("../../images/waldburg4.jpg")}]

        return (
            <div id="home" data-spy="scroll" data-target=".navbar" data-offset="50">

                <ImageGallery items={images} showPlayButton={false} autoPlay={true} showFullscreenButton={false}
                              showThumbnails={false} showBullets={false}/>

                <div id="aktuelles" class="bg-1 black">
                    <div class="container text-center">
                        <h3>AKTUELLES</h3>
                        <br/>
                        <div class="col-sm-5 col-xs-12">
                            <p class="aktuelles"><em>{aktuelles.text} </em></p>
                        </div>
                        <div class="col-sm-7 col-xs-12">
                            <img src={require("../../images/" + aktuelles.bild)} width="110%" height="110%"/>
                        </div>
                    </div>
                </div>

                <div id="termine" class="bg-1 parallax parallax-container">
                    <div class="container container-fluid card-fluid ">
                        <div class="row">
                            <div class="col-sm-12 col-xs-12 ">
                                <h3 class="text-center">TERMINE</h3>
                            </div>
                        </div>

                        <br/>
                        <div class="row cardSlideanim">
                            <div class="col-sm-6 col-xs-12">
                                <div class="panel panel-default card card-default text-center">
                                    <div class="panel-heading card-heading">
                                        <h1>Aktive Feuerwehr</h1>
                                    </div>
                                    <div class="panel-body card-body">
                                        <p><strong>Probeleiter:</strong> {termine_fw.leiter}</p>
                                        <p><strong>Probe:</strong> {termine_fw.probe} </p>
                                        <p><strong>Uhrzeit:</strong> {termine_fw.uhrzeit}</p>
                                    </div>
                                    <div class="panel-footer card-footer">
                                        <h3>{termine_fw.tag}</h3>
                                        <h3>{termine_fw.datum}</h3>
                                        <button class="btn" onClick={() => this.handleClick("aktiv")}>Zum Probeplan
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-xs-12">
                                <div class="panel panel-default card card-default text-center">
                                    <div class="panel-heading card-heading">
                                        <h1>Jugendfeuerwehr</h1>
                                    </div>
                                    <div class="panel-body card-body">
                                        <p><strong>Probeleiter:</strong> {termine_jf.leiter}</p>
                                        <p><strong>Probe:</strong> {termine_jf.probe} </p>
                                        <p><strong>Uhrzeit:</strong> {termine_jf.uhrzeit}</p>
                                    </div>
                                    <div class="panel-footer card-footer">
                                        <h3>{termine_jf.tag}</h3>
                                        <h3>{termine_jf.datum}</h3>
                                        <button class="btn" onClick={() => this.handleClick("jugend")}>Zum Probeplan
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="bg-1 black">
                    <div id="contact" class="container">
                        <h3 class="text-center">KONTAKT</h3>

                        <div id="errorMsg" class="error">
                            <div class="alert alert-danger">
                                <strong>Bitte alle Felder ausfüllen.</strong>
                            </div>
                        </div>
                        <div id="successMsg" class="success">
                            <div class="alert alert-success">
                                <strong>Ihre Nachricht wurde erfolgreich versandt.</strong>
                            </div>
                        </div>
                        <br/>
                        <div class="row">
                            <div class="col-md-4">
                                <p>Interessiert?&nbsp;Schreiben Sie uns</p>
                                <p><span class="glyphicon glyphicon-map-marker"></span> &nbsp;88289 Waldburg</p>
                                <p><span class="glyphicon glyphicon-road"></span> &nbsp;Amtzeller Straße 27</p>
                                <p><span class="glyphicon glyphicon-phone"></span> &nbsp;Telefon: 07529/112</p>
                                <p><span class="glyphicon glyphicon-envelope"></span> &nbsp;Email:
                                    info@Feuerwehr-Waldburg.de</p>
                            </div>

                            <div class="col-md-8">
                                <div class="row">
                                    <div class="col-sm-6 form-group">
                                        <input class="form-control" id="name" name="name" placeholder="Name" type="text"
                                               required value={name} onChange={(e) => {
                                            this.handleChange(e, "name")
                                        }}/>
                                    </div>
                                    <div class="col-sm-6 form-group">
                                        <input class="form-control" id="email" name="email" placeholder="Email"
                                               type="email" required value={email} onChange={(e) => {
                                            this.handleChange(e, "email")
                                        }}/>
                                    </div>
                                </div>
                                <textarea class="form-control" id="comments" name="comments" placeholder="Nachricht"
                                          rows="5" value={comments} onChange={(e) => {
                                    this.handleChange(e, "comments")
                                }}></textarea>
                                <br/>
                                <div class="row">
                                    <div class="col-md-12 form-group">
                                        <button class="btn pull-right" onClick={this.handleSend}>Senden</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{
                    width: '100%',
                    height: '60vh',
                }}>
                    <div style={{
                        width: '100%',
                        height: '60vh',
                        position: "absolute"
                    }}>
                        <Map google={this.props.google} style={{width: '100%', height: '60vh', position: "absolute"}}
                             initialCenter={{lat: 47.757744, lng: 9.720259}} zoom={15} scrollwheel={false}>
                            <Marker
                                title={'Feuerwehrhaus Waldburg'}
                                name={'FFW'}
                                position={{lat: 47.757744, lng: 9.720259}}/>
                        </Map>
                    </div>
                </div>

            </div>
        );
    }
}

export default GoogleApiWrapper({
    //   apiKey: ("AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo")
    apiKey: ("AIzaSyAhTgPTwd82IdiiJHy29Bu5rHjY_d38EBE")
})(Home)
