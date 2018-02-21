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

export function einsaetze() {
    return (dispatch) => {
        dispatch(fetchEinsaetze());
        return fetch(config.BASE_URL + 'einsaetze', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
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
                        dispatch(einsaetzeRejected('Error on fetching'));
                }
            );
    };
}