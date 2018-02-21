import React from "react";
import style from '../style/style.css';
import { connect } from "react-redux"
import { termineFW } from "../actions/termine_fw_action"
import { termineJF } from "../actions/termine_jf_action"
import { aktuelles } from "../actions/aktuelles_action"
import { kontakt } from "../actions/kontakt_action"
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

@connect((store) => {  return {
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
      this.setState({ [name]: e.target.value })
    }


    handleSend = () => {
      this.props.dispatch(kontakt(this.state.name, this.state.email, this.state.comments ));
      this.setState({name: "", email: "", comments: ""})
    }


    render() {
      const termine_fw = this.props.new_termine_fw;
      const termine_jf = this.props.new_termine_jf;
      const aktuelles = this.props.new_aktuelles;
      var {name, email, comments} = this.state

      return (
        <div id="home" data-spy="scroll" data-target=".navbar" data-offset="50">

          <div id="myCarousel" class="carousel slide" data-ride="carousel">

            <ol class="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
              <li data-target="#myCarousel" data-slide-to="3"></li>
            </ol>


            <div class="carousel-inner" role="listbox">
              <div class="item active">
                <img src={require("../../images/waldburg1.jpg")} width="100%" height="100%"/>
                  <div class="carousel-caption">
                    <h3>Waldburg</h3>
                  </div>
              </div>

              <div class="item">
                <img src={require("../../images/waldburg2.jpg")} width="100%" height="100%"/>
                <div class="carousel-caption">
                    <h3>Waldburg</h3>
                  </div>
              </div>

              <div class="item">
                <img src={require("../../images/waldburg1.jpg")} width="100%" height="100%"/>
                  <div class="carousel-caption">
                    <h3>Waldburg</h3>
                  </div>
              </div>

              <div class="item">
                <img src={require("../../images/waldburg2.jpg")} width="100%" height="100%"/>
                <div class="carousel-caption">
                  <h3>Waldburg</h3>
                </div>
              </div>
            </div>

            <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
              <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
              <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>

          <div id="aktuelles" class="bg-1 black">
            <div class="container text-center">
            <h3>AKTUELLES</h3>
            <br/>
              <div class="col-sm-5 col-xs-12">
                <p class="aktuelles"><em>{ aktuelles.text } </em></p>
              </div>
              <div class="col-sm-7 col-xs-12">
                <img src={require("../../images/" + aktuelles.bild)} width="110%" height="110%"/>
              </div>
            </div>
          </div>

          <div id="termine" class="bg-1 white">
            <div class="container container-fluid card-fluid ">
              <h3 class="text-center">TERMINE</h3>
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
                      <button class="btn" onClick={() => this.handleClick("aktiv")}>Zum Probeplan</button>
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
                      <button class="btn" onClick={() => this.handleClick("jugend")}>Zum Probeplan</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="parallax"></div>

          <div class="bg-1 black">
          <div id="contact" class="container">
            <h3 class="text-center">KONTAKT</h3>
            <br/>

            <div class="row">
              <div class="col-md-4">
                <p>Interessiert?&nbsp;Schreiben Sie uns</p>
                <p><span class="glyphicon glyphicon-map-marker"></span> &nbsp;88289 Waldburg</p>
                <p><span class="glyphicon glyphicon-road"></span> &nbsp;Amtzeller Straße 27</p>
                <p><span class="glyphicon glyphicon-phone"></span> &nbsp;Telefon: 07529/112</p>
                <p><span class="glyphicon glyphicon-envelope"></span> &nbsp;Email: info@Feuerwehr-Waldburg.de</p>
              </div>
              <div class="col-md-8">
                <div class="row">
                  <div class="col-sm-6 form-group">
                    <input class="form-control" id="name" name="name" placeholder="Name" type="text" required value={name} onChange={(e) => {this.handleChange(e, "name")}}/>
                  </div>
                  <div class="col-sm-6 form-group">
                    <input class="form-control" id="email" name="email" placeholder="Email" type="email" required value={email} onChange={(e) => {this.handleChange(e, "email")}}/>
                  </div>
                </div>
                <textarea class="form-control" id="comments" name="comments" placeholder="Nachricht" rows="5" value={comments} onChange={(e) => {this.handleChange(e, "comments")}}></textarea>
                <br/>
                  <div class="row">
                    <div class="col-md-12 form-group">
                      <button class="btn pull-right" type="submit" onClick={this.handleSend}>Senden</button>
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
              <Map google={this.props.google} style={{width: '100%', height: '60vh', position: "absolute"}}  initialCenter={{lat: 47.757744,lng: 9.720259}} zoom={15} scrollwheel={false}>
                <Marker
                    title={'Feuerwehrhaus Waldburg'}
                    name={'FFW'}
                    position={{lat: 47.757744, lng: 9.720259}} />
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
