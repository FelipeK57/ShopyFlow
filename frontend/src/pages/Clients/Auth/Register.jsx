import { Link } from "react-router-dom";
import InputForm from "../../../components/InputForm";
import TextButton from "../../../components/TextButton";
import { useState } from "react";

function Register() {
  //const navigate = useNavigate();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const registerUser = (event) => {
    event.preventDefault();
    /* logica de registro de usuarios */
  };

  return (
    <main className="h-screen w-full flex flex-col bg-[#F1F5F9]">
      {
        //Header - Image Logo
      }
      <header className="flex items-center justify-center p-4">
        <img src="../src/assets/LogoClaro.svg" alt="Logo" />
      </header>
      {
        // Section - Main & Form container
      }
      <section className="w-full p-4 mx-auto sm:max-w-[65%] md:max-w-[55%] lg:max-w-[45%] xl:max-w-[35%]">
        {
          // Form
        }
        <form
          onSubmit={registerUser}
          className="flex flex-col bg-[#CBD5E1] bg-opacity-50 p-10 rounded-3xl items-center justify-center"
        > 
          {
            // Div - input container
          }
          <div className="flex flex-col w-full gap-6 text-center">
            <h1 className="text-black font-bold text-3xl py-3">Registrate</h1>
            <div className="grid grid-cols-2 gap-3">
              <InputForm
                value={name}
                textColor="text-black"
                type={"text"}
                handle={handleNameChange}
                placeholder={"Nombres"}
              />
              <InputForm
                value={lastName}
                textColor="text-black"
                type={"text"}
                handle={handleLastNameChange}
                placeholder={"Apellidos"}
              />
            </div>
            <InputForm
              value={email}
              textColor="text-black"
              type={"email"}
              handle={handleEmailChange}
              placeholder={"Email"}
            />
            <InputForm
              value={password}
              textColor="text-black"
              type={"password"}
              handle={handlePasswordChange}
              placeholder={"Contraseña"}
            />
            <TextButton type={"submit"} text={"Crear cuenta"} />
            <hr className="w-[98%] mx-auto h-[2px] bg-slate-500" />
            <Link to={"/login"} className="text-lg underline text-slate-700">
              Ya tengo una cuenta
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Register;
