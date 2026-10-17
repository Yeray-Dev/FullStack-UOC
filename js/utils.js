
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
