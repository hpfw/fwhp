import config from '../../config/config'

export function fetchKontakt() {
    return {
        type: "FETCH_KONTAKT"
    }
}

export function setKontakt(data) {
    return {
        type: "FETCH_KONTAKT_FULFILLED",
        payload:  data
    }
}

export function kontaktRejected(error) {
    return {
        type: "FETCH_KONTAKT_REJECTED",
        payload: error
    }
}

export function kontakt(name, email, comments) {
    return (dispatch) => {
        dispatch(fetchKontakt());
        return fetch(config.BASE_URL + 'kontakt', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: {
                name: name,
                email: email,
                comments: comments,
            }
        })
            .then(response => {
                if (response.status >= 200 && response.status < 300) {
                    response.json().then(json => {
                        //console.log(json);
                        dispatch(setKontakt(json));
                    });
                } else {
                        dispatch(kontaktRejected('Error on fetching'));
                }
            })
            .catch(
                error => {
                        dispatch(kontaktRejected('Error on fetching'));
                }
            );
    };
}