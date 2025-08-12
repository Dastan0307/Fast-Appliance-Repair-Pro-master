// 'use client'

// import { CartItem } from '@utils/types'
// import React, { ChangeEvent, FormEvent, useState } from 'react'
// import styles from './cartPage.module.scss'

// interface Product {
// 	title: string
// 	price: string
// }

// interface OrderItem {
// 	id: number
// 	count: number
// 	product: Product
// 	total_price: string
// }

// interface OrderData {
// 	full_name: string
// 	address: string
// 	phone_number: string
// 	email: string
// 	country_region: string
// 	notes: string
// 	items: OrderItem[]
// }

// interface CheckoutModalProps {
// 	onClose: () => void
// 	cartItems: CartItem[]
// }

// const CheckoutModal: React.FC<CheckoutModalProps> = ({
// 	onClose,
// 	cartItems,
// }) => {
// 	const [formData, setFormData] = useState({
// 		full_name: '',
// 		country_region: 'Canada',
// 		address: '',
// 		phone_number: '',
// 		email: '',
// 		notes: '',
// 	})
// 	const [isSubmitting, setIsSubmitting] = useState(false)
// 	const [submitError, setSubmitError] = useState<string | null>(null)
// 	const [isOrderConfirmed, setIsOrderConfirmed] = useState(false)

// 	const handleChange = (
// 		e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
// 	) => {
// 		const { name, value } = e.target
// 		setFormData(prevData => ({
// 			...prevData,
// 			[name]: value,
// 		}))
// 	}

// 	const handleSubmit = async (e: FormEvent) => {
// 		e.preventDefault()
// 		setIsSubmitting(true)
// 		setSubmitError(null)

// 		const orderData: OrderData = {
// 			full_name: formData.full_name,
// 			country_region: formData.country_region,
// 			address: formData.address,
// 			phone_number: formData.phone_number,
// 			email: formData.email,
// 			notes: formData.notes,
// 			items: cartItems.map(item => ({
// 				id: item.id,
// 				count: item.count,
// 				product: {
// 					title: item.title,
// 					price: item.total_price,
// 				},
// 				total_price: item.total_price,
// 			})),
// 		}

// 		try {
// 			const response = await fetch(
// 				'https://grubworm-calm-vaguely.ngrok-free.app/api/orders/',
// 				{
// 					method: 'POST',
// 					headers: {
// 						'Content-Type': 'application/json',
// 					},
// 					body: JSON.stringify(orderData),
// 					mode: 'cors', // явно указываем
// 				}
// 			)

// 			if (!response.ok) {
// 				let errorMsg = 'An error occurred while sending your order.'
// 				try {
// 					const errorData = await response.json()
// 					errorMsg = errorData?.detail || errorData?.message || errorMsg
// 				} catch {}
// 				throw new Error(errorMsg)
// 			}

// 			setIsOrderConfirmed(true)
// 		} catch (error) {
// 			const errorMessage =
// 				error instanceof Error ? error.message : 'Unknown error.'
// 			console.error('Error sending order:', errorMessage)
// 			setSubmitError(errorMessage)
// 		} finally {
// 			setIsSubmitting(false)
// 		}
// 	}

// 	const total = (cartItems || []).reduce((sum, item) => {
// 		const price = Number(item?.total_price ?? 0) * (item?.count ?? 0)
// 		return sum + price
// 	}, 0)

