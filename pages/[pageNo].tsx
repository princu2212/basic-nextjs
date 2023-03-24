import Navbar from "@/components/Navbar";
import Head from "next/head";

export const getStaticPaths = async () => {
  const res = await fetch("https://gorest.co.in/public/v2/users");
  const data = await res.json();

  const paths = data.map((curElem) => {
    return {
      params: {
        pageNo: curElem.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.pageNo;
  const res = await fetch(`https://gorest.co.in/public/v2/users/${id}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const pageNo = ({ data }) => {
  const { id, name, email, gender, status } = data;
  return (
    <>
      <Head>
        <title>Service</title>
      </Head>
      <Navbar />
      <style jsx>
        {`
          .container {
            padding: 5rem;
            text-align: center;
          }
        `}
      </style>

      <div className="container">
        <h2>
          <b>{id}</b>
        </h2>
        <h2>
          <b>{name}</b>
        </h2>
        <p>{email}</p>
        <p>{gender}</p>
        <p>{status}</p>
      </div>
    </>
  );
};

export default pageNo;
