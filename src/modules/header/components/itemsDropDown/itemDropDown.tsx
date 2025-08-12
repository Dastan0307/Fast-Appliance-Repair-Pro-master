"use client"

import { FC } from "react"
import classes from './itemsDropDown.module.scss'
import { Typography } from "@typography/typography"
import Link from "next/link"

interface Slug {
  name: string;
  slug: string;
}

interface Props {
    brands: Slug[];
    route: string;
}

const ItemDropdown: FC<Props> = (props) => {
    const { brands, route = '' } = props
    
    const getCleanPath = (slug: string) => {
        return `/${route}/${slug}`.replace(/\/+/g, '/')
    }

    return (
        <>
            {
                brands.map((item, idx) => (
                    <Link href={getCleanPath(item.slug)} key={item.slug + idx}>
                        <li className={classes.dropdownLink}>
                            <Typography variant="h5" weight="regular">
                                {item.name}
                            </Typography>
                        </li>
                    </Link>
                ))
            }
        </>
    )
}

export default ItemDropdown