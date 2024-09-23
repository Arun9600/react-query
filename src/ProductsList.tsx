import { useQuery } from "@tanstack/react-query";
import { Products } from "./App.type";
import { API_URL } from "./utils";
const ProductsList = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const apiURL = await fetch(`${API_URL}/products`);
      return apiURL.json();
    },
  });

  if (isPending) {
    return <div>Loading. . . </div>;
  }

  if (error) {
    return <div>Error in Fetching Data. . .</div>;
  }
  return (
    <>
      <div>
        <h1>use Query Method</h1>
        {data.map((item: Products) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </div>
    </>
  );
};

export default ProductsList;
