
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/index.jsx";
import Layout from "../../components/Layout";
import Card from "../../components/Card";
import ProductDetail from "../../components/ProductDetail/index.jsx";

function Home() {
  const context = useContext(ShoppingCartContext);

  const renderView = () => {
      if (context.filteredItem?.length > 0) {
        return (
          context.filteredItem?.map(item => (
            <Card key={item.id} data={item} />
          ))
        )
      } else {
        return (
          <div>We don't have anything :(</div>
        )
      }
  }

  return (
    <Layout>
      <input type="text"
        placeholder="Search a product..."
        name=""
        id=""
        className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
        onChange={(event) => {
          console.log(event.target.value);
           context.setSearchByTitle(event.target.value)}}
      />
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
      {context.items && renderView()}
      </div>
      <ProductDetail />
    </Layout>
  );
}

export { Home };
