import Layout from "../../components/Layout";

function SignUp() {
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
        htmlFor="name">Porfavor ingrese su nombre:</label>
        <input 
        className="rounded-lg border border-black w-80 p-3 focus:outline-none placeholder:text-gray-400"
        type="text" 
        name="" 
        id="name" 
        placeholder="123231"/>
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
        
        <input 
        className="roundend-lg border bg-black text-white font-semibold w-80 p-3 rounded-lg cursor-pointer focus:outline-none"
        type="submit" 
        value="Sign up" />

      </form>
    </Layout>
  );
}

export default SignUp;