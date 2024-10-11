import "./globals.css";
import AOS from "aos";
import "swiper/css";
// import "react-creative-cursor/dist/styles.css";

export const metadata = {
  title: "Sharoon Sarfraz",
  description: "Sharoon Sarfraz Personal Portfolio ",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        {/* <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"/> */}
      </head>
      <body>
        {children}
        {/* aos link script */}
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        {/* <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script> */}
        <script>AOS.init();</script>
      </body>
    </html>
  );
}
