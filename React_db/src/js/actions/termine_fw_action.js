import config from '../../config/config'

export function fetchTermineFW() {
    return {
        type: "FETCH_TERMINE_FW"
    }
}

export function setTermineFW(data) {
    return {
        type: "FETCH_TERMINE_FW_FULFILLED",
        payload:  data
    }
}

export function termineFWRejected(error) {
    return {
        type: "FETCH_TERMINE_FW_REJECTED",
        payload: error
    }
}

export function termineFW(leiter, uhrzeit, datum, probe) {
    return (dispatch) => {
        dispatch(fetchTermineFW());
        return fetch(config.BASE_URL + 'termine_fw', {
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
                        dispatch(setTermineFW(json));
                    });
                } else {
                        dispatch(termineFWRejected('Error on fetching'));
                }
            })
            .catch(
                error => {
                        dispatch(termineFWRejected('Error on fetching'));
                }
            );
    };
}