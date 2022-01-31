import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
