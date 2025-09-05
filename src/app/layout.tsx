"use client";
import { Bebas_Neue } from "next/font/google";

import "./globals.css";

import Header from "@/app/ui/common/Header";
import Footer from "@/app/ui/common/Footer";
import Slider from "./ui/components/Slider";
import { useEffect, useState } from "react";
import type { User } from "@/app/ui/lib/definitions";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const alreadyUserList = localStorage.getItem("users");
    const alreadyUser = localStorage.getItem("user");
    if (alreadyUser) {
      console.log(JSON.parse(alreadyUser));
      setUser(JSON.parse(alreadyUser));
    }
    if (alreadyUserList) return;
    const users: Array<User> = [];
    localStorage.setItem("users", JSON.stringify(users));
  }, []);
  return (
    <html lang="en">
      <body
        className={`${bebasNeue.className} antialised scroll-smooth flex flex-col min-h-screen`}
      >
        <Header user={user} setUser={setUser} />
        <Slider
          {...(user
            ? { greeting: "Hola", nameUser: user.nombre }
            : { greeting: "Hola", nameUser: "Invitado" })}
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
