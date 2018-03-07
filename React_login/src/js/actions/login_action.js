import config from '../../config/config'

export function fetchLogin() {
    return {
        type: "FETCH_LOGIN"
    }
}

export function setLogin(data) {
    return {
        type: "FETCH_LOGIN_FULFILLED",
        payload:  data
    }
}

export function loginRejected(error) {
    return {
        type: "FETCH_LOGIN_REJECTED",
        payload: error
    }
}

export function login(id, pw) {
    return (dispatch) => {
        dispatch(fetchLogin());
        return fetch(config.BASE_URL + 'login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: id,
                password: pw,
            })
        })
            .then(response => {
                if (response.status >= 200 && response.status < 300) {
                    response.json().then(json => {
                        dispatch(setLogin(json));
                    });
                } else {
                        dispatch(loginRejected('Error on fetching'));
                }
            })
            .catch(
                error => {
                        dispatch(loginRejected('Error on fetching'));
                }
            );
    };
}