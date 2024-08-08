import { Link, useNavigate } from "react-router-dom";
import InputForm from "../../components/InputForm";
import TextButton from "../../components/TextButton";
import axios from "axios";
import { useState } from "react";
import Cookies from "js-cookie";

function LoginAdmin() {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const login = async () => {
    try {
      const response = await axios.post("http://localhost:8000/admons/", {
        code: id,
        password: password,
      });
      Cookies.set("sessionId", response.data.sessionId);
      navigate("/home-user/administrator/inventory");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="h-screen w-full items-center flex flex-col bg-[#F1F5F9]">
      {
        //Header - Image Logo
      }
      <header className="flex items-center justify-center p-4">
        <img src="../src/assets/LogoClaro.svg" alt="Logo" />
      </header>
      {
        // Section - Main container
      }
      <section className="w-full p-4 mx-auto sm:max-w-[65%] md:max-w-[55%] lg:max-w-[45%] xl:max-w-[35%]">
        {
          // Div - Form container
        }
        <div className="bg-[#CBD5E1] bg-opacity-30 my-auto p-10 rounded-3xl">
          {
            // Form
          }
          <form className="flex flex-col w-full gap-10 text-center">
            <h1 className="text-black font-bold text-3xl py-3">
              Bienvenido Administrador
            </h1>
            <InputForm
              textColor="text-black"
              type={"number"}
              placeholder={"Codigo"}
              handle={handleIdChange}
              value={id}
            />
            <InputForm
              textColor="text-black"
              type={"password"}
              placeholder={"Contraseña"}
              handle={handlePasswordChange}
              value={password}
            />
            <TextButton func={login} type={"button"} text={"Continuar"} />
            <hr className="w-[98%] mx-auto h-[2px] bg-slate-500" />
            <Link href={"/"} className="text-lg underline text-slate-700">
              Olvide mi contraseña
            </Link>
          </form>
        </div>
      </section>
    </main>
  );
}

export default LoginAdmin;
