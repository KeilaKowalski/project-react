import React from "react";

const Formulario = () => {
  return (
    <>
      <form className="formulario">
        <div>
          <label htmlFor="name">Name and Surname</label>
          <input type="text" id="name" name="name" placeholder="John Doe" />
        </div>
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email@email.com"
          />
        </div>
        <div>
          <label htmlFor="number">Phone</label>
          <input
            type="number"
            id="number"
            name="number"
            placeholder="3534####"
          />
        </div>
        <div>
          <label htmlFor="addres">Addres</label>
          <input
            type="text"
            id="addres"
            name="addres"
            placeholder="123 State Street"
          />
        </div>
        <div>
          <label htmlFor="creditCard">
            {" "}
            <input type="checkbox" id="creditCard" value="creditCard" />
            Credit Card
          </label>
          <br />
          <label htmlFor="cash">
            {" "}
            <input type="checkbox" id="cash" value="cash" />
            Cash
          </label>
        </div>
        <button type="submit">Send</button>
      </form>
    </>
  );
};
