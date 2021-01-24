import * as React from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="name" ref={register} placeholder="Nombre" required />
      <input name="lastNames" ref={register} placeholder="Apellidos" required />
      <input name="id" ref={register} placeholder="DNI" required pattern="[0-9]{8}[A-Za-z]{1}" />
      <input name="email" ref={register} placeholder="Correo electrónico" required type="email" />
      <textarea name="message" ref={register}  rows="10" cols="50" placeholder="Mensaje" required />
      <input type="submit" />
    </form>
  );
}
