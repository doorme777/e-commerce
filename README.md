# Proyecto de Práctica de React
Este proyecto es una aplicación de práctica para aprender y reforzar los conceptos básicos de **React**. La aplicación es una simple tienda en línea que permite a los usuarios ver sus pedidos.

## Código
El código principal de la aplicación se encuentra en el archivo i`ndex.jsx`. Aquí se define un componente MyOrders que muestra los pedidos del usuario:
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
    </Layout>
  );
}
```

    1.Utilizamos el **Hook useContext** para acceder al contexto de ShoppingCartContext, que contiene los pedidos del usuario.

    2.El componente **Layout** es un componente de orden superior que proporciona el diseño general de la página.

    3.Mapeamos sobre el array `context.order` para generar un componente **Link** y OrdersCard para cada pedido.

    4.El componente Link de `react-router-dom` se utiliza para crear enlaces de navegación. Cada enlace lleva a una ruta única para cada pedido.

## Cómo ejecutar el proyecto
Para ejecutar este proyecto en tu máquina local, sigue estos pasos:

### Clona el repositorio en tu máquina local.
Navega hasta el directorio del proyecto.
Ejecuta `npm install` para instalar las dependencias.
Ejecuta `npm start` para iniciar el servidor de desarrollo.
Abre tu navegador y visita `http://localhost:8080`.

## Contribuir
Este es un proyecto de práctica y no está abierto a contribuciones. Sin embargo, siéntete libre de clonarlo, modificarlo y usarlo para tu propio aprendizaje.
