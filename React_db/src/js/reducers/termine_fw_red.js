export default function reducer(state={    // reducer schaut Komponenten an, die mit ihm verbunden sind
                                    termine: {
                                        probe: "",
                                        datum: "",
                                        uhrzeit: "",
                                        leiter: "",
                                        tag: "",
                                    },
                                    fetching: false,
                                    fetched: false,
                                    error: null,
                                }, action) {

    switch (action.type) {
        case "FETCH_TERMINE_FW": {
            console.log("FETCH_TERMINE_FW");
            return {...state, fetching: true} // im fetching zustand daher true
        }
        case "FETCH_TERMINE_FW_REJECTED": {
            console.log("FETCH_TERMINE_FW_REJECTED");
            return {...state, fetching: false, error: action.payload}
        }
        case "FETCH_TERMINE_FW_FULFILLED": {  // ...state: state von oben: nimmt alle States von oben und ändert jene, die geändert werden sollen.
            return {                    // initR wurde nun neu gesetzt. Alle Komponenten, die verbunden sind, erfahren dies und rendern neu.
                ...state,
                fetching: false,   // fetching false: Fertig
                fetched: true,     // fetched ist nun fertig
                termine: action.payload,
            }
        }
    }

    return state
}