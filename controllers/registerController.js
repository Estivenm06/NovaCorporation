import jwt from 'jsonwebtoken';
import { emailValidation } from "../helpers/helper.js";

const getRegister = (req, res) => {
  res.render("register", {
    title: "NovaCorporation | Registrarse",
    greeting: "Bienvenido a  Nebulã (Registrarse)",
  });
};

const postRegister = async (req, res) => {
  const { nombre, email, contraseña, contraseñaConfirm } = req.body;

  const errors = [];
  
  if (nombre.trim() === "") {
    errors.push({ message: "Nombre no ingresado" });
  }

  if (email.trim() === "") {
    errors.push({ message: "Email no ingresado" });
  } else if (!emailValidation(email)) {
    errors.push({ message: "Email no valido" });
  }

  if (contraseña.trim() === "") {
    errors.push({ message: "Contraseña no ingresada" });
  }

  if (contraseñaConfirm.trim() === "") {
    errors.push({ message: "Contraseña confirmacion no ingresada" });
  } else if (contraseña !== contraseñaConfirm) {
    errors.push({ message: "Contraseñas no coinciden" });
  }

  if (errors.length > 0) {
    res.render("register", {
      title: "NovaCorporation | Registrarse",
      greeting: "Ha ocurrido un error",
      errors,
      nombre,
      email,
      contraseña,
      contraseñaConfirm,
    });
  } else {

    const newUser = {
      nombre,
      email,
    }

    const token = jwt.sign(newUser, 'anyString')
    newUser.token = token;
    res.render('register', {
      newUser,
      greeting: "Usuario creado"
    });
  }
};

export { getRegister, postRegister };
