// pages/_app.tsx
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import "../styles/index.css";
import { isAuthenticated } from "../utils/auth";
import LoginScreen from "../components/LoginScreen";
import "../styles/login.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoggedIn(isAuthenticated());
    setLoading(false);
  }, []);

  if (loading) {
    return null; // ou coloque uma tela de carregamento simples
  }

  if (!loggedIn) {
    return <LoginScreen onLoginSuccess={() => setLoggedIn(true)} />;
  }

  return <Component {...pageProps} />;
}
