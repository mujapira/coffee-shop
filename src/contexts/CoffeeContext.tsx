import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Coffee {
  id: number;
  title: string;
  description: string;
  tags: string[];
  price: number;
  image: string;
}

interface CoffeeContextType {
  coffeeList: Coffee[];
  fetchCoffees: (query?: string) => Promise<void>;
  cartItems: Coffee[];
  setCartItems: React.Dispatch<React.SetStateAction<Coffee[]>>;
  addItem: (object: Coffee) => void;
}

interface CoffeeProviderProps {
  children: ReactNode;
}

export const CoffeeContext = createContext<CoffeeContextType>(
  {} as CoffeeContextType
);

export function CoffeeProvider({ children }: CoffeeProviderProps) {
  const [coffeeList, setCoffeeList] = useState<Coffee[]>([]);

  const [cartItems, setCartItems] = useState<Coffee[]>([]);

  async function fetchCoffees(query?: string) {
    const response = await api.get("/products", {
      params: {
        _sort: "id",
        _order: "asc",
        q: query,
      },
    });
    setCoffeeList(response.data);
  }

  function fetchCart() {
    const storageStateAsJSON = localStorage.getItem(
      "@ignite-coffee-shop:cart-state-1.0.0"
    );

    if (storageStateAsJSON != null) {
      setCartItems(JSON.parse(storageStateAsJSON!));
    }
  }

  function addItem(object: Coffee) {
    const oldCart = [...cartItems];
    const newCart = [...oldCart, object];
    const stateJSON = JSON.stringify(newCart);

    localStorage.setItem("@ignite-coffee-shop:cart-state-1.0.0", stateJSON);

    setCartItems(newCart);
  }

  useEffect(() => {}, [cartItems]);

  useEffect(() => {
    fetchCoffees();
    fetchCart();
  }, []);

  console.log(localStorage.getItem("@ignite-coffee-shop:cart-state-1.0.0"));
  console.log(cartItems);
  return (
    <CoffeeContext.Provider
      value={{
        coffeeList,
        fetchCoffees,
        cartItems,
        setCartItems,
        addItem,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
}
