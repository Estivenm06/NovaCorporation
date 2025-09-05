import RegisterForm from "../ui/components/RegisterForm"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "NovaCorporation | Registro",
    description: "Pagina Registro de NovaCorporation",
  };

const Register = () => {
    return (
        <>
         <RegisterForm />
        </>
    )
}

export default Register