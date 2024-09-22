import "./App.css";
import { useQuery } from "@tanstack/react-query";
import { Users } from "./App.type";

function App() {
  const { isPending, error, data } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const apiURL = await fetch("https://jsonplaceholder.typicode.com/users");
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
      <div className="App">
        {data.map((item: Users) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </div>
    </>
  );
}

export default App;
