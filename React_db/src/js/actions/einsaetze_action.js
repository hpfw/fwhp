import config from '../../config/config'

export function fetchEinsaetze() {
    return { 
        type: "FETCH_EINSAETZE"
    }
}

export function setEinsaetze(data) {
    return {
        type: "FETCH_EINSAETZE_FULFILLED",
        payload:  data
    }
}

export function einsaetzeRejected(error) {
    return {
        type: "FETCH_EINSAETZE_REJECTED",
        payload: error
    }
}

export function einsaetze(text, bilder, datum, uhrzeit, art) {
    return (dispatch) => {
        dispatch(fetchEinsaetze());
       // console.log("test")
        //console.log(text, bilder, datum, uhrzeit, art)
        return fetch(config.BASE_URL + 'einsaetze', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                data: [datum, uhrzeit, text, bilder, art]
            })
        })
            .then(response => {
                if (response.status >= 200 && response.status < 300) {
                    response.json().then(json => {
                        //console.log(json);
                        dispatch(setEinsaetze(json));
                    });
                } else {
                        dispatch(einsaetzeRejected('Error on fetching'));
                }
            })
            .catch(
                error => {
                    console.log(error)
                        dispatch(einsaetzeRejected('Error on fetching'));
                }
            );
    };
}