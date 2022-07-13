//Componente de orden superior porque va a envolver toda la app
import React, { createContext, useState } from 'react'

export const Shop = createContext();

const ShopProvider = ({children}) => {

    const [estadoA, setEstadoA] = useState("Valor por defecto");
    const [cart, setCart] = useState([]);

    //Agregar un item al carrito.
    const addItem = (producto, cantidad) => {
        console.log(producto, cantidad);
        //traemos el prod en caso de que este repetido en mi cart
        const productoRepetido = isInCart(producto);
        console.log(productoRepetido);
        if(productoRepetido){
            //le adicionamos a la prop quantity la cant correspondiente
            productoRepetido.quantity += cantidad;
            //seteamos el cart con una copia exacta del cart original
            setCart([...cart]);
        }else {
            //Valor que habia previamente en cart, sumado a un nuevo objeto que va a ser todas las propiedades que haya en producto + la prop qty
            setCart([...cart, {...producto, quantity: cantidad}]);
        }
    }
    const isInCart = (producto) => {
        //Devuel prod repetido
        return cart.find(elemento => elemento.id === producto.id);
    }
    //Eliminar un prod del carrito
    const removeItem = (id) => { 
        setCart(cart.filter(producto => producto.id !== id)) 
    }
  return (
    <Shop.Provider value={{estadoA, setEstadoA, addItem, cart, removeItem}}>
        {children}
    </Shop.Provider>
  )
}

export default ShopProvider;