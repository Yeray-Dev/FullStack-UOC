// =====================================================
// utils.js — Herramientas de ayuda que usan varias páginas
// =====================================================

// Llena una lista desplegable (<select>) con opciones
// select  → la lista que queremos llenar
// options → los datos, con forma { value, label }
export function fillSelect(select, options) {
	for (const arrOption of options) {                     // Por cada dato...
		const newOption = document.createElement("option") // Creamos una opción vacía
		newOption.value = arrOption.value                  // Valor interno (ej: "de")
		newOption.textContent = arrOption.label            // Texto visible (ej: "Alemán")
		select.append(newOption)                           // La metemos en la lista
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

// Calcula el siguiente número de id libre
export function nextId(list) {
	const ids = list.map(item => item.id) // Sacamos solo los ids
	return Math.max(0, ...ids) + 1        // El mayor + 1 (el 0 por si la lista está vacía)
}