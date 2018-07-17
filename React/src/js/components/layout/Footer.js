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
            <button data-toggle="collapse" data-target="#datenschutz">Datenschutz</button>
            <div id="datenschutz" class="collapse">
                <p><strong><big>Datenschutzerklärung</big></strong></p>
                <p><strong>Allgemeiner Hinweis und Pflichtinformationen</strong></p>
                <p><strong>Benennung der verantwortlichen Stelle</strong></p>
                <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
                <p><span id="s3-t-firma">Freiwillige Feuerwehr Waldburg </span><br/><span id="s3-t-ansprechpartner">Gemeinde Waldburg</span><br/><span id="s3-t-strasse">Amtzeller Straße 27</span><br/><span id="s3-t-plz">88289</span> <span id="s3-t-ort">Waldburg</span></p><p></p>
                <p>Die verantwortliche Stelle entscheidet allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, Kontaktdaten o. Ä.).</p>

                <p><strong>Widerruf Ihrer Einwilligung zur Datenverarbeitung</strong></p>
                <p>Nur mit Ihrer ausdrücklichen Einwilligung sind einige Vorgänge der Datenverarbeitung möglich. Ein Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine formlose Mitteilung per E-Mail. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.</p>

                <p><strong>Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde</strong></p>
                <p>Als Betroffener steht Ihnen im Falle eines datenschutzrechtlichen Verstoßes ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde bezüglich datenschutzrechtlicher Fragen ist der Landesdatenschutzbeauftragte des Bundeslandes, in dem sich der Sitz unseres Unternehmens befindet. Der folgende Link stellt eine Liste der Datenschutzbeauftragten sowie deren Kontaktdaten bereit: <a href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html" target="_blank">https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html</a>.</p>
            </div>
        </footer>
    );
  }
}
