import config from '../../config/config'
import { aktuelles } from './aktuelles_action'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export function fetchAktuellesIamge() {
    return {
        type: "FETCH_AKTUELLES_IMAGE"
    }
}

export function setAktuellesIamge(data) {
    return {
        type: "FETCH_AKTUELLES_IMAGE_FULFILLED",
        payload: data
    }
}

export function aktuellesIamgeRejected(error) {
    return {
        type: "FETCH_AKTUELLES_IMAGE_REJECTED",
        payload: error
    }
}

export function aktuellesImage(text, bildname, datum, data) {
    return (dispatch) => {
        dispatch(fetchAktuellesIamge());
        dispatch(showLoading());
        return fetch(config.BASE_URL + 'aktuelles', {
            method: 'POST',
            mode: 'no-cors',
            body: data,
        })
            .then(response => {
                if (response.status >= 200 && response.status < 300) {
                    response.json().then(json => {
                        dispatch(setAktuellesIamge(json));
                        dispatch(aktuelles(text, bildname, datum))
                    });
                } else {
                    dispatch(aktuellesIamgeRejected('Error on fetching'));
                }
            })
            .catch(
                error => {
                    dispatch(aktuellesIamgeRejected('Error on fetching'));
                }
            );
    };
}