
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context/index.jsx';
import Layout from '../../components/Layout';
import Card from '../../components/Card';
import ProductDetail from '../../components/ProductDetail/index.jsx';
import NotFounded from '../../assets/read_tap_smartphone_man.svg';

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
          <figure>
            <img src={NotFounded} alt='Not Founded' className='w-80 mx-auto' />
            <figcaption className='text-sm font-light text-center'>We haven´t that :(</figcaption>
          </figure>
        )
      }
  }

  return (
    <Layout>
      <input type='text'
        placeholder='Search a product...'
        name=''
        id=''
        className='rounded-lg border border-black w-full max-w-[320px] p-4 mb-4 focus:outline-none'
        onChange={(event) => {
           context.setSearchByTitle(event.target.value)}}
      />
      <div className='flex flex-wrap justify-center items-center gap-4 w-full max-w-[1024px]'>
      {context.items && renderView()}
      </div>
      <ProductDetail />
    </Layout>
  );
}

export { Home };
