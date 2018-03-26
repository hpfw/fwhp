import { combineReducers } from "redux"
import { loadingBarReducer } from 'react-redux-loading-bar'

import termine_fw_red from "./termine_fw_red"
import termine_jf_red from "./termine_jf_red"
import aktuelles_red from "./aktuelles_red"
import aktuelles_image_red from "./aktuelles_image_red"
import kontakt_red from "./kontakt_red"
import einsaetze_red from "./einsaetze_red"

export default combineReducers({
    termine_fw_red,
    termine_jf_red,
    aktuelles_red,
    kontakt_red,
    einsaetze_red,
    aktuelles_image_red,
    loadingBar: loadingBarReducer,
})