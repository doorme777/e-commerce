import Layout from "../../components/Layout";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80'>
        <h1 
        className='text-4xl font-bold text-center'
        >Welcome</h1>
      </div>
      <form 
      className="flex flex-col gap-3 w-80 mx-auto"
      action="post">
        <label 
        className="text-light text-md "
        htmlFor="email">Porfavor ingrese su email:</label>
        <input 
        className="rounded-lg border border-black w-80 p-3 focus:outline-none placeholder:text-gray-400"
        type="email" 
        name="" 
        id="email" 
        placeholder="example@gmail.com"/>
        <label 
        className="text-light text-md "
        htmlFor="password">Porfavor ingrese una contraseña:</label>
        <input 
        className="rounded-lg border border-black w-80 p-3 focus:outline-none placeholder:text-gray-400"
        type="text" 
        name="" 
        id="password" 
        placeholder="123231"/>
        <p
          className="text-xs"
        >Si a olvidado su contraseña. Porfavor entrar <a href="#"
        className=" text-black font-semibold underline"
        >aquí</a> para recuperar su cuenta.</p>
        <input 
        className="roundend-lg bg-black text-white font-semibold w-80 p-3 rounded-lg cursor-pointer focus:outline-none"
        type="submit" 
        value="Login" />

        <Link to='/sign-up'>
          <button
          className="roundend-lg border border-black bg-white text-black font-semibold w-80 p-3 rounded-lg cursor-pointer focus:outline-none"
          >Sign up</button>
        </Link>
      </form>
    </Layout>
  );
}

export default SignIn;