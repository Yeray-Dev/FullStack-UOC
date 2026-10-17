import { users, languages, roles } from "./datos.js"
import { fillSelect, getLabel, getInitials, formatDate } from "./utils.js"

const languageSelect = document.querySelector("#user-language")
const roleSelect = document.querySelector("#user-role")
const userCount = document.querySelector("#user-count")
const userList = document.querySelector("#user-list")
const rowTemplate = document.querySelector("#user-row-template")

fillSelect(languageSelect, languages)
fillSelect(roleSelect, roles)
languageSelect.value = "es"

function createRow(user) {
	const row = rowTemplate.content.cloneNode(true)
	const createdAt = row.querySelector('[data-field="createdAt"]')

	row.querySelector('[data-field="initials"]').textContent = getInitials(user.name)
	row.querySelector('[data-field="name"]').textContent = user.name
	row.querySelector('[data-field="email"]').textContent = user.email
	row.querySelector('[data-field="nativeLanguage"]').textContent = getLabel(languages, user.nativeLanguage)
	row.querySelector('[data-field="role"]').textContent = getLabel(roles, user.role)
	row.querySelector(".role-badge").classList.add("role-" + user.role)
	createdAt.textContent = formatDate(user.createdAt)
	createdAt.dateTime = user.createdAt
	row.querySelector('[data-action="delete"]').dataset.id = user.id
	return row
}

function renderUsers(list) {
	userList.replaceChildren()
	for (const user of list) {
		userList.append(createRow(user))
	}
	userCount.textContent = users.length
}

renderUsers(users)