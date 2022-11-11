import Header from "../components/header";
import Footer from "../components/footer";
import Head from "next/head";

const format = ({children}) => {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default format;
