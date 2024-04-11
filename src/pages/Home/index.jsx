import React from "react";
import Layout from "../../components/Layout";
import Card from "../../components/Card"

function Home() {
  const [item, setItem] = React.useState(null); // 1

  React.useEffect(() => { // 2
    const fetchData = async () => { // 3
      const response = await fetch('https://api.escuelajs.co/api/v1/products/', {
        headers: {
          "Content-Type": "application/json",
        }
      })
      const data = await response.json(); // 4
      setItem(data); // 5
    }
    fetchData(); // 6
  },[])

  return (
    <Layout>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
      {item?.map((e) => { // 7
      console.log(e)
        return <Card 
        key={e.id}
        data={e}
        />;
      })}
      </div>
    </Layout>
  );
}

export {Home};