// 	return (
// 		<div className={styles.modalOverlay}>
// 			<div className={styles.modalContent}>
// 				{isOrderConfirmed ? (
// 					<div className={styles.confirmationScreen}>
// 						<h2 className={styles.confirmationTitle}>Thank you!</h2>
// 						<p className={styles.confirmationText}>
// 							Your order has been placed.
// 						</p>
// 						<p className={styles.confirmationText}>
// 							Our managers will contact you shortly!
// 						</p>
// 						<button className={styles.toMainButton} onClick={onClose}>
// 							Home
// 						</button>
// 					</div>
// 				) : (
// 					<>
// 						<button className={styles.closeButton} onClick={onClose}>
// 							&times;
// 						</button>
// 						<div className={styles.modalBody}>
// 							<h2 className={styles.modalTitle}>
// 								Delivery address and recipient details
// 							</h2>
// 							<form onSubmit={handleSubmit}>
// 								<div className={styles.formGroup}>
// 									<label htmlFor='full_name'>First name Last name</label>
// 									<input
// 										type='text'
// 										id='full_name'
// 										name='full_name'
// 										value={formData.full_name}
// 										onChange={handleChange}
// 										required
// 									/>
// 								</div>
// 								<div className={styles.formGroup}>
// 									<label htmlFor='country_region'>Country / Region</label>
// 									<select
// 										id='country_region'
// 										name='country_region'
// 										value={formData.country_region}
// 										onChange={handleChange}
// 										required
// 									>
// 										<option value='Alberta'>Alberta</option>
// 										<option value='British Columbia'>British Columbia</option>
// 										<option value='Manitoba'>Manitoba</option>
// 										<option value='New Brunswick'>New Brunswick</option>
// 										<option value='Newfoundland and Labrador'>
// 											Newfoundland and Labrador
// 										</option>
// 										<option value='Nova Scotia'>Nova Scotia</option>
// 										<option value='Ontario'>Ontario</option>
// 										<option value='Prince Edward Island'>
// 											Prince Edward Island
// 										</option>
// 										<option value='Quebec'>Quebec</option>
// 										<option value='Saskatchewan'>Saskatchewan</option>
// 										<option value='Northwest Territories'>
// 											Northwest Territories
// 										</option>
// 										<option value='Nunavut'>Nunavut</option>
// 										<option value='Yukon'>Yukon</option>
// 									</select>
// 								</div>
// 								<div className={styles.formGroup}>
// 									<label htmlFor='address'>Delivery address</label>
// 									<input
// 										type='text'
// 										id='address'
// 										name='address'
// 										value={formData.address}
// 										onChange={handleChange}
// 										required
// 									/>
// 								</div>
// 								<div className={styles.formGroup}>
// 									<label htmlFor='phone_number'>Phone Number</label>
// 									<input
// 										type='tel'
// 										id='phone_number'
// 										name='phone_number'
// 										value={formData.phone_number}
// 										onChange={handleChange}
// 										required
// 									/>
// 								</div>
// 								<div className={styles.formGroup}>
// 									<label htmlFor='email'>Email (optional)</label>
// 									<input
// 										type='email'
// 										id='email'
// 										name='email'
// 										value={formData.email}
// 										onChange={handleChange}
// 									/>
// 								</div>
// 								<div className={styles.formGroup}>
// 									<label htmlFor='notes'>
// 										Notes regarding your order (optional)
// 									</label>
// 									<textarea
// 										id='notes'
// 										name='notes'
// 										value={formData.notes}
// 										onChange={handleChange}
// 									/>
// 								</div>

// 								<div className={styles.orderSummaryModal}>
// 									<span className={styles.summaryTotalLabel}>
// 										Total order amount
// 									</span>
// 									<span className={styles.summaryTotalValue}>
// 										{total.toFixed(2)} $
// 									</span>
// 								</div>

// 								{submitError && (
// 									<p className={styles.errorText}>{submitError}</p>
// 								)}

// 								<button
// 									type='submit'
// 									className={styles.submitButton}
// 									disabled={isSubmitting}
// 								>
// 									{isSubmitting ? 'Shipping...' : 'CONFIRM ORDER'}
// 								</button>
// 							</form>
// 						</div>
// 					</>
// 				)}
// 			</div>
// 		</div>
// 	)
// }

// export default CheckoutModal

'use client'

import { CartItem } from '@utils/types'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import styles from './cartPage.module.scss'

interface OrderData {
	full_name: string
	address: string
	phone_number: string
	email?: string
	items: {
		id: number
		product: CartItem['product']
		count: number
	}[]
	comment?: string
}

interface CheckoutModalProps {
	onClose: () => void
	cartItems: CartItem[]
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({
	onClose,
	cartItems,
}) => {
	const [formData, setFormData] = useState({
		full_name: '',
		address: '',
		phone_number: '',
		email: '',
		notes: '',
	})
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [submitError, setSubmitError] = useState<string | null>(null)
	const [isOrderConfirmed, setIsOrderConfirmed] = useState(false)

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target
		setFormData(prevData => ({
			...prevData,
			[name]: value,
		}))
	}

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault()
		setIsSubmitting(true)
		setSubmitError(null)

