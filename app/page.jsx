import Navbar from "./(components)/navbar";
import Script from "next/script";

import Pagelayout from "./(components)/Pagelayout";
export default function Home() {
  return (
    <>
      <div className="">
        <Navbar />
        <Pagelayout />
        <Script src="https://your-script-url.com" strategy="lazyOnload" />
      </div>
    </>
  );
}
