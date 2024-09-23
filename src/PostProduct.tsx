import { useMutation } from "@tanstack/react-query";
import { API_URL } from "./utils";
import { PostProduct } from "./App.type";
const PostProducts = () => {
  const { mutate } = useMutation({
    mutationFn: async (product: PostProduct) =>
      fetch(`${API_URL}/products`, {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json()),
  });

  const submitClick = () => {
    const sumbitData: PostProduct = {
      title: "Test",
      price: 40.5,
      description: "test",
      image: "test",
      category: "test",
    };
    mutate(sumbitData);
  };

  return (
    <>
      <h1>Use Mutation</h1>
      <button onClick={submitClick}>Add Product</button>
    </>
  );
};

export default PostProducts;
