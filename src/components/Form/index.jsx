import React from "react";
import { useForm } from "react-hook-form";
import "./styles.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useState } from "react";

const Form = ({ confirmarOrden }) => {
  const MySwal = withReactContent(Swal);
  const [mail, setMail] = useState();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data, e) => {
    console.log(data);
    confirmarOrden(data);
    let timerInterval;
    MySwal.fire({
      title: "Your data was received",
      html: <p>Wait, the order is being generated</p>,
      timer: 4000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    });
    e.target.reset();
  };
  return (
    <div className="formContainer">
      <form className="form row g-3 border" onSubmit={handleSubmit(onSubmit)}>
        <div className="col-auto">
          <label htmlFor="name" className="form-control">
            Name and Surname
          </label>
          <input
            className="form-control form-control-sm"
            type="text"
            name="name"
            {...register("name", { required: true })}
            placeholder="John Doe"
          />
          <span className="text-danger text-small d-block mb-2">
            {errors.name?.type === "required" && (
              <p>The complete name is required</p>
            )}
          </span>
        </div>
        <div className="col-auto">
          <label htmlFor="email" className="form-control">
            E-mail
          </label>
          <input
            className="form-control form-control-sm"
            type="email"
            name="email"
            {...register("email", {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
              onChange: (e) => setMail(e.target.value),
            })}
            placeholder="email@email.com"
          />
          <span className="text-danger text-small d-block mb-2">
            {errors.email?.type === "pattern" && (
              <p>The email format is incorrect</p>
            )}
          </span>
        </div>
        <div className="col-auto">
          <label htmlFor="email" className="form-control">
            Repeat E-mail
          </label>
          <input
            className="form-control form-control-sm"
            type="email"
            name="email2"
            {...register("email2", {
              required: true,
              validate: (value) => value === mail || "The e-mail is different",
            })}
            placeholder="email@email.com"
          />
          <span className="text-danger text-small d-block mb-2">
            <p>{errors.email2?.message}</p>
          </span>
        </div>

        <div className="col-auto">
          <label htmlFor="number" className="form-control">
            Phone
          </label>
          <input
            className="form-control form-control-sm"
            type="number"
            name="phone"
            {...register("phone", { required: true, minLength: 5 })}
            placeholder="353..."
          />
          <span className="text-danger text-small d-block mb-2">
            {errors.phone?.type === "required" && <p>The phone is required</p>}
          </span>
        </div>

        <div className="col-auto">
          <label htmlFor="addres" className="form-control">
            Addres
          </label>
          <input
            className="form-control form-control-sm"
            type="text"
            name="addres"
            {...register("addres", { required: true })}
            placeholder="123 State Street"
          />
          <span className="text-danger text-small d-block mb-2">
            {errors.addres?.type === "required" && (
              <p>The addres is required</p>
            )}
          </span>
        </div>
        <div className="col-auto">
          <label htmlFor="payment" className="form-control">
            Payment
          </label>
          <select
            className="form-select form-select-sm"
            name="payment"
            {...register("payment", { required: true })}
          >
            <option defaultValue={"credit"}>Open this select menu</option>
            <option value="credit">Credit Card</option>
            <option value="cash">Cash</option>
          </select>
          <span className="text-danger text-small d-block mb-2">
            {errors.payment?.type === "required" && (
              <p>The method of payment is required</p>
            )}
          </span>
        </div>
        <div className="col-auto">
          <input className="btn btn-primary" type="submit" value="Confirm" />
        </div>
      </form>
    </div>
  );
};
export default Form;
