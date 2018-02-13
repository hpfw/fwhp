import React from "react";
import style from '../style/style.css';

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


export class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {

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
              <p class="aktuelles"><em>Dünnes Eis birgt große Gefahr
                Der Deutsche Feuerwehrverband (DFV) warnt vor dem Betreten nicht freigegebener Eisflächen: „Trotz der aktuellen Minusgrade sind viele Eisflächen zu dünn; es droht Einbruch“, erklärt DFV-Vizepräsident Hermann Schreck. Auch der vielfach in Deutschland herrschende Frost der vergangenen Tage garantiert nicht, dass die Eisdecke auf Seen oder Flüssen tragfähig ist. Besonders Kinder lassen sich vom glitzernden Eis zu unvorsichtigem Verhalten verleiten. „Betreten Sie nur freigegebene Eisflächen!“, mahnt Schreck. Für die Freigabe sind die örtlichen Behörden zuständig. </em></p>
            </div>
            <div class="col-sm-7 col-xs-12">
              <img src={require("../../images/waldburg1.jpg")} width="110%" height="110%"/>
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
                    <p><strong>Probeleiter:</strong> Klaus</p>
                    <p><strong>Probe:</strong> Alle</p>
                    <p><strong>Uhrzeit:</strong> 19:30</p>
                  </div>
                  <div class="panel-footer card-footer">
                    <h3>Mittwoch</h3>
                    <h3>10.02.2018</h3>
                    <button class="btn">Zum Probeplan</button>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-xs-12">
                <div class="panel panel-default card card-default text-center">
                  <div class="panel-heading card-heading">
                    <h1>Jugendfeuerwehr</h1>
                  </div>
                  <div class="panel-body card-body">
                    <p><strong>Probeleiter:</strong> Rlaus</p>
                    <p><strong>Probe:</strong> Alle</p>
                    <p><strong>Uhrzeit:</strong> 18:30</p>
                  </div>
                  <div class="panel-footer card-footer">
                    <h3>Montag</h3>
                    <h3>10.02.2018</h3>
                    <button class="btn ">Zum Probeplan</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="modal fade" id="myModal" role="dialog">
            <div class="modal-dialog">

              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal">×</button>
                  <h4><span class="glyphicon glyphicon-lock"></span> Tickets</h4>
                </div>
                <div class="modal-body">
                  <form role="form">
                    <div class="form-group">
                      <label for="psw"><span class="glyphicon glyphicon-shopping-cart"></span> Tickets, $23 per person</label>
                      <input type="number" class="form-control" id="psw" placeholder="How many?"/>
                    </div>
                    <div class="form-group">
                      <label for="usrname"><span class="glyphicon glyphicon-user"></span> Send To</label>
                      <input type="text" class="form-control" id="usrname" placeholder="Enter email"/>
                    </div>
                    <button type="submit" class="btn btn-block">Pay
                      <span class="glyphicon glyphicon-ok"></span>
                    </button>
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="submit" class="btn btn-danger btn-default pull-left" data-dismiss="modal">
                    <span class="glyphicon glyphicon-remove"></span> Cancel
                  </button>
                  <p>Need <a href="#">help?</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-1 black">
        <div id="contact" class="container">
          <h3 class="text-center">Kontakt</h3>
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
                  <input class="form-control" id="name" name="name" placeholder="Name" type="text" required/>
                </div>
                <div class="col-sm-6 form-group">
                  <input class="form-control" id="email" name="email" placeholder="Email" type="email" required/>
                </div>
              </div>
              <textarea class="form-control" id="comments" name="comments" placeholder="Nachricht" rows="5"></textarea>
              <br/>
                <div class="row">
                  <div class="col-md-12 form-group">
                    <button class="btn pull-right" type="submit">Senden</button>
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
