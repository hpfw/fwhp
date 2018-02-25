import React from "react";
import '../style/style.css';
import { connect } from "react-redux"
import { termineFW } from "../actions/termine_fw_action"
import { termineJF } from "../actions/termine_jf_action"
import { aktuelles } from "../actions/aktuelles_action"
import { kontakt } from "../actions/kontakt_action"
import { einsaetze } from "../actions/einsaetze_action"
var date = new Date();
var dateFormat = require('dateformat');

@connect((store) => {  return {
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
            aktuellesFormat: ".jpg",
            aktuellesText: "",

            einsaetzeDatum: "",
            einsaetzeUhrzeit: "",
            einsaetzeArt: "",
            einsaetzeBilder: "",
            einsaetzeFormat: ".jpg",
            einsaetzeText: "",

            termineFWDatum: "",
            termineFWUhrzeit: "19:30",
            termineFWLeiter: "",
            termineFWProbe: "",

            termineJFDatum: "",
            termineJFUhrzeit: "18:30",
            termineJFLeiter: "",
            termineJFProbe: "",
        };
    }

    componentWillMount() {
        this.setState({aktuellesDatum: dateFormat(date, "yyyy-mm-dd"), einsaetzeDatum: dateFormat(date, "yyyy-mm-dd")})
    }

    handleChange = (e, name) => {
      this.setState({ [name]: e.target.value })
    }


    handleSend = () => {
      var {name, email, comments} = this.state;

      if (name != '' && email != '' && comments != '') {
        this.props.dispatch(kontakt(name, email, comments ));
        this.setState({name: "", email: "", comments: ""});

        document.getElementById("errorMsg").style.display = "none";
        document.getElementById("successMsg").style.display = "inline";
      } else {
        document.getElementById("errorMsg").style.display = "inline";
        document.getElementById("successMsg").style.display = "none";
      }

    }

    sendAktuelles = () => {
        var { aktuellesBild, aktuellesDatum, aktuellesFormat, aktuellesText } = this.state
        var bild = aktuellesBild + aktuellesFormat
        this.props.dispatch(aktuelles(aktuellesText, bild, aktuellesDatum ));
        this.setState({aktuellesBild: "", aktuellesDatum: dateFormat(date, "yyyy-mm-dd"), aktuellesFormat: ".jpg", aktuellesText: ""})
    }
    sendEinsaetze = () => {
        var { einsaetzeDatum, einsaetzeArt, einsaetzeBilder, einsaetzeFormat, einsaetzeText, einsaetzeUhrzeit } = this.state
        var bild = einsaetzeBilder + einsaetzeFormat
        this.props.dispatch(einsaetze(einsaetzeText, bild, einsaetzeDatum, einsaetzeUhrzeit, einsaetzeArt));
        this.setState({einsaetzeBilder: "", einsaetzeDatum: dateFormat(date, "yyyy-mm-dd"), einsaetzeFormat: ".jpg", einsaetzeArt: "", einsaetzeUhrzeit: "", einsaetzeText: ""})
    }
    sendTermineFW = () => {
        var { termineFWDatum, termineFWLeiter, termineFWProbe, termineFWUhrzeit } = this.state
        this.props.dispatch(termineFW(termineFWLeiter, termineFWUhrzeit, termineFWDatum, termineFWProbe ));
        this.setState({termineFWDatum: "", termineFWLeiter: "", termineFWProbe: "", termineFWUhrzeit: "19:30"})
    }
    sendTermineJF = () => {
        var { termineJFDatum, termineJFLeiter, termineJFProbe, termineJFUhrzeit } = this.state
        this.props.dispatch(termineJF(termineJFLeiter, termineJFUhrzeit, termineJFDatum, termineJFProbe ));
        this.setState({termineJFLeiter: "", termineJFProbe: "", termineJFDatum: "", termineJFUhrzeit: "18:30"})
    }


    render() {
        var { aktuellesBild, aktuellesDatum, aktuellesFormat, aktuellesText } = this.state
        var { einsaetzeDatum, einsaetzeArt, einsaetzeBilder, einsaetzeFormat, einsaetzeText, einsaetzeUhrzeit } = this.state
        var { termineFWDatum, termineFWLeiter, termineFWProbe, termineFWUhrzeit } = this.state
        var { termineJFDatum, termineJFLeiter, termineJFProbe, termineJFUhrzeit } = this.state

      return (
          <div id="home" data-spy="scroll" data-target=".navbar" data-offset="50">
          <div class="container">
              <h2>Aktuelles</h2>
              <form>
                  <div class="form-group row">
                      <div class="col-xs-2">
                          <label for="aktuellesDatum">Datum</label>
                          <input class="form-control" id="aktuellesDatum" type="date" value={aktuellesDatum} onChange={(e) => {this.handleChange(e, "aktuellesDatum")}}/>
                      </div>
                      <div class="col-xs-3">
                          <label for="aktuellesBild">Bild</label>
                          <input class="form-control" id="aktuellesBild" type="text" value={aktuellesBild} onChange={(e) => {this.handleChange(e, "aktuellesBild")}}/>
                      </div>
                      <div class="col-xs-2"><label for="aktuellesFormat">Format</label>
                          <select class="form-control" id="aktuellesFormat" value={aktuellesFormat} onChange={(e) => {this.handleChange(e, "aktuellesFormat")}}>
                              <option>.jpg</option>
                              <option>.png</option>
                          </select>
                      </div>
                      <div class="col-xs-12">
                          <label for="aktuellesText">Text</label>
                          <textarea class="form-control" rows="5" id="aktuellesText" value={aktuellesText} onChange={(e) => {this.handleChange(e, "aktuellesText")}}></textarea>
                      </div>
                      <div class="col-xs-10"></div>
                      <div class="col-xs-2">
                          <br/>
                          <button type="button" class="btn pull-right" onClick={this.sendAktuelles}>Einfügen</button>
                      </div>
                  </div>
              </form>
              <h2>Einsätze</h2>
              <form>
                  <div class="form-group row">
                      <div class="col-xs-2">
                          <label for="ex1">Datum</label>
                          <input class="form-control" id="ex1" type="date" value={einsaetzeDatum} onChange={(e) => {this.handleChange(e, "einsaetzeDatum")}}/>
                      </div>
                      <div class="col-xs-2">
                          <label for="einsaetzeUhrzeit">Uhrzeit</label>
                          <input class="form-control" id="einsaetzeUhrzeit" type="time" value={einsaetzeUhrzeit} onChange={(e) => {this.handleChange(e, "einsaetzeUhrzeit")}}/>
                      </div>
                      <div class="col-xs-3">
                          <label for="einsaetzeArt">Art</label>
                          <input class="form-control" id="einsaetzeArt" type="text" value={einsaetzeArt} onChange={(e) => {this.handleChange(e, "einsaetzeArt")}}/>
                      </div>
                      <div class="col-xs-3">
                          <label for="einsaetzeBilder">Bilder</label>
                          <input class="form-control" id="einsaetzeBilder" type="text" value={einsaetzeBilder} onChange={(e) => {this.handleChange(e, "einsaetzeBilder")}}/>
                      </div>
                      <div class="col-xs-2"><label for="einsaetzeFormat">Format</label>
                          <select class="form-control" id="einsaetzeFormat" value={einsaetzeFormat} onChange={(e) => {this.handleChange(e, "einsaetzeFormat")}}>
                              <option>.jpg</option>
                              <option>.png</option>
                          </select>
                      </div>
                      <div class="col-xs-12">
                          <label for="einsaetzeText">Text</label>
                          <textarea class="form-control" rows="5" id="einsaetzeText" value={einsaetzeText} onChange={(e) => {this.handleChange(e, "einsaetzeText")}}></textarea>
                      </div>
                      <div class="col-xs-10"></div>
                      <div class="col-xs-2">
                          <br/>
                          <button type="button" class="btn pull-right" onClick={this.sendEinsaetze}>Einfügen</button>
                      </div>
                  </div>
              </form>
              <h2>Termine Aktive Feuerwehr</h2>
              <form>
                  <div class="form-group row">
                      <div class="col-xs-2">
                          <label for="termineFWDatum">Datum</label>
                          <input class="form-control" id="termineFWDatum" type="date" value={termineFWDatum} onChange={(e) => {this.handleChange(e, "termineFWDatum")}}/>
                      </div>
                      <div class="col-xs-2">
                          <label for="termineFWUhrzeit">Uhrzeit</label>
                          <input class="form-control" id="termineFWUhrzeit" type="time" value={termineFWUhrzeit} onChange={(e) => {this.handleChange(e, "termineFWUhrzeit")}}/>
                      </div>
                      <div class="col-xs-3">
                          <label for="termineFWLeiter">Leiter</label>
                          <input class="form-control" id="termineFWLeiter" type="text" value={termineFWLeiter} onChange={(e) => {this.handleChange(e, "termineFWLeiter")}}/>
                      </div>
                      <div class="col-xs-3">
                          <label for="termineFWProbe">Probe</label>
                          <input class="form-control" id="termineFWProbe" type="text" value={termineFWProbe} onChange={(e) => {this.handleChange(e, "termineFWProbe")}}/>
                      </div>
                      <div class="col-xs-2">
                          <br/>
                          <button type="button" class="btn pull-right" onClick={this.sendTermineFW}>Einfügen</button>
                      </div>
                  </div>
              </form>
              <h2>Termine Jugendfeuerwehr</h2>
              <form>
                  <div class="form-group row">
                      <div class="col-xs-2">
                          <label for="termineJFDatum">Datum</label>
                          <input class="form-control" id="termineJFDatum" type="date" value={termineJFDatum} onChange={(e) => {this.handleChange(e, "termineJFDatum")}}/>
                      </div>
                      <div class="col-xs-2">
                          <label for="termineJFUhrzeit">Uhrzeit</label>
                          <input class="form-control" id="termineJFUhrzeit" type="time" value={termineJFUhrzeit} onChange={(e) => {this.handleChange(e, "termineJFUhrzeit")}}/>
                      </div>
                      <div class="col-xs-3">
                          <label for="termineJFLeiter">Leiter</label>
                          <input class="form-control" id="termineJFLeiter" type="text" value={termineJFLeiter} onChange={(e) => {this.handleChange(e, "termineJFLeiter")}}/>
                      </div>
                      <div class="col-xs-3">
                          <label for="termineJFProbe">Probe</label>
                          <input class="form-control" id="termineJFProbe" type="text" value={termineJFProbe} onChange={(e) => {this.handleChange(e, "termineJFProbe")}}/>
                      </div>
                      <div class="col-xs-2">
                          <br/>
                          <button type="button" class="btn pull-right" onClick={this.sendTermineJF}>Einfügen</button>
                      </div>
                  </div>
              </form>
          </div>
          </div>
    );
  }
}

