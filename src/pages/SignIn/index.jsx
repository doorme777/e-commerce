import { Link, Navigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { ShoppingCartContext } from '../../Context/index.jsx';
import Layout from '../../components/Layout';

function SignIn() {
  const context = useContext(ShoppingCartContext);
  const [view, setView] = useState('user-info')
  // Account
  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)
  // Has an account
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
  const noAccountInLocalState = context.user ? Object.keys(context.user).length === 0 : true
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState

  const handleSignIn = () => {
    const stringifiedSignOut = JSON.stringify(false)
    localStorage.setItem('sign-out', stringifiedSignOut)
    context.setIsLogged(false)
    // Redirect
    return <Navigate replace to={'/'} />
  }

  const renderLogIn = () => {
    return (
      <>
      <div
      className='flex flex-col gap-3 w-80 mx-auto'
      >
       <p
        className='text-light text-md'
        >{`Tu correo es: ${context.user.email ? context.user.email : ''}`}</p>
        <p
        className='text-light text-md'
        >{`Tu contraseña es: ${context.user.password ? context.user.password : ''}`}</p>

        <Link
        to='/'>
          <button
          className='roundend-lg bg-black text-white font-semibold w-80 p-3 rounded-lg cursor-pointer focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed'
          value='Login'
          onClick={() => handleSignIn()}
          disabled={!hasUserAnAccount}
          >Log in</button>
        </Link>
        
        <p
          className='text-xs'
        >Si a olvidado su contraseña. Porfavor entrar <a href='#'
        className=' text-black font-semibold underline'
        >aquí</a> para recuperar su cuenta.</p>

        <button
        className='roundend-lg border border-black bg-white text-black font-semibold w-80 p-3 rounded-lg cursor-pointer focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed'
        onClick={() => setView('create-user-info')}
        disabled={hasUserAnAccount}
        >
          Sign up.
        </button>
      </div>
        
      </>
    )
  }

  const renderCreateUserInfo = () => {
    return (
    <>
      <form 
      className='flex flex-col gap-3 w-80 mx-auto'
      onSubmit={context.handleSubmit}>
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

  const renderView = () => view === 'create-user-info' ? renderCreateUserInfo() : renderLogIn()

  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80'>
        <h1 
        className='text-4xl font-bold text-center'
        >Welcome</h1>
      </div>
      {renderView()}
    </Layout>
  );
}

export default SignIn;