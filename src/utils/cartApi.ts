const api = process.env.NEXT_PUBLIC_API

const defaultHeaders = {
	'Content-Type': 'application/json',
	'ngrok-skip-browser-warning': 'true',
}


export const getCart = async () => {
	const res = await fetch(`${api}/cart/`, {
		method: 'GET',
		headers: defaultHeaders,
		credentials: 'include',
	})

	if (!res.ok) {
		throw new Error(`Error adding to cart: ${res.status}`)
	}

	return res.json()
}

export const addCartItem = async (productId: number, count: number = 1) => {
	console.log({ productId, count })

	const res = await fetch(`${api}/cart/add/`, {
		method: 'POST',
		headers: defaultHeaders,
		credentials: 'include',
		body: JSON.stringify({
			count,
			product: productId,
		}),
	})

	if (!res.ok) {
		throw new Error(`Error adding to cart: ${res.status}`)
	}

	return res.json()
}

export const increaseCartItem = async (id: number) => {
	const res = await fetch(`${api}/cart/increase/${id}/`, {
		method: 'PATCH',
		headers: defaultHeaders,
		credentials: 'include',
	})

	if (!res.ok) {
		throw new Error(`Error: ${res.status}`)
	}

	return res.json()
}

export const decreaseCartItem = async (id: number) => {
	const res = await fetch(`${api}/cart/decrease/${id}/`, {
		method: 'PATCH',
		headers: defaultHeaders,
		credentials: 'include',
	})

	if (!res.ok) {
		throw new Error(`Error: ${res.status}`)
	}

	return res.json()
}

export const removeCartItem = async (cartItemId: number) => {
	const res = await fetch(`${api}/cart/remove/${cartItemId}/`, {
		method: 'DELETE',
		credentials: 'include',
	})

	if (!res.ok) {
		const errorData = await res.json().catch(() => ({}))
		throw new Error(
			errorData.detail || `Error :( ${res.status}`
		)
	}

	if (res.status === 204) {
		return null
	}

	return await res.json().catch(() => null)
}

