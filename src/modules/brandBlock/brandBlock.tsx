// "use client";
// import BrandCard from "src/ui/brandCard/brandCard";
// import { Carousel } from "src/ui/rotatingCarusel/carusel/carousel";
// import classes from "./brandBlock.module.scss";
// import { getHeaderBrands } from "@modules/aboutBlock/model/aboutBlockModel";
// import { useEffect, useState } from "react";

// interface Brand {
//   logo: string;
//   slug: string;
// }
// const BrandBlock = () => {
//   const [images, setImages] = useState<Brand[]>([]);
//   useEffect(() => {
//     const fetchHeaderData = async () => {
//       try {
//         const response = await getHeaderBrands();
//         setImages(response);
//       } catch (error) {
//         console.error("Failed to fetch header data:", error);
//       }
//     };
//     fetchHeaderData();
//     return () => {
//       setImages([]);
//     };
//   }, []);
//   return (
//     <section className={classes.brandBlock}>
//       <Carousel
//         items={images}
//         direction="right"
//         speed={200}
//         renderItem={(item: Brand) => (
//           <BrandCard logo={item.logo} href={item.slug} />
//         )}
//       />
//       <Carousel
//         items={images}
//         direction="left"
//         speed={200}
//         renderItem={(item: Brand) => (
//           <BrandCard logo={item.logo} href={item.slug} />
//         )}
//       />
//       <Carousel
//         items={images}
//         direction="right"
//         speed={200}
//         renderItem={(item: Brand) => (
//           <BrandCard logo={item.logo} href={item.slug} />
//         )}
//       />
//     </section>
//   );
// };

// export default BrandBlock;

'use client'
import { getHeaderBrands } from '@modules/aboutBlock/model/aboutBlockModel'
import { useEffect, useState } from 'react'
import BrandCard from 'src/ui/brandCard/brandCard'
import { Carousel } from 'src/ui/rotatingCarusel/carusel/carousel'
import classes from './brandBlock.module.scss'

interface Brand {
	logo: string
	slug: string
}

const BrandBlock = () => {
	const [images, setImages] = useState<Brand[]>([])

	useEffect(() => {
		const fetchHeaderData = async () => {
			try {
				const response = await getHeaderBrands()

				if (!Array.isArray(response)) {
					console.log('getHeaderBrands() вернул не массив:', response)
					return 
				}
				setImages(response)
			} catch (error) {
				console.error('Failed to fetch header data:', error)
				setImages([]) // fallback
			}
		}

		fetchHeaderData()
	}, [])

	if (images.length === 0) {
		return (
			<section className={classes.brandBlock}>
				Нет брендов для отображения
			</section>
		)
	}

	return (
		<section className={classes.brandBlock}>
			<Carousel
				items={images}
				direction='right'
				speed={200}
				renderItem={(item: Brand) => (
					<BrandCard logo={item.logo} href={item.slug} />
				)}
			/>
			<Carousel
				items={images}
				direction='left'
				speed={200}
				renderItem={(item: Brand) => (
					<BrandCard logo={item.logo} href={item.slug} />
				)}
			/>
			<Carousel
				items={images}
				direction='right'
				speed={200}
				renderItem={(item: Brand) => (
					<BrandCard logo={item.logo} href={item.slug} />
				)}
			/>
		</section>
	)
}

export default BrandBlock
