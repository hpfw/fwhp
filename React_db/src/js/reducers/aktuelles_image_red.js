export default function reducer(state = {    // reducer schaut Komponenten an, die mit ihm verbunden sind
                                    aktuellesIamge: {
                                        status: "",
                                    },
                                    fetching: false,
                                    fetched: false,
                                    error: null,
                                }, action) {

    switch (action.type) {
        case "FETCH_AKTUELLES_IMAGE": {
            console.log("FETCH_AKTUELLES_IMAGE");
            return {...state, fetching: true} // im fetching zustand daher true
        }
        case "FETCH_AKTUELLES_IMAGE_REJECTED": {
            console.log("FETCH_AKTUELLES_IMAGE_REJECTED");
            return {...state, fetching: false, error: action.payload}
        }
        case "FETCH_AKTUELLES_IMAGE_FULFILLED": {  // ...state: state von oben: nimmt alle States von oben und ändert jene, die geändert werden sollen.
            return {                    // initR wurde nun neu gesetzt. Alle Komponenten, die verbunden sind, erfahren dies und rendern neu.
                ...state,
                fetching: false,   // fetching false: Fertig
                fetched: true,     // fetched ist nun fertig
                aktuellesIamge: action.payload,
            }
        }
    }

    return state
}