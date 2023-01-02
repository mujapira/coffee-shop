import { createContext, FormEvent, ReactNode, useCallback, useEffect, useState } from "react";
import { api } from "../lib/axios";

export interface Coffee {
  id: number;
  title: string;
  description: string;
  tags: string[];
  price: number;
  image: string;
  quantity?: number;
}
export interface CartCoffee {
  id: number;
  price: number;
  quantity?: number;
}

interface CoffeeContextType {
  coffeeList: Coffee[];
  fetchCoffees: (query?: string) => Promise<void>;
  cartItems: CartCoffee[];
  handleItemCart: (id: number, operation: string) => void;
}

interface CoffeeProviderProps {
  children: ReactNode;
}

export const CoffeeContext = createContext<CoffeeContextType>({} as CoffeeContextType);

export function CoffeeProvider({ children }: CoffeeProviderProps) {
  const [coffeeList, setCoffeeList] = useState<Coffee[]>([]);
  const [cartItems, setCartItems] = useState<CartCoffee[]>([]);

  async function fetchCoffees(query?: string) {
    const response = await api.get("/products", {
      params: {
        _sort: "id",
        _order: "asc",
        q: query,
      },
    });

    const fetchedItems = JSON.stringify(response.data);
    localStorage.setItem("@ignite:coffee-shop-products", fetchedItems);
  }

  function getLocalCoffeeList() {
    const storageStateAsJSON = localStorage.getItem("@ignite:coffee-shop-products");
    const coffeeList = JSON.parse(storageStateAsJSON!);

    setCoffeeList(coffeeList);
  }

  function getLocalCart() {
    const storageStateAsJSON = localStorage.getItem("@ignite:coffee-shop-cart");
    if (storageStateAsJSON) {
      setCartItems(JSON.parse(storageStateAsJSON));
    } else {
      setCartItems([]);
    }
  }

  function handleItemCart(coffeeId: number, operation: string) {
    const selectedCoffee = coffeeList.find((cartItem: Coffee) => cartItem.id == coffeeId)!;
    const newCartItem: CartCoffee = {
      id: selectedCoffee.id,
      price: selectedCoffee.price,
      quantity: selectedCoffee.quantity,
    };

    if (!cartItems.some((target) => target.id === coffeeId)) {
      createItem(newCartItem);
    } else {
      updateItem(newCartItem, operation);
    }
  }

  function createItem(newCartItem: CartCoffee) {
    const cartItem: CartCoffee = {
      id: newCartItem.id,
      price: newCartItem.price,
      quantity: 1,
    };

    setCartItems([...cartItems, cartItem]);
  }

  function updateItem(newCartItem: CartCoffee, operation: string) {
    const filteredCart = cartItems.filter((cartItem) => cartItem.id !== newCartItem.id);
    const selectedCoffee = cartItems.find((cartItem) => cartItem.id == newCartItem.id)!;
    let quantity = selectedCoffee.quantity!;

    if (operation === "plus") {
      quantity++;
      const cartItem: CartCoffee = {
        id: newCartItem.id,
        price: newCartItem.price,
        quantity: quantity,
      };
      setCartItems([...filteredCart, cartItem]);
    } else {
      if (quantity > 1) {
        quantity--;
        const cartItem: CartCoffee = {
          id: newCartItem.id,
          price: newCartItem.price,
          quantity: quantity,
        };
        setCartItems([...filteredCart, cartItem]);
      } else {
        const filteredCart = cartItems.filter((cartItem) => cartItem.id !== newCartItem.id);
        console.log(`itemToRemove:${filteredCart}`);

        setCartItems([...filteredCart]);
      }
    }
  }

  useEffect(() => {
    fetchCoffees();
    getLocalCoffeeList();
    getLocalCart();
  }, []);

  useEffect(() => {
    const stateJSON = JSON.stringify(cartItems);
    localStorage.setItem("@ignite:coffee-shop-cart", stateJSON);
    console.log(`@ignite:coffee-shop-cart: ${localStorage.getItem("@ignite:coffee-shop-cart")}`);
  }, [cartItems]);

  return (
    <CoffeeContext.Provider
      value={{
        coffeeList,
        fetchCoffees,
        handleItemCart,
        cartItems,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
}
