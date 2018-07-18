import React from "react";
import '../style/style.css';
import {connect} from "react-redux"
import {termineFW} from "../actions/termine_fw_action"
import {termineJF} from "../actions/termine_jf_action"
import {aktuelles} from "../actions/aktuelles_action"
import {aktuellesImage} from "../actions/aktuellesImage"
import {kontakt} from "../actions/kontakt_action"
import {einsaetze} from "../actions/einsaetze_action"
import LoadingBar from 'react-redux-loading-bar'
import axios from 'axios';
import config from '../../config/config'

var date = new Date();
var dateFormat = require('dateformat');

@connect((store) => {
    return {
        new_termine_fw: store.termine_fw_red.termine,
        new_termine_jf: store.termine_jf_red.termine,
        new_aktuelles: store.aktuelles_red.aktuelles,
    };
})

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            aktuellesDatum: "",
            aktuellesBild: "",
            aktuellesText: "",

            einsaetzeDatum: "",
            einsaetzeUhrzeit: "",
            einsaetzeArt: "",
            einsaetzeFormat: ".jpg",
            einsaetzeText: "",

            einsaetze_cnt : 0,
            einsaetze_date: '01022018',

            termineFWDatum: "",
            termineFWUhrzeit: "19:30",
            termineFWLeiter: "",
            termineFWProbe: "",

            termineJFDatum: "",
            termineJFUhrzeit: "18:30",
            termineJFLeiter: "",
            termineJFProbe: "",


            einsaetzeBilder: [],
        };
    }

    componentWillMount() {
        this.setState({aktuellesDatum: dateFormat(date, "yyyy-mm-dd"), einsaetzeDatum: dateFormat(date, "yyyy-mm-dd")})
    }

    handleChange = (e, name) => {
        this.setState({[name]: e.target.value})
    }

    handleChangeEinsatzDate = (e, name) => {
        var date = e.target.value
        this.setState({[name]: e.target.value, einsaetze_date: (date.substring(date.length-2, date.length) + date.substring(date.length-5, date.length-3) + date.substring(date.length-10, date.length-6))})
    }

    handleChangeImage = (e, name) => {
        this.setState({[name]: e.target.files[0]})
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

    handleAdd = () => {
        var {einsaetzeBilder, einsaetze_cnt, einsaetze_date} = this.state
        einsaetze_cnt = einsaetze_cnt + 1
        einsaetzeBilder.push(<div class="form-group row">
            <div class="col-xs-7"></div>
            <div class="col-xs-3">
                <label for="einsaetzeBilder">Bild</label>
                <input class="form-control" name="einsaetzeBilder" type="text" value={"einsatz_"+einsaetze_cnt+"_"+einsaetze_date}/>
            </div>
            <div class="col-xs-1"><label for="einsaetzeFormat">Format</label>
                <select class="form-control format" name="einsaetzeFormat">
                    <option>.jpg</option>
                    <option>.png</option>
                </select>
            </div>
        </div>)
        this.setState({einsaetzeBilder: einsaetzeBilder, einsaetze_cnt: einsaetze_cnt})
    }

    sendAktuelles = () => {
        var {aktuellesBild, aktuellesDatum, aktuellesText} = this.state
        var formData = new FormData();
        formData.append("aktuelles", aktuellesBild, aktuellesBild.name);

        axios.post(config.BASE_URL+'aktuelles', formData, {
            onUploadProgress: progressEvent => {
                console.log(progressEvent.loaded / progressEvent.total)
            }
        })
        /*
        var {aktuellesBild, aktuellesDatum, aktuellesText} = this.state

        if (aktuellesBild != "" && aktuellesDatum != "" && aktuellesText != "") {
            var formData = new FormData();
            formData.append("aktuelles", aktuellesBild, aktuellesBild.name);

            this.props.dispatch(aktuellesImage(aktuellesText, aktuellesBild.name, aktuellesDatum, formData));
            this.setState({
                aktuellesBild: "",
                aktuellesDatum: dateFormat(date, "yyyy-mm-dd"),
                aktuellesText: ""
            })
            document.getElementById("errorAktuelles").style.display = "none";
            document.getElementById("successAktuelles").style.display = "inline";
        } else {
            document.getElementById("errorAktuelles").style.display = "inline";
            document.getElementById("successAktuelles").style.display = "none";
        }
        */
    }
    sendEinsaetze = () => {
        var {einsaetzeDatum, einsaetzeArt, einsaetzeText, einsaetzeUhrzeit} = this.state
        var einsaetzeBilder = document.getElementsByName("einsaetzeBilder");
        var einsaetzeFormat = document.getElementsByName("einsaetzeFormat");
        var bilder = []
        for (var i = 0; i < einsaetzeBilder.length; i++) {
            if (einsaetzeBilder[i].value != "") {
                bilder.push(einsaetzeBilder[i].value + einsaetzeFormat[i].value)
            }
        }
        if (einsaetzeDatum != "" && einsaetzeArt != "" && einsaetzeUhrzeit != "" && einsaetzeText != "" && bilder.length != 0) {
            this.props.dispatch(einsaetze(einsaetzeText, bilder.join(), einsaetzeDatum, einsaetzeUhrzeit, einsaetzeArt));
            this.setState({
                einsaetzeBilder: [],
                einsaetzeDatum: dateFormat(date, "yyyy-mm-dd"),
                einsaetzeFormat: ".jpg",
                einsaetzeArt: "",
                einsaetzeUhrzeit: "",
                einsaetzeText: ""
            })
            for (var i = 0; i < einsaetzeBilder.length; i++) {
                einsaetzeBilder[i].value = ""
                einsaetzeFormat[i].value = ".jpg"
            }
            document.getElementById("errorEinsaetze").style.display = "none";
            document.getElementById("successEinsaetze").style.display = "inline";
        } else {
            document.getElementById("errorEinsaetze").style.display = "inline";
            document.getElementById("successEinsaetze").style.display = "none";
        }
    }
    sendTermineFW = () => {
        var {termineFWDatum, termineFWLeiter, termineFWProbe, termineFWUhrzeit} = this.state
        if (termineFWDatum != "" && termineFWLeiter != "" && termineFWProbe != "" && termineFWUhrzeit != "") {
            this.props.dispatch(termineFW(termineFWLeiter, termineFWUhrzeit, termineFWDatum, termineFWProbe));
            this.setState({termineFWDatum: "", termineFWLeiter: "", termineFWProbe: "", termineFWUhrzeit: "19:30"})
            document.getElementById("errorTermineFW").style.display = "none";
            document.getElementById("successTermineFW").style.display = "inline";
        } else {
            document.getElementById("errorTermineFW").style.display = "inline";
            document.getElementById("successTermineFW").style.display = "none";
        }
    }
    sendTermineJF = () => {
        var {termineJFDatum, termineJFLeiter, termineJFProbe, termineJFUhrzeit} = this.state
        if (termineJFDatum != "" && termineJFLeiter != "" && termineJFProbe != "" && termineJFUhrzeit != "") {
            this.props.dispatch(termineJF(termineJFLeiter, termineJFUhrzeit, termineJFDatum, termineJFProbe));
            this.setState({termineJFLeiter: "", termineJFProbe: "", termineJFDatum: "", termineJFUhrzeit: "18:30"})
            document.getElementById("errorTermineJF").style.display = "none";
            document.getElementById("successTermineJF").style.display = "inline";
        } else {
            document.getElementById("errorTermineJF").style.display = "inline";
            document.getElementById("successTermineJF").style.display = "none";
        }
    }


    /*  onChange123 = (e) => {
     console.log(e.target.files)
     formData.append('username', 'Chris');
     formData.append("aktuelles", e.target.files[0], "test.PNG");
     console.log(formData);

     } */

    send() {

        //  this.props.dispatch(aktuelles("", "", "", formData));

        /*    var options = { content: formData };
         HTTP.call( 'POST','http://localhost/aktuelles',options, function( error, response ) {
         if ( error ) {console.log( error );}else{console.log(response)}});
         */
        /* const method = "POST";
         const body = formData;
         fetch("http://localhost/aktuelles", { method, body })
         .then(res => res.json())
         .then(data => alert(JSON.stringify(data, null, "\t")));
         */
    }

    render() {
        var {aktuellesBild, aktuellesDatum, aktuellesFormat, aktuellesText} = this.state
        var {einsaetzeDatum, einsaetzeArt, einsaetzeBilder, einsaetzeFormat, einsaetzeText, einsaetzeUhrzeit, einsaetze_cnt, einsaetze_date} = this.state
        var {termineFWDatum, termineFWLeiter, termineFWProbe, termineFWUhrzeit} = this.state
        var {termineJFDatum, termineJFLeiter, termineJFProbe, termineJFUhrzeit} = this.state

        return (
            <div id="home" data-spy="scroll" data-target=".navbar" data-offset="50">
                <div class="parallax">
                    <LoadingBar style={{backgroundColor: 'blue', height: '5px'}}/>
                    <div class="container">
                        <h2>Aktuelles</h2>
                        <form>
                            <div class="form-group row">
                                <div id="errorAktuelles" class="error col-xs-12">
                                    <div class="alert alert-danger">
                                        <strong>Bitte alle Felder ausfüllen.</strong>
                                    </div>
                                </div>
                                <div id="successAktuelles" class="success col-xs-12">
                                    <div class="alert alert-success">
                                        <strong>Eintrag wurde erfolgreich angelegt.</strong>
                                    </div>
                                </div>
                                <div class="col-xs-2">
                                    <label for="aktuellesDatum">Datum</label>
                                    <input class="form-control" id="aktuellesDatum" type="date"
                                           value={aktuellesDatum}
                                           onChange={(e) => {
                                               this.handleChange(e, "aktuellesDatum")
                                           }}/>
                                </div>
                                <div class="col-xs-3">
                                    <label for="aktuellesBild">Bild</label>
                                    <input class="form-control" id="aktuellesBild" type="file"
                                           onChange={(e) => {
                                               this.handleChangeImage(e, "aktuellesBild")

                                           }}/>
                                </div>
                                <div class="col-xs-12">
                                    <label for="aktuellesText">Text</label>
                                    <textarea class="form-control" rows="5" id="aktuellesText" value={aktuellesText}
                                              onChange={(e) => {
                                                  this.handleChange(e, "aktuellesText")
                                              }}></textarea>
                                </div>
                                <div class="col-xs-10"></div>
                                <div class="col-xs-2">
                                    <br/>
                                    <button type="button" class="btn pull-right" onClick={this.sendAktuelles}>
                                        Einfügen
                                    </button>
                                </div>
                            </div>
                        </form>
                        <h2>Einsätze</h2>
                        <form>
                            <div class="form-group row">
                                <div id="errorEinsaetze" class="error col-xs-12">
                                    <div class="alert alert-danger">
                                        <strong>Bitte alle Felder ausfüllen.</strong>
                                    </div>
                                </div>
                                <div id="successEinsaetze" class="success col-xs-12">
                                    <div class="alert alert-success">
                                        <strong>Eintrag wurde erfolgreich angelegt.</strong>
                                    </div>
                                </div>
                                <div class="col-xs-2">
                                    <label for="ex1">Datum</label>
                                    <input class="form-control" id="ex1" type="date" value={einsaetzeDatum}
                                           onChange={(e) => {
                                               this.handleChangeEinsatzDate(e, "einsaetzeDatum")
                                           }}/>
                                </div>
                                <div class="col-xs-2">
                                    <label for="einsaetzeUhrzeit">Uhrzeit</label>
                                    <input class="form-control" id="einsaetzeUhrzeit" type="time"
                                           value={einsaetzeUhrzeit}
                                           onChange={(e) => {
                                               this.handleChange(e, "einsaetzeUhrzeit")
                                           }}/>
                                </div>
                                <div class="col-xs-3">
                                    <label for="einsaetzeArt">Art</label>
                                    <input class="form-control" id="einsaetzeArt" type="text" value={einsaetzeArt}
                                           onChange={(e) => {
                                               this.handleChange(e, "einsaetzeArt")
                                           }}/>
                                </div>
                                <div class="col-xs-3">
                                    <label for="einsaetzeBilder">Bild</label>
                                    <input class="form-control" name="einsaetzeBilder" type="text" value={"einsatz_"+0+"_"+einsaetze_date}/>
                                </div>
                                <div class="col-xs-1"><label for="einsaetzeFormat">Format</label>
                                    <select class="form-control format" name="einsaetzeFormat">
                                        <option>.jpg</option>
                                        <option>.png</option>
                                    </select>
                                </div>
                                <div class="col-xs-1">
                                    <br/>
                                    <button type="button" class="btn pull-right" onClick={this.handleAdd}><span
                                        class="glyphicon glyphicon-plus"></span></button>
                                </div>
                            </div>

                            {einsaetzeBilder.map(function (bilder) {
                                return (
                                    bilder
                                )
                            })}
                            <div class="form-group row">
                                <div class="col-xs-12">
                                    <label for="einsaetzeText">Text</label>
                                    <textarea class="form-control" rows="5" id="einsaetzeText" value={einsaetzeText}
                                              onChange={(e) => {
                                                  this.handleChange(e, "einsaetzeText")
                                              }}></textarea>
                                </div>
                                <div class="col-xs-10"></div>
                                <div class="col-xs-2">
                                    <br/>
                                    <button type="button" class="btn pull-right" onClick={this.sendEinsaetze}>
                                        Einfügen
                                    </button>
                                </div>
                            </div>
                        </form>
                        <h2>Termine Aktive Feuerwehr</h2>
                        <form>
                            <div class="form-group row">
                                <div id="errorTermineFW" class="error col-xs-12">
                                    <div class="alert alert-danger">
                                        <strong>Bitte alle Felder ausfüllen.</strong>
                                    </div>
                                </div>
                                <div id="successTermineFW" class="success col-xs-12">
                                    <div class="alert alert-success">
                                        <strong>Eintrag wurde erfolgreich angelegt.</strong>
                                    </div>
                                </div>
                                <div class="col-xs-2">
                                    <label for="termineFWDatum">Datum</label>
                                    <input class="form-control" id="termineFWDatum" type="date"
                                           value={termineFWDatum}
                                           onChange={(e) => {
                                               this.handleChange(e, "termineFWDatum")
                                           }}/>
                                </div>
                                <div class="col-xs-2">
                                    <label for="termineFWUhrzeit">Uhrzeit</label>
                                    <input class="form-control" id="termineFWUhrzeit" type="time"
                                           value={termineFWUhrzeit}
                                           onChange={(e) => {
                                               this.handleChange(e, "termineFWUhrzeit")
                                           }}/>
                                </div>
                                <div class="col-xs-3">
                                    <label for="termineFWLeiter">Leiter</label>
                                    <input class="form-control" id="termineFWLeiter" type="text"
                                           value={termineFWLeiter}
                                           onChange={(e) => {
                                               this.handleChange(e, "termineFWLeiter")
                                           }}/>
                                </div>
                                <div class="col-xs-3">
                                    <label for="termineFWProbe">Probe</label>
                                    <input class="form-control" id="termineFWProbe" type="text"
                                           value={termineFWProbe}
                                           onChange={(e) => {
                                               this.handleChange(e, "termineFWProbe")
                                           }}/>
                                </div>
                                <div class="col-xs-2">
                                    <br/>
                                    <button type="button" class="btn pull-right" onClick={this.sendTermineFW}>
                                        Einfügen
                                    </button>
                                </div>
                            </div>
                        </form>
                        <br/>
                        <h2>Termine Jugendfeuerwehr</h2>
                        <form>
                            <div class="form-group row">
                                <div id="errorTermineJF" class="error col-xs-12">
                                    <div class="alert alert-danger">
                                        <strong>Bitte alle Felder ausfüllen.</strong>
                                    </div>
                                </div>
                                <div id="successTermineJF" class="success col-xs-12">
                                    <div class="alert alert-success">
                                        <strong>Eintrag wurde erfolgreich angelegt.</strong>
                                    </div>
                                </div>
                                <div class="col-xs-2">
                                    <label for="termineJFDatum">Datum</label>
                                    <input class="form-control" id="termineJFDatum" type="date"
                                           value={termineJFDatum}
                                           onChange={(e) => {
                                               this.handleChange(e, "termineJFDatum")
                                           }}/>
                                </div>
                                <div class="col-xs-2">
                                    <label for="termineJFUhrzeit">Uhrzeit</label>
                                    <input class="form-control" id="termineJFUhrzeit" type="time"
                                           value={termineJFUhrzeit}
                                           onChange={(e) => {
                                               this.handleChange(e, "termineJFUhrzeit")
                                           }}/>
                                </div>
                                <div class="col-xs-3">
                                    <label for="termineJFLeiter">Leiter</label>
                                    <input class="form-control" id="termineJFLeiter" type="text"
                                           value={termineJFLeiter}
                                           onChange={(e) => {
                                               this.handleChange(e, "termineJFLeiter")
                                           }}/>
                                </div>
                                <div class="col-xs-3">
                                    <label for="termineJFProbe">Probe</label>
                                    <input class="form-control" id="termineJFProbe" type="text"
                                           value={termineJFProbe}
                                           onChange={(e) => {
                                               this.handleChange(e, "termineJFProbe")
                                           }}/>
                                </div>
                                <div class="col-xs-2">
                                    <br/>
                                    <button type="button" class="btn pull-right" onClick={this.sendTermineJF}>
                                        Einfügen
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

