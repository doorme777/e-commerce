# Prueba Técnica de React
Este proyecto es una prueba técnica diseñada para practicar y reforzar los conceptos básicos de **React**. La aplicación es una simple tienda en línea que permite a los usuarios ver sus pedidos.

## Deploy de la prueba tecnica.
Link: https://doorme777.github.io/e-commerce/ 

## Responsividad
La aplicación ha sido diseñada con un enfoque en la responsividad. Se ha optimizado para garantizar una experiencia de usuario fluida en una variedad de dispositivos y tamaños de pantalla.

## Enfoque en el inicio de sesión
El principal enfoque de este proyecto fue el proceso de inicio de sesión. Se ha implementado un sistema de inicio de sesión robusto y seguro para garantizar que solo los usuarios autorizados puedan acceder a sus pedidos.

## Código
El código principal de la aplicación se encuentra en el archivo `index.jsx`. Aquí se define un componente `MyOrders` que muestra los pedidos del usuario:

```js
    function MyOrders() {
  const context = useContext(ShoppingCartContext); // 1

  return (
    <Layout> // 2
      <div className='flex items-center justify-center relative w-80'>
        <h1>My Orders</h1>
      </div>
      {
        context.order.map((order,index) => ( // 3
          <Link key={index} to={`/my-orders/${index}`}> // 4
            <OrdersCard 
            key={order.date}
            totalPrice={order.totalPrice} 
            totalProducts={order.totalProducts}/>
          </Link>
        ))
      }
```