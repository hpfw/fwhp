import config from '../../config/config'

export function fetchTermineJF() {
    return {
        type: "FETCH_TERMINE_JF"
    }
}

export function setTermineJF(data) {
    return {
        type: "FETCH_TERMINE_JF_FULFILLED",
        payload:  data
    }
}

export function termineJFRejected(error) {
    return {
        type: "FETCH_TERMINE_JF_REJECTED",
        payload: error
    }
}

export function termineJF(leiter, uhrzeit, datum, probe) {
    return (dispatch) => {
        dispatch(fetchTermineJF());
        return fetch(config.BASE_URL + 'termine_jf', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({
                data: [uhrzeit, datum, leiter, probe],
            })
        })
            .then(response => {
                if (response.status >= 200 && response.status < 300) {
                    response.json().then(json => {
                        //console.log(json);
                        dispatch(setTermineJF(json));
                    });
                } else {
                        dispatch(termineJFRejected('Error on fetching'));
                }
            })
            .catch(
                error => {
                        dispatch(termineJFRejected('Error on fetching'));
                }
            );
    };
}