import { NavItem } from "@modules/header/types/types";
import instagramFooterLogo from "@assets/icons/InstagramFooterIcon.svg";
import facebookFooterLogo from "@assets/icons/facebookFooterIcon.svg";
import youtubeFooterLogo from "@assets/icons/youtubeFooterIcon.svg";
import { footerDay, footerLink } from "@modules/footer/types/types";
import SamsungIcon from "@assets/icons/samsungIcon.svg";
import AerospaceIcon from "@assets/icons/aerospaceIcon.svg";
import IconO from "@assets/icons/HeaderLogo.svg";

export const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

//HEADER LINKS
export const navItems: NavItem[] = [
  {
    label: "Appliance repair",
    dropdown: [],
  },
  {
    label: "Appliance install",
    dropdown: [],
  },
  {
    label: "About us",
    dropdown: [
      { label: "About of company", href: "/about" },
      { label: "Our works", href: "/about/our-works" },
    ],
  },
  {
    label: "Service areas",
    dropdown: [],
  },
  {
    label: "Brands",
    dropdown: [],
  },
  { label: "Blog", href: "/blog" },
  { label: "Job offer", href: "/vacancies" },
];

//FOOTER CONSTANTS
export const aboutFooter = [
  {
    title: "Terms and conditions",
    href: "/warranty-and-privacy-policy",
  },
  {
    title: "Vacancies",
    href: "/vacancies",
  },
  {
    title: "Google maps",
    href: "https://maps.app.goo.gl/E1m7dt8Ja8B2sV6Q9?g_st=ipc",
  },
];

export const footerLinks: footerLink[] = [
  { label: "Warranties", href: "/warranty-and-privacy-policy" },
  { label: "About us", href: "/about" },
  { label: "Service areas", href: "/service-areas" },
  { label: "Brands", href: "/brands" },
  { label: "Blog", href: "/blog" },
  { label: "Job offer", href: "/vacancies" },
];

export const footerLinkDays: footerDay[] = [
  { day: "Monday", time: "8:30 - 21:00" },
  { day: "Tuesday", time: "8:30 - 21:00" },
  { day: "Wednesday", time: "8:30 - 21:00" },
  { day: "Thursday", time: "8:30 - 21:00" },
  { day: "Friday", time: "8:30 - 21:00" },
  { day: "Saturday", time: "8:30 - 21:00" },
  { day: "Sunday", time: "day off" },
];

export const footerSocials = [
  {
    href: "https://www.facebook.com/share/1Aw1s8ba5j/?mibextid=wwXIfr",
    icon: facebookFooterLogo,
  },
  {
    href: "https://www.instagram.com/fastrepairpro?igsh=MTVxZDJ0ZWdvZmJydg==",
    icon: instagramFooterLogo,
  },
  {
    href: "https://youtube.com/@fastrepairpro?si=VLTuDZobX49yI8zz",
    icon: youtubeFooterLogo,
  },
];

//questions
export const questionsData = [
  {
    question:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quidem laborum itaque soluta Architecto quidem laborum itaque soluta Architecto quidem laborum itaque soluta Architecto quidem laborum itaque soluta Architecto quidem laborum itaque soluta ",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quidem laborum itaque soluta at obcaecati aut modi explicabo cum voluptatem? Quo libero fuga ullam ratione iusto id aliquid similique pariatur quod veritatis voluptas, debitis nemo omnis possimus a harum voluptate optio, dolore dolorum. Assumenda ut reprehenderit eligendi rerum ex consequatur nam harum, obcaecati maxime. Minus, dicta! Architecto enim quisquam id pariatur, est corporis voluptas beatae numquam eaque, facilis magnam maxime tempore culpa at quibusdam odio molestiae! Ullam voluptas doloribus nam voluptatum eveniet aliquid esse soluta, id consequatur, ratione vitae similique ut libero facilis neque deleniti error illo dolorem? Quas, nisi.",
  },
  { question: "Раздел 2", answer: "Содержимое второго раздела." },
  { question: "Раздел 3", answer: "Содержимое третьего раздела." },
];

export const images = [
  { href: "samsung", image: SamsungIcon },
  { href: "armani", image: SamsungIcon },
  { href: "chanel", image: AerospaceIcon },
  { href: "gucci", image: AerospaceIcon },
  { href: "prada", image: AerospaceIcon },
  { href: "lg", image: IconO },
  { href: "sony", image: IconO },
  { href: "aerospace", image: IconO },
];

export const salesData = [
  {
    title:
      "Скидка 15% на ремонт холодильников SamsungСкидка 15% на ремонт холодильников Samsung Скидка 15% на ремонт холодильников Samsung Скидка 15% на ремонт холодильников Samsung",
    description:
      "Скидка 15% на ремонт холодильников SamsungСкидка 15% на ремонт холодильников Samsung Скидка 15% на ремонт холодильников Samsung Скидка 15% на ремонт холодильников Samsung Скидка 15% на ремонт холодильников SamsungСкидка 15% на ремонт холодильников Samsung Скидка 15% на ремонт холодильников Samsung Скидка 15% на ремонт холодильников Samsung",
    date: "до 30 июня",
  },
  {
    title: "Скидка 15% на ремонт холодильников Samsung",
    description: "Скидка при заказе онлайн.",
    date: "до 30 июня",
  },
  {
    title: "Скидка 15% на ремонт холодильников Samsung",
    description: "Скидка при заказе онлайн.",
    date: "до 30 июня",
  },
  {
    title: "Скидка 15% на ремонт холодильников Samsung",
    description: "Скидка при заказе онлайн.",
    date: "до 30 июня",
  },
  {
    title: "Скидка 15% на ремонт холодильников Samsung",
    description: "Скидка при заказе онлайн.",
    date: "до 30 июня",
  },
  {
    title: "Скидка 15% на ремонт холодильников Samsung",
    description: "Скидка при заказе онлайн.",
    date: "до 30 июня",
  },
];

//Markies

export const markies = [
  { title: "Whirlpool", href: "#" },
  { title: "Kenmore", href: "#" },
  { title: "KitchenAid", href: "#" },
  { title: "Wolf Sub-Zero", href: "#" },
  { title: "Maytag", href: "#" },
  { title: "Sears", href: "#" },
  { title: "GE", href: "#" },
  { title: "Bosch", href: "#" },
  { title: "LG", href: "#" },
  { title: "Samsung", href: "#" },
  { title: "etc.", href: "#" },
];
