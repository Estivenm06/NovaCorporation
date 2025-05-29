import { emailValidation } from "../helpers/helper.js";
const getLogin = (req, res) => {
  res.render("login", {
    title: "NovaCorporation | Inicio de sesion",
    greeting: "Bienvenido a  Nebulã (Inicio de sesion)",
  });
};

const postLogin = (req, res) => {
  const { email, contraseña } = req.body;

  const errors = [];

  if (email.trim() === "") {
    errors.push({ message: "Email no ingresado" });
  } else if (!emailValidation(email)) {
    errors.push({ message: "Email no valido" });
  }

  if (contraseña.trim() === "") {
    errors.push({ message: "Contraseña no ingresada" });
  }

  if (errors.length > 0) {
    res.render("login", {
      title: "NovaCorporation | Inicio de sesion",
      greeting: "Ha ocurrido un error",
      errors,
      email,
      contraseña,
    });
  } else {
    console.log(req.body);
    res.redirect("/");
  }
};

export {
    getLogin,
    postLogin
}