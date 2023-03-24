import Navbar from "@/components/Navbar";
import Head from "next/head";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://gorest.co.in/public/v2/users");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const service = ({ data }) => {
  return (
    <div>
      <Head>
        <title>Service</title>
      </Head>
      <Navbar />
      <style jsx>
        {`
          .main {
            background: white;
          }
          h2 {
            color: black;
          }
          p {
            color: black;
          }
        `}
      </style>

      {data.map((curElem) => {
        return (
          <div key={curElem.id} className="main">
            <h2>{curElem.id}</h2>
            <Link href={`/${curElem.id}`}>
              <h2>{curElem.name}</h2>
            </Link>
            <p>{curElem.email}</p>
            <p>{curElem.gender}</p>
            <p>{curElem.status}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default service;
