import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children, pageTitle }) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>

      <Header />
      <main className="h-[calc(100%-56px)]">{children}</main>
      <Footer />
    </>
  );
}
