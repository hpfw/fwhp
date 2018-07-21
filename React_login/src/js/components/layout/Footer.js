import React from "react";


export default class Footer extends React.Component {

    handleClick = (element) => {
        if (element != null){
            var element = document.getElementById(element);
            element.scrollIntoView({block: "start", behavior: "smooth"});
        }
    }

    render() {
        return (
            <footer class="text-center">
                <a class="up-arrow" onClick={() => this.handleClick("home")} data-toggle="tooltip" title="zum Seitenbeginn">
                    <span class="glyphicon glyphicon-chevron-up"></span>
                </a>
                <br/>
                <a class="up-arrow datenschutz" data-toggle="collapse" data-target="#datenschutz">Datenschutz</a>
            </footer>
        );
    }
}
