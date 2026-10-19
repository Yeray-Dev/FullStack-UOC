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

// Traduce un código a su nombre legible
// Ejemplo: getLabel(languages, "de") devuelve "Alemán"
export function getLabel(options, value) {
	const option = options.find(o => o.value === value) // Buscamos el que coincide
	return option ? option.label : value                // Si existe, su nombre; si no, el código
}

// Saca las iniciales de un nombre
// Ejemplo: getInitials("Jonas Keller") devuelve "JK"
export function getInitials(name) {
	return name
		.split(" ")           // Cortamos por espacios → ["Jonas", "Keller"]
		.map(word => word[0]) // Primera letra de cada palabra → ["J", "K"]
		.join("")             // Las juntamos → "JK"
}

// Calcula el siguiente número de id libre
// Ejemplo: si los ids son 1, 2 y 6 → devuelve 7
export function nextId(list) {
	const ids = list.map(item => item.id) // Sacamos solo los ids
	return Math.max(0, ...ids) + 1        // El mayor + 1 (el 0 por si la lista está vacía)
}