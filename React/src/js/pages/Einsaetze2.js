import React from "react";
import styleEinsaetze from '../style/timeline.css';
//import style from '../style/style.css';
import { connect } from "react-redux"
import { einsaetze } from "../actions/einsaetze_action"
import { Fade } from 'react-reveal';

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

    componentDidMount() {
        //window.addEventListener('scroll', this.handleScroll);
    }

    handleClick = (datei) => {
        window.open('http://feuerwehr-waldburg.de/probeplan_' + datei + '.pdf');
    }

    handleScroll = () => {
        console.log("slide")
        //if (document.body.scrollTop > 2 || document.documentElement.scrollTop > 2) {

          //  console.log("genug slide")
          //  document.getElementById("slideanim").className = document.getElementById("slideanim").className + " slide";
        //}
    }

    render() {
        var arrayPic = [];
        const einsaetze = this.props.new_einsaetze;

        return (
            <div>
            <br/>
            <div class="timeline-container parallax" id="timeline-1">
                <div class="timeline-header">
                    <h1 class="timeline-header__title"><b>2018</b></h1>
                </div>


                <div class="timeline">


                    {
                        einsaetze.data.map(function(data , index) {
                            arrayPic = data.bilder.split(",")

                            return (
                                <Fade up>
                                    <div class="timeline-item" data-text="2017">
                                        <div class="timeline__content"><img class="timeline__img" src={require("../../images/" + arrayPic[0])} />
                                            <h2 class="timeline__content-title">1. Februar</h2>
                                            <div class="timeline-marker"></div>
                                            <p class="timeline__content-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, facilis quo. Maiores magnam modi ab libero praesentium blanditiis consequatur aspernatur accusantium maxime molestiae sunt ipsa.
                                                <a class="info_link"><u>Weitere Informationen</u></a>
                                            </p>

                                        </div>
                                    </div>
                                </Fade>
                            );
                        })
                    }
                </div>
            <br/>
            <br/>

                    <div class="timeline-header">
                        <h1 class="timeline-header__title"><b>2017</b></h1>
                    </div>
                    <div class="timeline">
                    <Fade up>
                    <div class="timeline-item" data-text="2017">
                        <div class="timeline__content"><img class="timeline__img" src={require("../../images/waldburg1.jpg")} />
                            <h2 class="timeline__content-title">2. Oktober</h2>
                            <p class="timeline__content-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, facilis quo. Maiores magnam modi ab libero praesentium blanditiis consequatur aspernatur accusantium maxime molestiae sunt ipsa.
                                <a class="info_link"><u>Weitere Informationen</u></a>
                            </p>
                        </div>
                    </div>
                    </Fade>
                    <Fade up>
                    <div class="timeline-item" data-text="2017">
                        <div class="timeline__content"><img class="timeline__img" src={require("../../images/waldburg1.jpg")} />
                            <h2 class="timeline__content-title">3. September</h2>
                            <p class="timeline__content-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, facilis quo. Maiores magnam modi ab libero praesentium blanditiis consequatur aspernatur accusantium maxime molestiae sunt ipsa.
                                <a class="info_link"><u>Weitere Informationen</u></a>
                            </p>
                        </div>
                    </div>
                    </Fade>
                    <Fade up>
                    <div class="timeline-item" data-text="2017">
                        <div class="timeline__content"><img class="timeline__img" src={require("../../images/waldburg1.jpg")} />
                            <h2 class="timeline__content-title">4. Mai</h2>
                            <p class="timeline__content-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, facilis quo. Maiores magnam modi ab libero praesentium blanditiis consequatur aspernatur accusantium maxime molestiae sunt ipsa.
                                <a class="info_link"><u>Weitere Informationen</u></a>
                            </p>
                        </div>
                    </div>
                    </Fade>
                    <Fade up>
                    <div class="timeline-item" data-text="2017">
                        <div class="timeline__content"><img class="timeline__img" src={require("../../images/waldburg1.jpg")} />
                            <h2 class="timeline__content-title">4. Mai</h2>
                            <p class="timeline__content-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, facilis quo. Maiores magnam modi ab libero praesentium blanditiis consequatur aspernatur accusantium maxime molestiae sunt ipsa.
                                <a class="info_link"><u>Weitere Informationen</u></a>
                            </p>
                        </div>
                    </div>
                    </Fade>
                    <Fade up>
                    <div class="timeline-item" data-text="2017">
                        <div class="timeline__content"><img class="timeline__img" src={require("../../images/waldburg1.jpg")} />
                            <h2 class="timeline__content-title">4. Mai</h2>
                            <p class="timeline__content-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, facilis quo. Maiores magnam modi ab libero praesentium blanditiis consequatur aspernatur accusantium maxime molestiae sunt ipsa.
                                <a class="info_link"><u>Weitere Informationen</u></a>
                            </p>
                        </div>
                    </div>
                    </Fade>

                </div>
            </div>
            </div>
        );
    }
}

