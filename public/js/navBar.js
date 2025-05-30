export function setupNavbarScrollEffect() {
  const navigation = document.querySelector(".navegation");
  let lastScrollY = window.scrollY;
  let isVisible = false;

  const controlNavbar = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      if (!isVisible) {
        navigation.classList.add("hidden-navbar");
        isVisible = true;
      }
    } else {
      if (isVisible) {
        navigation.classList.remove("hidden-navbar");
        navigation.classList.add("bg-purple-800", 'md:p-5');
        isVisible = false;
      }
    }
    lastScrollY = currentScrollY;
  };
  document.addEventListener("scroll", controlNavbar);

  return () => {
    document.removeEventListener("scroll", controlNavbar);
  };
}