		const orderData: OrderData = {
			full_name: formData.full_name,
			address: formData.address,
			phone_number: formData.phone_number,
			items: cartItems.map(item => ({
				id: item.id,
				product: item.product,
				count: item.count,
			})),
			...(formData.email ? { email: formData.email } : {}),
			...(formData.notes ? { comment: formData.notes } : {}),
		}

		try {
			const response = await fetch(
				`${process.env.NEXT_PUBLIC_API}/orders/`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(orderData),
				}
			)

			if (!response.ok) {
				let errorMsg = 'An error occurred while sending your order.'
				try {
					const errorData = await response.json()
					errorMsg = errorData?.detail || errorData?.message || errorMsg
				} catch {}
				throw new Error(errorMsg)
			}

			setIsOrderConfirmed(true)
		} catch (error) {
			const errorMessage =
				error instanceof Error ? error.message : 'Unknown error.'
			console.error('Error sending order:', errorMessage)
			setSubmitError(errorMessage)
		} finally {
			setIsSubmitting(false)
		}
	}

	const total = (cartItems || []).reduce((sum, item) => {
		const price = Number(item?.total_price ?? 0) * (item?.count ?? 0)
		return sum + price
	}, 0)
	

	return (
		<div className={styles.modalOverlay}>
			<div className={styles.modalContent}>
				{isOrderConfirmed ? (
					<div className={styles.confirmationScreen}>
						<h2 className={styles.confirmationTitle}>Thank you!</h2>
						<p className={styles.confirmationText}>
							Your order has been placed.
						</p>
						<p className={styles.confirmationText}>
							Our managers will contact you shortly!
						</p>
						<button className={styles.toMainButton} onClick={onClose}>
							Home
						</button>
					</div>
				) : (
					<>
						<button className={styles.closeButton} onClick={onClose}>
							&times;
						</button>
						<div className={styles.modalBody}>
							<h2 className={styles.modalTitle}>
								Delivery address and recipient details
							</h2>
							<form onSubmit={handleSubmit}>
								<div className={styles.formGroup}>
									<label htmlFor='full_name'>First name Last name</label>
									<input
										type='text'
										id='full_name'
										name='full_name'
										value={formData.full_name}
										onChange={handleChange}
										required
									/>
								</div>
								<div className={styles.formGroup}>
									<label htmlFor='address'>Delivery address</label>
									<input
										type='text'
										id='address'
										name='address'
										value={formData.address}
										onChange={handleChange}
										required
									/>
								</div>
								<div className={styles.formGroup}>
									<label htmlFor='phone_number'>Phone Number</label>
									<input
										type='tel'
										id='phone_number'
										name='phone_number'
										value={formData.phone_number}
										onChange={handleChange}
										required
									/>
								</div>
								<div className={styles.formGroup}>
									<label htmlFor='email'>Email (optional)</label>
									<input
										type='email'
										id='email'
										name='email'
										value={formData.email}
										onChange={handleChange}
									/>
								</div>
								<div className={styles.formGroup}>
									<label htmlFor='notes'>
										Notes regarding your order (optional)
									</label>
									<textarea
										id='notes'
										name='notes'
										value={formData.notes}
										onChange={handleChange}
									/>
								</div>

								<div className={styles.orderSummaryModal}>
									<span className={styles.summaryTotalLabel}>
										Total order amount
									</span>
									<span className={styles.summaryTotalValue}>
										{total.toFixed(2)} $
									</span>
								</div>

								{submitError && (
									<p className={styles.errorText}>{submitError}</p>
								)}

								<button
									type='submit'
									className={styles.submitButton}
									disabled={isSubmitting}
								>
									{isSubmitting ? 'Shipping...' : 'CONFIRM ORDER'}
								</button>
							</form>
						</div>
					</>
				)}
			</div>
		</div>
	)
}

export default CheckoutModal
