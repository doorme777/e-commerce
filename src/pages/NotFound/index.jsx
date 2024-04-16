import Layout from '../../components/Layout';
import notFoundedImage from '../../assets/technology_code_opensource-2.svg';

function NotFound() {
  return (
    <Layout>
      <h1 className='text-xl text-black text-center m-4'>Disculpe ese endpoint no existe en esta pagina</h1>
      <img src={notFoundedImage} alt='Not found' className='w-96 mx-auto align-middle'/>
    </Layout>
  );
}

export default NotFound;