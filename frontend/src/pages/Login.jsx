import InputForm from "../components/InputForm";
import TextButton from "../components/TextButton";

function Login() {
  return (
    <main className="h-screen w-full flex flex-col bg-[#F1F5F9]">
      <header className="flex items-center justify-center p-8">
        <img src="./src/assets/LogoClaro.svg" alt="Logo" />
      </header>
      <section className="grid grid-cols-1 lg:grid-cols-2 w-full h-5/6 p-4 mx-auto max-w-[100%] sm:max-w-[90%] md:max-w-[60%] lg:max-w-[90%] xl:max-w-[80%]">
        <div className="hidden lg:flex items-center justify-center">
          <img className="size-full" src="./src/assets/imglogin.svg" alt="repartidor" />
        </div>
        <div className="flex flex-col bg-[#CBD5E1] bg-opacity-50 p-10 rounded-3xl items-center justify-center">
          <div className="flex flex-col w-full gap-10 text-center">
            <h1 className="text-black font-bold text-3xl py-4">
              Inicio de sesión
            </h1>
            <InputForm
              textColor="text-black"
              type={"email"}
              placeholder={"Email"}
            />
            <InputForm
              textColor="text-black"
              type={"password"}
              placeholder={"Contraseña"}
            />
            <TextButton text={"Continuar"} />
            <hr className="w-[98%] mx-auto h-[2px] bg-slate-500" />
            <div className="flex flex-col gap-2">
              <a href="#" className="text-lg underline">
                Olvide mi contraseña
              </a>
              <a href="#" className="text-lg underline">
                Aún no tengo una cuenta
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Login;
