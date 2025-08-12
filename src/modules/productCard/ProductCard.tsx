'use client'

import { addCartItem } from '@utils/cartApi'
import Image from 'next/image'
import Link from 'next/link'
import styles from './style.module.scss'

interface Props {
  id: number;            
  title: string;          
  image: string;           
  price: number;          
  is_available: boolean;
  description: string;    
}
export default function ProductCard({
	id,
	title,
	description,
	price,
	is_available: available,
	image,
}: Props) {
	const handleAddToCart = async () => {
		try {
			await addCartItem(id, 1)
			alert('Item added to cart')
		} catch (error) {
			console.error('Error adding product:', error)
		}
	}

	return (
		<div className={styles.card}>
			<Link
				href={`/household-chemicals/${id}`}
			>
				<Image src={image} alt={title} className={styles.image} width={300} height={300} />
			</Link>

			<h3 className={styles.name}>{title}</h3>
			<h4 className={styles.description}>{description}</h4>

			<span className={available ? styles.available : styles.notAvailable}>
				{available ? 'In stock' : 'Not available'}
			</span>

			<p className={styles.price}>{price} $</p>

			<button type='button' className={styles.btn} onClick={handleAddToCart}>
				Add to cart
			</button>
		</div>
	)
}
