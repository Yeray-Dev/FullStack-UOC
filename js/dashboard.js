import { languages, level, modality, exchanges } from "./datos.js"
import { fillSelect } from "./utils.js"

const languageSelect = document.querySelector("#language-filter")
const levelSelect = document.querySelector("#level-filter")
const modeSelect = document.querySelector("#modality-filter")
const cardTemplate = document.querySelector("#card-template")
const cardList = document.querySelector("#card-list")

fillSelect(languageSelect, languages)
fillSelect(levelSelect, level)
fillSelect(modeSelect, modality)

function createCard(exchange) {
	const card = cardTemplate.content.cloneNode(true)

	card.querySelector('[data-field="language"]').textContent = exchange.language
	card.querySelector('[data-field="level"]').textContent = exchange.level
	card.querySelector('[data-field="description"]').textContent = exchange.description
	card.querySelector("li").classList.add(exchange.type)
	return card
}

function renderCards(exchanges) {
	cardList.replaceChildren()
	for (const exchange of exchanges) {
		cardList.append(createCard(exchange))
	}
}

renderCards(exchanges)
