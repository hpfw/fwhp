import React from "react";
import styleEinsaetze from '../style/styleEinsaetze.css';
//import style from '../style/style.css';
import { connect } from "react-redux"
import { einsaetze } from "../actions/einsaetze_action"

@connect((store) => {  return {
        new_einsaetze: store.einsaetze_red.einsaetze,  
    };
})

export default class Einsaetze extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentWillMount() {
        this.props.dispatch(einsaetze());
    }

    handleClick = (datei) => {
      window.open('http://feuerwehr-waldburg.de/probeplan_' + datei + '.pdf');
    }

    render() {
      var arrayPic = [];
      const einsaetze = this.props.new_einsaetze;
      
      return (
        <div class="parallax">
            <div class="timeline">

        {einsaetze.data.map(function(data , index) {
            arrayPic = data.bilder.split(",")

            return (
                <div class= {(index % 2) == 0 ? 'container_timeline left_timeline' : 'container_timeline right_timeline'}>
                    <div class="box">              
                        <img src={require("../../images/" + arrayPic[0])} width="100%" height="100%"/>
                            <div class="content_timeline">
                                <div class="container_card_timeline">
                                    <p class="headline"><b>{data.datum}</b></p> 
                                    <p>{data.text} <br/>
                                        <a class="modal_button" id={index} data-toggle="modal"  data-target="#myModal"><u>Weitere Informationen</u></a>       
                                    </p>
                                </div>
                            </div>
                    </div>
                </div>
            );
        })}

        
                  
        </div>
           
            
            <div class="modal fade modal_timeline" id="myModal" role="dialog">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h4 class="modal-title">Modal Header</h4>
                        </div>
                        <div class="modal-body">
                            <p>This is a large modal.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>






            </div>
        </div>

       
      );
  }
}

