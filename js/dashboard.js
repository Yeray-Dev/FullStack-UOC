import { languages } from "js/datos.js"
import { fillSelect } from "js/utils.js"

const languageSelect = document.querySelector("#language-filter")

fillSelect(languageSelect, languages)
