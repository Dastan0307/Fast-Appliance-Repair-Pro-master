"use client";
import { createContext, useContext, useState, useEffect } from "react";

interface CartContextType {
  count: number;
  setCount: (count: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
	fetch(`${process.env.NEXT_PUBLIC_API}/cart/`, {
		method: "GET",
		credentials: "include",
		headers: {
			"Content-Type": "application/json",
			"ngrok-skip-browser-warning": "true",
		},
	})
      .then((res) => res.json())
      .then((data) => setCount(data.length));
  }, []);

  return (
    <CartContext.Provider value={{ count, setCount }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}
