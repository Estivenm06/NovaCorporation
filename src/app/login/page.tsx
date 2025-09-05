import LoginForm from "@/app/ui/components/LoginForm"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "NovaCorporation | Inicio de sesion",
    description: "Pagina Inicio de sesion de NovaCorporation",
  };

const Login = () => {
    return (
        <>
         <LoginForm/>
        </>
    )
}

export default Login;