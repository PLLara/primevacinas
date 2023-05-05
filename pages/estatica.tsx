/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import { StyledEngineProvider } from "@mui/material/styles";
import InicioComp, {
  InicioJumbotronPedirAgoraVacina,
  InicioWrapper,
  Rectangle35,
} from "components/Inicio/Inicio";
import DefaultHeader from "components/Header/Header";
import { css } from "@emotion/react";

const Home: NextPage = () => {
  return (
    <StyledEngineProvider injectFirst>
      <div>
        <Head>
          <title>
            Prime Vacinas | Atendimento Domiciliar | Vacinação em Empresa
          </title>
          <link rel="icon" href="/favicon.png" />
        </Head>
        <main>
          <InicioWrapper>
            <DefaultHeader />

            <div
              className="md:flex-row flex-col mb-32"
              style={{
                backgroundImage: `url('/estatica.png')`,
                width: "100vw",
                marginTop: "100px",
                height: "420px",
                backgroundPosition: "bottom center",
                display: "flex",
                justifyContent: "center",
                paddingTop: "5rem",
                overflow: "visible !important",
              }}
            >
              <div
                style={{
                  fontFamily: "Raleway",
                  fontStyle: "normal",
                  fontSize: "50px",
                  lineHeight: "72px",
                  color: "#FFFFFF",
                  maxWidth: "500px",
                }}
              >
                <b>Parceria direta</b>
                <br></br> com mais de XX operadoras de saúde
              </div>
              <div
                style={{
                  background: "#FFA19F",
                  height: "400px",
                  width: "400px",
                  borderRadius: "32px",
                  marginLeft: "100px",
                }}
              ></div>
            </div>

            <div
              className="md:flex-row flex-col hidden"
            
              style={{
                background: "rgba(255, 89, 85, 0.08)",
                width: "100vw",
                marginTop: "100px",
                backgroundPosition: "bottom center",
                justifyContent: "center",
                paddingTop: "5rem",
                overflow: "visible !important",
              }}
            >
              <div
                style={{
                  height: "400px",
                  width: "400px",
                  borderRadius: "32px",
                  marginRight: "50px",
                  background: "#971916",
                  marginBottom: "200px",
                }}
              ></div>
              <div
                style={{
                  fontFamily: "Raleway",
                  fontStyle: "normal",
                  color: "#FFFFFF",
                  maxWidth: "500px",
                }}
              >
                <div>
                  <span
                    style={{
                      fontFamily: "Raleway",
                      fontStyle: "normal",
                      fontWeight: 900,
                      fontSize: "43.8503px",
                      color: "#971916",
                      textDecoration: "underline",
                    }}
                  >
                    <b
                      style={{
                        color: "#383A48",
                      }}
                    >
                      +
                    </b>{" "}
                    Livre Escolha
                  </span>
                  <br />
                  <div
                    style={{
                      height: "50px",
                    }}
                  ></div>

                  <span
                    style={{
                      fontFamily: "Raleway",
                      fontStyle: "normal",
                      fontWeight: 300,
                      fontSize: "24px",
                      color: "#383A48",
                    }}
                  >
                    Se o seu plano de saúde lhe oferece a{" "}
                    <b>possibilidade de reembolso</b>, nós o auxiliaremos
                    durante todo o processo, através da nossa parceria com a
                    startup de reembolso PAYME.NOW
                  </span>
                </div>
              </div>
            </div>

            <div
              className="md:grid-cols-5 grid-cols-2 gap-4"
              style={{
                display: "grid",
                width: "min(100vw, 1366px)",
                transform: "translateY(-50px)",
              }}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    padding: "30px",
                  }}
                >
                  <img
                    src="/logo.png"
                    alt="asd"
                    style={{
                      // width cover
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                  <div
                    style={{
                      height: "20px",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "Raleway",
                      fontStyle: "normal",
                      fontWeight: 900,
                      fontSize: "28px",
                      lineHeight: "33px",
                      textAlign: "center",
                      color: "#383A48",
                    }}
                  >
                    Lorem{" "}
                    <span
                      style={{
                        color: "#971916",
                      }}
                    >
                      ipsum
                    </span>
                  </span>
                </div>
              ))}
              <InicioJumbotronPedirAgoraVacina />
            </div>
          </InicioWrapper>

          <Rectangle35
            src={`assets/images/Inicio_Rectangle_35.png`}
            loading="lazy"
            alt={"Rectangle 35"}
            style={{
              width: "100%",
            }}
          />
        </main>
      </div>
    </StyledEngineProvider>
  );
};

export default Home;
