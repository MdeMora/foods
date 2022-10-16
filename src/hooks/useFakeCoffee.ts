import { CoffeeEnum } from "constants/example";
import useSWR from "swr";
import fetcher from "utils/fetcher";

interface Coffee {
  title: string;
  description: string;
  image: string;
  id: string;
  ingredients: string[];
}

interface useCoffeeInterface {
  data: Coffee[];
  isLoading: boolean;
  isError: boolean;
}

const useFakeCoffee = (type: CoffeeEnum.HOT | CoffeeEnum.ICED): useCoffeeInterface => {
  const { data, error } = useSWR<Coffee[]>(`https://api.sampleapis.com/coffee/${type}`, fetcher);

  return {
    data: data || [],
    isLoading: !error && !data,
    isError: error,
  };
};

export default useFakeCoffee;
