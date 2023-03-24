import Navbar from "@/components/Navbar";
import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
        <title>Home</title>
      </Head>
      <Navbar />
      <h1>Hello Prince, This is Home page!</h1>
    </>
  );
}
