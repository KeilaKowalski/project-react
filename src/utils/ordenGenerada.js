//Función auxiliar para generar la orden.
const ordenGenerada = (buyer, cart, total) => {
  return {
    buyer: {
      name: buyer.name,
      email: buyer.email,
      addres: buyer.addres,
      payment: buyer.payment,
    },
    items: cart,
    total: total,
    createdAt: new Date().toLocaleString(),
  };
};

export default ordenGenerada;
