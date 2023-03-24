import Navbar from "@/components/Navbar";
import Head from "next/head";
const about = () => {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <Navbar />
      <h1>This is About page!</h1>
    </div>
  );
};

export default about;
