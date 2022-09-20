import {
  createContext,
  ReactNode,
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
}

interface CoffeeContextType {
  coffeeList: Coffee[];
  fetchCoffees: (query?: string) => Promise<void>;
}

interface CoffeeProviderProps {
  children: ReactNode;
}

export const CoffeeContext = createContext<CoffeeContextType>(
  {} as CoffeeContextType
);

export function CoffeeProvider({ children }: CoffeeProviderProps) {
  const [coffeeList, setCoffeeList] = useState<Coffee[]>([]);

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

  useEffect(() => {
    fetchCoffees();
  }, []);

  return (
    <CoffeeContext.Provider
      value={{
        coffeeList,
        fetchCoffees,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
}
