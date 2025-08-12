import { StaticImageData } from "next/image";

export interface Location {
  position: {
    lat: number;
    lng: number;
  };
  title: string;
  placeId: string;
}

export interface IWorks {
  id: number;
  frontImage: StaticImageData;
  description: string;
  modalInfo: {
    video: string;
    title: string;
    modalDescription: string;
    images: StaticImageData[];
  };
}

export interface CartProduct {
  title: string
  price: string
  image: string
  is_available: boolean
}

export interface CartItem {
  title: string
  id: number
  product: CartProduct
  description: string
  count: number
  total_price: string
}