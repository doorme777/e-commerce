import Layout from '../../components/Layout';
import { useContext,useRef,useState } from 'react';
import { ShoppingCartContext } from '../../Context/index.jsx';
function MyAccount() {
  const context = useContext(ShoppingCartContext);
  const [view, setView] = useState('user-info')
  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)
  const form = useRef(null)

  const editAccount = (event) => {
    event.preventDefault();
      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData);

    // Update account
    const stringifiedAccount = JSON.stringify(data)
    localStorage.setItem('account', stringifiedAccount)
    context.setUser(data)
  }

  const renderUserInfo = () => {
    return(
      <>
      <h2>{`Hola es un gusto que este por aquí  ${context.user.name ? context.user.name : null} .`}</h2>
          <p
          className='text-light text-md'
          >{`Tu correo es: ${context.user.email ? context.user.email : null}`}</p>
          <p
          className='text-light text-md'
          >{`Tu contraseña es: ${context.user.password ? context.user.password : null}`}</p>
        <button
        className='roundend-lg border border-black bg-white text-black font-semibold w-80 p-3 rounded-lg cursor-pointer focus:outline-none'
        onClick={() => setView('edit-user-info')}
        >Edit.</button>
      </>
    )
  }

  const renderEditUserInfo = () => {
    return (
      <>
        <form 
        className='flex flex-col gap-3 w-80 mx-auto'
        onSubmit={editAccount}>
          <label 
          className='text-light text-md '
          htmlFor='name'>Porfavor ingrese su nombre:</label>
          <input 
          className='rounded-lg border border-black w-80 p-3 focus:outline-none placeholder:text-gray-400'
          type='text' 
          name='name' 
          id='name' 
          placeholder='Rodrigo Perez Alcantar'/>
          <label 
          className='text-light text-md '
          htmlFor='email'>Porfavor ingrese su email:</label>
          <input 
          className='rounded-lg border border-black w-80 p-3 focus:outline-none placeholder:text-gray-400'
          type='email' 
          name='email' 
          id='email' 
          placeholder='example@gmail.com'/>
          <label 
          className='text-light text-md '
          htmlFor='password'>Porfavor ingrese una contraseña:</label>
          <input 
          className='rounded-lg border border-black w-80 p-3 focus:outline-none placeholder:text-gray-400'
          type='text' 
          name='password' 
          id='password' 
          placeholder='123231'/>
  
            <input 
            className='roundend-lg border bg-black text-white font-semibold w-80 p-3 rounded-lg cursor-pointer focus:outline-none '
            type='submit' 
            value='Sign up' 
            />
        </form>
      </>)
  }
  const renderView = () => view === 'edit-user-info' ? renderEditUserInfo() : renderUserInfo()
  return (
    <Layout>
      <h1
      className='text-4xl font-bold text-center'
      >My account</h1>
      {renderView()}
    </Layout>
  );
}

export default MyAccount;