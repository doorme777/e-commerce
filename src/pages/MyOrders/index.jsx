import{useContext} from 'react';
import { ShoppingCartContext } from '../../Context';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import OrdersCard from '../../components/OrdersCard';

function MyOrders() {
  const context = useContext(ShoppingCartContext);
  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80'>
        <h1>My Orders</h1>
      </div>
      {
        context.order.map((order,index) => (
          <Link key={index} to={`/e-commerce/my-orders/${index}`}>
            <OrdersCard 
            key={order.date}
            totalPrice={order.totalPrice} 
            totalProducts={order.totalProducts}/>
          </Link>
        ))
      }
    </Layout>
  );
}

export default MyOrders;