import Footer from "@/components/Footer";
import { Html, Head, Main, NextScript } from "next/document";
import Image from "next/image";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div
          style={{
            zIndex: -1,
            position: "fixed",
            width: "100vw",
            height: "100vh",
            objectFit: "cover",
          }}
        >
          <Image src="/cool-background.png" alt="background" fill />
        </div>
        <Main />
        <footer>
          <Footer className="footer" />
        </footer>
        <NextScript />
      </body>
    </Html>
  );
}
