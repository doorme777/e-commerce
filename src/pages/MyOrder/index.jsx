import { useContext } from "react";
import { ShoppingCartContext } from '../../components/Context'
import OrderCard from "../../components/OrderCard";
import Layout from "../../components/Layout";

function MyOrder() {
  const context = useContext(ShoppingCartContext);

  return (
    <Layout>
      <div className="flex flex-col w-80">
        {
          context.order?.slice(-1)[0].products.map((product) => (
              <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.images?.[0]}
              price={product.price}
              handleDeleteProducts={context.handleDeleteProducts} 
              />
          ))
        }
      </div>
    </Layout>
  );
}

export default MyOrder;