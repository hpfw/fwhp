import { combineReducers } from "redux"

import termine_fw_red from "./termine_fw_red"
import termine_jf_red from "./termine_jf_red"
import aktuelles_red from "./aktuelles_red"
import kontakt_red from "./kontakt_red"

export default combineReducers({
    termine_fw_red,
    termine_jf_red,
    aktuelles_red,
    kontakt_red,
})