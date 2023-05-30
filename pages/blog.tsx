import type { NextPage } from "next";
import Head from "next/head";
import Blog from "components/Inicio/blog";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>
          Prime Vacinas | Atendimento Domiciliar | Vacinação em Empresa
        </title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <Blog />
      </main>
    </div>
  );
};

export default Home;
