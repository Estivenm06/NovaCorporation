import { openOrCreateDatabase, addUser, getUserByEmail, handleCardClick } from "./functions.js";
import { setupNavbarScrollEffect } from "./navBar.js";
import '../styles/output.css'

document.addEventListener("DOMContentLoaded", async () => {
  try {
    // Create or Open Database
    await openOrCreateDatabase();
    // Navbar Effect
    setupNavbarScrollEffect();
    const buttonsPlan = document.querySelectorAll('.buttonPlan');
    buttonsPlan.forEach(button => button.onclick = () => handleCardClick());
    
    const userLogged = JSON.parse(localStorage.getItem("userLogged")) || null;
    
    if (userLogged) {
      const ul = document.querySelector("nav ul");
      const li = document.createElement("li");
      const a = document.createElement("a");
      const span = document.createElement('span');
      a.classList.add(
        "text-3xl",
        "p-2",
        "text-gray-400",
        "hover:text-gray-700",
        "duration-250",
        "hover:text-4xl"
      );
      a.href = "/";
      span.classList.add(
        "inline-block",
        "transform",
        "hover:scale-110",
        "origin-center"
      );
      a.textContent = "Cerrar sesion";
      a.onclick = () => {
        localStorage.clear();
      }
      a.appendChild(span);
      li.appendChild(a);
      ul.appendChild(li);

      document.querySelector(".nameUser").textContent = userLogged.user;
      document.querySelector(".login").hidden = true;
      document.querySelector(".register").hidden = true;
    }

    if (window.userLogin) {
      const userLogin = {
        email: window.userLogin.email,
        contraseña: window.userLogin.contraseña,
      };

      const userInDatabase = await getUserByEmail(userLogin.email);

      if (!userInDatabase) {
        const h1 = (document.querySelector(".slider h1").innerHTML =
          'Este usuario no <span class="text-indigo-500">Existe</span><br /> <a href="/register" class="text-white hover:text-gray-400">Registrate</a>');
        return;
      }

      if (
        userInDatabase.contraseña === userLogin.contraseña &&
        userInDatabase.email === userLogin.email
      ) {
        localStorage.setItem(
          "userLogged",
          JSON.stringify({ user: userInDatabase.nombre })
        );
        window.location.href = "/";
      } else {
        const h1 = (document.querySelector(".slider h1").innerHTML =
          'Contraseña <span class="text-indigo-500">Incorrecta</span><br /> Intenta de nuevo');
        return;
      }
    }

    if (window.initialUserData) {
      const userToAdd = {
        nombre: window.initialUserData.nombre,
        email: window.initialUserData.email,
        contraseña: window.initialUserData.contraseña,
      };

      const userAlreadyExists = await getUserByEmail(userToAdd.email);

      if (userAlreadyExists) {
        const h1 = (document.querySelector(".slider h1").innerHTML =
          'Este usuario ya <span class="text-indigo-500">Existe</span><br /> <a href="/login" class="text-white hover:text-gray-400">Inicia sesion</a>');
        return;
      }

      await addUser(userToAdd);
    }
  } catch (error) {
    console.error("Error in main IndexedDB flow:", error);
  } finally {
    delete window.initialUserData;
    delete window.userLogin;
  }
});
