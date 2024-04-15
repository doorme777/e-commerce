import Layout from "../../components/Layout";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/index.jsx";
function MyAccount() {
  const context = useContext(ShoppingCartContext);
  return (
    <Layout>
      <h1>{`Hola es un ${context.user.name ? context.user.name : null} gusto que este por aquí.`}</h1>
      <p
      className="text-light text-md"
      >{`Tu correo es: ${context.user.email ? context.user.email : null}`}</p>
      <p
      className="text-light text-md"
      >{`Tu contraseña es: ${context.user.password ? context.user.password : null}`}</p>
      <button
      className="roundend-lg border border-black bg-white text-black font-semibold w-80 p-3 rounded-lg cursor-pointer focus:outline-none"
      >Edit.</button>
    </Layout>
  );
}

export default MyAccount;