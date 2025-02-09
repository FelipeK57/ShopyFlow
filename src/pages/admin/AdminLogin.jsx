import { useState } from "react";
import { Form, Button, Input } from "@heroui/react";
import { useNavigate } from "react-router";

export const AdminLogin = () => {
  const [submitted, setSubmitted] = useState(null);

  const navigate = useNavigate();

  const onSubmit = (e) => {
    try {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(e.target));
      setSubmitted(data);
      navigate("/admin/dashboard/home");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="flex flex-col gap-8 items-center justify-center w-4/5 md:w-1/4 2xl:w-1/5 mx-auto h-screen">
      <h1 className="font-semibold text-2xl">Shopyflow Admin</h1>
      <Form
        className="w-full flex flex-col gap-8"
        validationBehavior="native"
        onSubmit={onSubmit}
      >
        <Input
          isRequired
          errorMessage="Este campo esta vacio o no es un correo electrónico valido"
          name="Correo Electrónico"
          type="email"
          label="Correo Electrónico"
          labelPlacement="outside"
          placeholder="Ingrese su correo electrónico"
          size="lg"
        />
        <Input
          isRequired
          errorMessage="Este campo esta vacio o no es una contraseña valida"
          name="Contraseña"
          label="Contraseña"
          labelPlacement="outside"
          placeholder="Ingrese su contraseña"
          type="password"
          size="lg"
        />
        <Button
          variant="shadow"
          type="submit"
          size="lg"
          className="w-full"
          color="primary"
        >
          Iniciar sesión
        </Button>
      </Form>
    </section>
  );
};
