import "./globals.css";
import AOS from "aos";
import "swiper/css";
import { ToastContainer } from "react-toastify";
// import "react-creative-cursor/dist/styles.css";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "Sharoon Sarfraz | SEO Expert, Digital Marketer & Web Consultant",
  description:
    "Sharoon is a skilled Web Developer, SEO Expert, and Digital Marketer with expertise in creating high-performance websites and driving online growth. Explore his portfolio to see innovative projects and proven marketing strategies.",
  title: "Sharoon Sarfraz",
  description: "Sharoon Sarfraz Personal Portfolio ",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <meta
          name="google-site-verification"
          content="pTX8xC8PEKFiIV2O_rvlf2B1o5xQtFaGaZ5thns_e2c"
        />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        {/* <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"/> */}
      </head>
      <body>
        {children}
        <ToastContainer />
        {/* aos link script */}
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        {/* <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script> */}
        <script>AOS.init();</script>
      </body>
    </html>
  );
}
