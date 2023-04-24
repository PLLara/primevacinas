import type { NextPage } from 'next';
import Head from 'next/head';
import {  StyledEngineProvider } from '@mui/material/styles';
import InicioComp from 'components/Inicio/Inicio';

const Home: NextPage = () => {
  return (
    <StyledEngineProvider injectFirst>
        <div>
          <Head>
            <title>Prime Vacinas | Atendimento Domiciliar | Vacinação em Empresa</title>
            <link rel="icon" href="/favicon.png" />
          </Head>
          <main>
            <InicioComp />
          </main>
        </div>
    </StyledEngineProvider>
  );
};

export default Home;
