import type { NextPage } from 'next';
import Head from 'next/head';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import questTheme from 'MyDesignSystemLightTheme';
import InicioComp from 'components/Inicio/Inicio';

const Home: NextPage = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={questTheme}>
        <div>
          <Head>
            <title>Inicio</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main>
            <InicioComp />
          </main>
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default Home;
