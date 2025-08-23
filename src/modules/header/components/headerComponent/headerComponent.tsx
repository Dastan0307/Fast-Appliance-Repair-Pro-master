'use client'

import Logo from '@assets/icons/HeaderLogo.svg'
import {
	getHeaderAreas,
	getHeaderBrands,
	getHeaderInstallation,
	getHeaderRepair,
} from '@modules/aboutBlock/model/aboutBlockModel'
import Form from '@modules/sendForm/form'
import { Typography } from '@typography/typography'
import { navItems } from '@utils/constants'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useCart } from 'src/app/cart/CartContext'
import { Modal } from 'src/ui/modal/modal'
import HeaderNav from '../headerNav/headerNav'
import classes from './headerComponent.module.scss'

interface Slug {
	name: string
	slug: string
}

interface Data {
	brands: Slug[]
	installs: Slug[]
	repair: Slug[]
	areas: Slug[]
}

const HeaderComponent = () => {
	const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [data, setData] = useState<Data>({
		brands: [],
		installs: [],
		repair: [],
		areas: [],
	})

	const { count } = useCart()
	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		setIsMounted(true)
		const fetchHeaderData = async () => {
			const newData: Data = { brands: [], installs: [], repair: [], areas: [] }

			try {
				const brands = await getHeaderBrands()
				newData.brands = brands || []
			} catch (error) {
				console.error('Failed to fetch brands:', error)
			}

			try {
				const installs = await getHeaderInstallation()
				newData.installs = installs || []
			} catch (error) {
				console.error('Failed to fetch installations:', error)
			}

			try {
				const repair = await getHeaderRepair()
				newData.repair = repair || []
			} catch (error) {
				console.error('Failed to fetch repairs:', error)
			}

			try {
				const areas = await getHeaderAreas()
				newData.areas = areas || []
			} catch (error) {
				console.error('Failed to fetch areas:', error)
			}

			setData(newData)
		}

		fetchHeaderData()
		return () => {
			setData({ brands: [], installs: [], repair: [], areas: [] })
		}
	}, [])

	return (
		<header className={classes.header}>
			<div className={classes.headerContainer}>
				<div className={classes.headerContent}>
					<Link href='/' className={classes.logo}>
						<Image src={Logo} alt='Logo' />
					</Link>
					<nav className={classes.nav}>
						<ul className={classes.navList}>
							<HeaderNav
								navItems={navItems}
								activeDropdown={activeDropdown}
								setActiveDropdown={setActiveDropdown}
								data={data}
							/>
						</ul>
					</nav>
					<button
						className={classes.contactButton}
						onClick={() => setIsMenuOpen(true)}
					>
						<Typography variant='h5' weight='regular'>
							Contact us
						</Typography>
					</button>
					<Link href={'/cart'} className={classes.cart}>
						<svg
							width='33'
							height='32'
							viewBox='0 0 48 47'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M47.4892 12.5684C47.3517 12.373 47.1692 12.2135 46.9571 12.1034C46.745 11.9932 46.5096 11.9357 46.2706 11.9355H14.4361L12.0263 3.6255C11.0813 0.35325 8.8358 0 7.9148 0H1.48955C0.666 0 0 0.66675 0 1.4895C0 2.31225 0.66675 2.97895 1.48950 2.97895H7.914C8.11725 2.97895 8.7375 2.97895 9.16055 4.4407L17.4503 34.9065C17.6303 35.5492 18.216 35.9932 18.8843 35.9932H39.1327C39.7613 35.9932 40.3223 35.5994 40.5345 35.0077L47.6715 13.9289C47.8358 13.4722 47.7675 12.9637 47.4893 12.5684H47.4892ZM38.0845 33.015H20.0148L15.2733 14.9153H44.1528L38.0845 33.015ZM35.1303 39.012C33.0588 39.012 31.3803 40.6905 31.3803 42.762C31.3803 44.8335 33.0588 46.512 35.1303 46.512C37.2018 46.512 38.8803 44.8335 38.8803 42.762C38.8803 40.6905 37.2018 39.012 35.1303 39.012ZM21.6303 39.012C19.5588 39.012 17.8803 40.6905 17.8803 42.762C17.8803 44.8335 19.5588 46.512 21.6303 46.512C23.7018 46.512 25.3803 44.8335 25.3803 42.762C25.3803 40.6905 23.7018 39.012 21.6303 39.012Z'
								fill='white'
							/>
						</svg>
						{isMounted && count > 0 && <span>{count}</span>}
					</Link>
					{isMenuOpen && (
						<Modal onClose={() => setIsMenuOpen(false)} isOpen={isMenuOpen}>
							<Form isModal={true} />
						</Modal>
					)}
				</div>
			</div>
		</header>
	)
}

export default HeaderComponent
