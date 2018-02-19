import config from '../../config/config'

export function fetchAktuelles() {
    return {
        type: "FETCH_AKTUELLES"
    }
}

export function setAktuelles(data) {
    return {
        type: "FETCH_AKTUELLES_FULFILLED",
        payload:  data
    }
}

export function aktuellesRejected(error) {
    return {
        type: "FETCH_AKTUELLES_REJECTED",
        payload: error
    }
}

export function aktuelles() {
    return (dispatch) => {
        dispatch(fetchAktuelles());
        return fetch(config.BASE_URL + 'aktuelles', {
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
                        dispatch(setAktuelles(json));
                    });
                } else {
                        dispatch(aktuellesRejected('Error on fetching'));
                }
            })
            .catch(
                error => {
                        dispatch(aktuellesRejected('Error on fetching'));
                }
            );
    };
}