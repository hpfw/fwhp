import React from "react";
import timeline from '../style/timeline.css';
import modal from '../style/modal.css';
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
            galleryIndex: 1,
            galleryImages: [],
            galleryHeader: "",
            galleryText: "",
        };
    }

    componentWillMount() {
        this.props.dispatch(einsaetze());
    }

    componentDidMount() {
        //window.addEventListener('scroll', this.handleScroll);
    }

    handleClick = (event, index) => {
        var { galleryIndex } = this.state
        var slides = document.getElementsByClassName("mySlides");
        galleryIndex = galleryIndex + index
        if(slides.length < galleryIndex){
            galleryIndex = 1
        }else if(galleryIndex < 1){
            galleryIndex = slides.length
        }
        this.setState({galleryIndex: galleryIndex})

        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[galleryIndex-1].style.display = "block";
    }

    showImage = (event, data) =>{
        console.log(data)
        var images = data.bilder.split(",")
        this.setState({galleryIndex: 1, galleryImages: images, galleryText: data.text, galleryHeader: data.art}, () => {
            var slides = document.getElementsByClassName("mySlides");
            for (var i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slides[0].style.display = "block";
        })
    }


    render() {
        var arrayPic = [];
        const einsaetze = this.props.new_einsaetze;
        var { galleryHeader, galleryImages, galleryText } = this.state

        return (

            <div>
                <div class="timeline-container parallax" id="timeline-1" >


                    {
                        einsaetze.data.map(function(dataYear , index) {


                            return (
                                <div>
                                    <br/>
                                    <br/>
                                    <div class="timeline-header">
                                        <h1 class="timeline-header__title"><b>{dataYear.year}</b></h1>
                                    </div>

                                    <div class="timeline">

                                        {dataYear.data.map(function (data, index) {
                                            arrayPic = data.bilder.split(",")

                                            return(
                                                <Fade up>
                                                    <div class="timeline-item" data-text={data.art}>
                                                        <div class="timeline__content"><img class="timeline__img" src={require("../../images/" + arrayPic[0])} />
                                                            <h2 class="timeline__content-title">{data.day}</h2>
                                                            <div class="timeline-marker"></div>
                                                            <p class="timeline__content-desc">{data.text.substring(0, 150)+"... "}
                                                            <a class="info_link" data-toggle="modal" data-target="#myModal" onClick={(e) => {this.showImage(e, data)}}><u>Weitere Informationen</u></a>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Fade>
                                            )
                                        }.bind(this))}

                                    </div>
                                </div>
                            );
                        }.bind(this))
                    }
                </div>

                <div class="modal fade" id="myModal" role="dialog">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                <h3 class="modal-title">{galleryHeader}</h3>
                                <p>{galleryText}</p>

                                <div class="slideshow-container">
                                    {
                                        galleryImages.map(function (image, index) {
                                            return(
                                                <div class="mySlides fade_gallery">
                                                    <div class="numbertext">{index+1} / {galleryImages.length}</div>
                                                    <img src={require("../../images/"+image)} width="100%" height="100%"/>
                                                </div>
                                            )
                                        })
                                    }
                                    <a class="prev" onClick={(e) => {this.handleClick(e, -1)}}>&#10094;</a>
                                    <a class="next" onClick={(e) => {this.handleClick(e, 1)}}>&#10095;</a>

                                </div>
                                <div class="button_space">
                                    <button type="button" class="btn btn-default pull-right" data-dismiss="modal">Schließen</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

