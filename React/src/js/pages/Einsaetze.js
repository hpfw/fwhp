import React from "react";
import '../style/timeline.css';
import '../style/modal.css';
import { connect } from "react-redux"
import { einsaetze } from "../actions/einsaetze_action"
import { Fade } from 'react-reveal';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

@connect((store) => {  return {
    new_einsaetze: store.einsaetze_red.einsaetze,
};
})

export default class Einsaetze extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            galleryImages: [],
            galleryHeader: "",
            galleryText: "",
        };
    }

    componentWillMount() {
        this.props.dispatch(einsaetze());
    }


    showImage = (event, data) =>{
        var images = data.bilder.split(",")
        this.setState({galleryImages: images, galleryText: data.text, galleryHeader: data.art})

    }


    render() {
        var arrayPic = [];
        const einsaetze = this.props.new_einsaetze;
        var { galleryHeader, galleryImages, galleryText } = this.state
        var images = []
        for(var i = 0; i<galleryImages.length; i++){
            images.push({original: ("/images/einsaetze/"+galleryImages[i]), thumbnail: ("/images/einsaetze/"+galleryImages[i])})
        }

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
                                                        <div class="timeline__content"><img class="timeline__img" src={"../../images/einsaetze/" + arrayPic[0]} />
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

                                <ImageGallery items={images}  showPlayButton={false} slideOnThumbnailHover={true}/>
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

