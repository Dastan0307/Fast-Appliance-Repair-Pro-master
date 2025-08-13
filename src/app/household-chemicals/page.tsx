'use client'

import ProductCard from '@modules/productCard/ProductCard'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { MultiContainer } from 'src/ui/multiContainer/multiContainer'
import styles from './style.module.scss'

interface Product {
	id: number
	title: string
	image: string
	price: number
	is_available: boolean
	description: string
}

const api = process.env.NEXT_PUBLIC_API

export default function HouseholdChemicals() {
	const [productsData, setProductsData] = useState<Product[]>([])

	useEffect(() => {
		const getProductsFromServer = async () => {
			try {
				const response = await fetch(`${api}/household_chemicals/`, {
					method: 'GET',
					credentials: 'include',
					headers: {
						'Content-Type': 'application/json',
						'ngrok-skip-browser-warning': 'true',
					},
				})

				if (!response.ok) {
					throw new Error('Network response was not ok')
				}

				const data = await response.json()

				// if (!data || !Array.isArray(data.results)) {
				// 	throw new Error('Invalid data format')
				// }
				console.log(data)

				setProductsData(data.results)
			} catch (error) {
				console.error('Error receiving data from API:', error)
			}
		}

		getProductsFromServer()
	}, [])

	return (
		<div className={styles.HouseholdChemicals}>
			<MultiContainer>
				<div className={styles.breadcrumbs}>
					<span>
						<Link href={'/'}>Home</Link>
					</span>
					<svg
						width='62'
						height='12'
						viewBox='0 0 62 12'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M0.666667 6C0.666667 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666667 0.666667 3.05448 0.666667 6ZM50.6667 6C50.6667 8.94552 53.0545 11.3333 56 11.3333C58.9455 11.3333 61.3333 8.94552 61.3333 6C61.3333 3.05448 58.9455 0.666667 56 0.666667C53.0545 0.666667 50.6667 3.05448 50.6667 6ZM6 6V7L8.08333 7V6V5H6V6ZM12.25 6V7L16.4167 7V6V5L12.25 5V6ZM20.5833 6V7L24.75 7V6V5L20.5833 5V6ZM28.9167 6V7L33.0833 7V6V5L28.9167 5V6ZM37.25 6V7L41.4167 7V6V5L37.25 5V6ZM45.5833 6V7L49.75 7V6V5L45.5833 5V6ZM53.9167 6V7L56 7V6V5L53.9167 5V6Z'
							fill='#4A8DFF'
						/>
					</svg>

					<span>Household chemicals</span>
				</div>

				{productsData?.length === 0 ? (
					<div className={styles.empty}>
						<h2>The catalog is currently empty.</h2>
						<p>Check back later — we will be adding new items soon.</p>
					</div>
				) : (
					<div className={styles.productsData}>
						{productsData?.map(product => (
							<ProductCard key={product.id} {...product} />
						))}
					</div>
				)}
			</MultiContainer>
		</div>
	)
}
