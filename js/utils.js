
export function fillSelect(select, options) {
	for (const arrOption of options) {
		const newOption = document.createElement("option")
		newOption.value = arrOption.value
		newOption.textContent = arrOption.label
		select.append(newOption);
	}
}

export function getLabel(list, value) {
	const found = list.find(item => item.value === value)

	if (found)
		return found.label
	return value
}


export function getInitials(name) {
	return name
		.split(" ")
		.filter(word => word !== "")
		.slice(0, 2)
		.map(word => word[0].toUpperCase())
		.join("")
}

export function formatDate(isoDate) {
	const [year, month, day] = isoDate.split("-")
	return `${day}/${month}/${year}`
}