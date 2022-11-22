import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import { api } from "../lib/axios";

interface Coffee {
  id: number;
  title: string;
  description: string;
  tags: string[];
  price: number;
  image: string;
}
interface CartCoffee {
  coffee: Coffee;
}
interface CoffeeContextType {
  coffeeList: Coffee[];
  fetchCoffees: (query?: string) => Promise<void>;
  cartItems: CartCoffee[];
  setCartItems: React.Dispatch<React.SetStateAction<CartCoffee[]>>;
  addItem: (object: Coffee) => void;
  removeItem: (id: number) => void;
}

interface CoffeeProviderProps {
  children: ReactNode;
}

export const CoffeeContext = createContext<CoffeeContextType>(
  {} as CoffeeContextType
);

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
    setCoffeeList(response.data);

    // console.log('fetching coffees')
    // console.log(response.data)
    // console.log('fetching coffees done')
  }

  async function fetchCart(query?: string) {
    const response = await api.get("/cart", {
      params: {
        _sort: "number",
        _order: "asc",
        q: query,
      },
    });
    setCartItems(response.data);

    // console.log('fetching cart')
    // console.log(response.data)
    // console.log('fetching cart done')
  }

  const addItem = useCallback(async (data: Coffee) => {
    const response = await api.post("/cart", {
      coffee: data,
    });

    const item = response.data;
    
    setCartItems(cartItems => [...cartItems, item]);
  }, []);

  const removeItem = useCallback(async (id: number) => {
    const cartWithoutDeletedOne = cartItems.filter((cartItem) => {
      return cartItem.coffee.id !== id;
    });

    const response = await api.delete(`/cart/${id}`);
    setCartItems(cartWithoutDeletedOne);
    // console.log('removing item')

  }, []);


  useEffect(() => {
    // console.log('useEffect cartItems')
  }, [cartItems]);

  useEffect(() => {
    fetchCoffees();
    fetchCart();

    // console.log('useEffect fetch')
  }, []);
  
  return (
    <CoffeeContext.Provider
      value={{
        coffeeList,
        fetchCoffees,
        cartItems,
        setCartItems,
        addItem,
        removeItem,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
}
