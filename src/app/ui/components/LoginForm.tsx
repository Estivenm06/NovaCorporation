"use client";
import Link from "next/link";
import { useState } from "react";

import type { User } from "../lib/definitions.js";
import { useRouter } from "next/navigation";
import { emailValidation } from "@/app/ui/helpers/helper";

const LoginForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    contraseña: "",
  });
  const [formErrors, setFormErrors] = useState<
    Array<{ message: string; type: "error" | "success" }>
  >([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setFormErrors([]);

    const newErrors: Array<{ message: string; type: "error" | "success" }> = [];

    if (!formData.email) {
      newErrors.push({ message: "El email es requerido", type: "error" });
    } else if (!emailValidation(formData.email)) {
      newErrors.push({ message: "El email no es válido", type: "error" });
    }

    if (!formData.contraseña) {
      newErrors.push({ message: "La contraseña es requerida", type: "error" });
    }

    if (newErrors.length > 0) {
      setFormErrors(newErrors);
      return;
    }

    const users = localStorage.getItem("users");
    if (users) {
      const usersArray = JSON.parse(users);
      const user = usersArray.find(
        (user: User) => user.email === formData.email
      );
      const userLocal = {
        id: user.id,
        nombre: user.nombre,
        email: user.email,
      };
      if (user) {
        localStorage.setItem("user", JSON.stringify(userLocal));
        setFormErrors([
          { message: "Inicio de sesion exitoso", type: "success" },
        ]);
        setFormData({
          email: "",
          contraseña: "",
        });
        setTimeout(() => {
          router.push("/");
        }, 2000);
      } else {
        setFormErrors([
          { message: "El email no esta registrado", type: "error" },
        ]);
      }
    }
  };

  return (
    <div className="mx-auto container flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100/80 transition-opacity px-10 md:px-20 py-15 my-20 rounded-lg text-2xl flex flex-col shadow-md drop-shadow-md font-sans mx-5 md:mx-0"
      >
        {/* Error Messages */}
        {formErrors.length > 0 && (
          <div className="mb-4">
            {formErrors.map((error, index) => (
              <div
                key={index}
                className={`py-2 text-center rounded-md my-2 bg-${
                  error.type === "error" ? "red" : "green"
                }-500 text-xl select-none px-2 text-white`}
              >
                {error.message}
              </div>
            ))}
          </div>
        )}

        {/* Email Field */}
        <label htmlFor="email" className="text-center cursor-pointer">
          Email
        </label>
        <input
          name="email"
          id="email"
          type="email"
          className="rounded-md text-center text-xl mb-5 py-2 mt-2 border-2 border-gray-500 hover:border-gray-700 focus:border-purple-500 focus:outline-none transition-colors duration-300"
          placeholder="Ingresa tu Email"
          value={formData.email}
          onChange={handleInputChange}
        />

        {/* Password Field */}
        <label htmlFor="contraseña" className="text-center cursor-pointer">
          Contraseña
        </label>
        <input
          name="contraseña"
          id="contraseña"
          type="password"
          className="rounded-md text-center text-xl mb-5 py-2 mt-2 border-2 border-gray-500 hover:border-gray-700 focus:border-purple-500 focus:outline-none transition-colors duration-300"
          placeholder="Ingresa tu Contraseña"
          value={formData.contraseña}
          onChange={handleInputChange}
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="border border-purple-600 bg-purple-500 mt-5 cursor-pointer transition-all duration-300 py-1.5 text-gray-100 hover:rounded-lg hover:bg-purple-600 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
        >
          Iniciar Sesión
        </button>

        {/* Register Link */}
        <Link
          href="/register"
          className="text-center mt-5 transition-all duration-300 rounded-lg z-10 p-2 hover:text-purple-600 hover:scale-105"
        >
          ¿No tienes cuenta?
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
