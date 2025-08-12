import Image from "next/image";
import classes from "./brandCard.module.scss";
import Link from "next/link";

const BrandCard = ({ logo, href, isBrandPage}: { logo: string; href?: string, isBrandPage?: boolean }) => {
  return (
    <Link href={`/brands/${href}`} >
      <div className={isBrandPage? classes.brandCardMobile : classes.brandCardImage }>
        <Image src={logo} alt="alt" 
        width={isBrandPage ? 100 : 200} 
        height={isBrandPage ? 50: 100} />
      </div>
    </Link>
  );
};

export default BrandCard;
