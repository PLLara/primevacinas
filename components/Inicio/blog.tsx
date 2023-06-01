/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import DefaultHeader from "components/Header/Header";
import { InicioProps } from "types";
import { motion } from "framer-motion";
import { DefaultViewportAnimation } from "../global/DefaultViewportAnimation";
import { DefaultButtonInk } from "../global/DefaultButtonInk";
import {
  InicioWrapper,
  Rectangle35,
  InicioJumbotronPedirAgoraVacina,
} from "./Inicio";
import DefaultButtonGroup from "./blog/buttongroup";

function Blog(props: InicioProps): JSX.Element {
  return (
    <InicioWrapper className={props.className}>
      <DefaultHeader />

      <InicioJumbotronExamesVacinacaoInfusao />
      <InicioJumbotronVacinacaoCondominio />

      {InicioJumbotronNavegueCategorias()}
      <div
        style={{
          margin: "80px 0px 150px 0px",
        }}
      >
        <InicioJumbotronPedirAgoraVacina />
      </div>

      <Rectangle35
        src={`assets/images/Inicio_Rectangle_35.png`}
        loading="lazy"
        alt={"Rectangle 35"}
        style={{
          width: "100%",
        }}
      />
    </InicioWrapper>
  );
}

function InicioJumbotronNavegueCategorias() {
  return (
    <DefaultViewportAnimation>
      <InicioJumbotronVacinacaoCondominioWrapper2>
        <InicioJumbotronVacinacaoCondominioInside>
          <div
            className="flex gap-10"
            style={{
              width: "100%",
            }}
          >
            <img
              src="/img10.png"
              alt=""
              style={{
                transform: "translate(0px, -130px)",
              }}
            />

            <div>
              <span
                style={{
                  fontFamily: "Raleway",
                  fontStyle: "normal",
                  fontWeight: "bold",
                  color: "#971916",
                  borderBottom: "4px solid rgba(150, 25, 22)",
                }}
              >
                {"Novos"}
              </span>
              <hr />
              {[
                {
                  title:
                    "Título 1  lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  date: new Date(),
                },
                {
                  title:
                    "Título 2  lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  date: new Date(),
                },
                {
                  title:
                    "Título 3  lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  date: new Date(),
                },
              ].map((item) => (
                <DefaultButtonInk
                  key={item.title}
                  className="flex flex-col gap-2"
                  style={{
                    width: "100%",
                    padding: "0px",
                    marginBlock: "25px",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      fontFamily: "Roboto",
                      fontStyle: "normal",
                      fontSize: "16px",
                      textAlign: "left",
                      textTransform: "uppercase",
                      verticalAlign: "middle",
                      letterSpacing: "-0.1px",
                      color: "#9B9B9B",
                    }}
                  >
                    {item.date.toLocaleDateString("pt-BR", {
                      month: "short",
                      day: "2-digit",
                      year: "numeric",
                    })}
                  </div>

                  <div
                    style={{
                      fontFamily: "Raleway",
                      fontStyle: "normal",
                      fontSize: "16px",
                      textAlign: "left",
                      verticalAlign: "middle",
                      letterSpacing: "-0.1px",
                      color: "#111210",
                    }}
                  >
                    {item.title}
                  </div>
                </DefaultButtonInk>
              ))}
            </div>
          </div>
        </InicioJumbotronVacinacaoCondominioInside>
      </InicioJumbotronVacinacaoCondominioWrapper2>

      <InicioJumbotronVacinacaoCondominioWrapper2>
        <InicioJumbotronVacinacaoCondominioInside
          style={{
            padding: "0px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {["1", "2", "3"].map((item) => {
            return (
              <div
                key={item}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "start",
                  marginBlock: "50px",
                  backgroundColor: "#FFFFFF",
                  boxShadow: "0px 0px 5.6px rgba(0, 0, 0, 0.0836)",
                  textAlign: "left",
                }}
              >
                <div
                  style={{
                    padding: " 13px 45px",
                    marginBottom: "40px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "256px",
                    width: "600px",
                    flex: "1",
                  }}
                >
                  <DefaultButtonGroup buttonLabels={["CATEGORIA X"]} />
                  <div
                    style={{
                      fontFamily: "Raleway",
                      fontSize: "30px",
                      textAlign: "left",
                      color: "#961916",
                      fontWeight: "800",
                      wordBreak: "break-word",
                      overflowWrap: "break-word",
                      hyphens: "auto",
                      width: "100%",
                    }}
                  >
                    5 Things More Important for Your Content Than Content-Length
                    in 2018
                  </div>

                  <span
                    style={{
                      fontFamily: "Raleway",
                      fontStyle: "normal",
                      fontSize: "11.2px",
                      lineHeight: "22.4px",
                      textAlign: "left",
                      color: "#9B9B9B",
                    }}
                  >
                    User research is the reality check every project needs.
                    Here’s our guide to why you should be doing it — and how to
                    get started.
                  </span>
                </div>

                <img src="img11.png" alt="" width={380} />
              </div>
            );
          })}
        </InicioJumbotronVacinacaoCondominioInside>
      </InicioJumbotronVacinacaoCondominioWrapper2>
    </DefaultViewportAnimation>
  );
}

function InicioJumbotronExamesVacinacaoInfusao() {
  return (
    <InicioContainerExamesWrapper>
      <div
        style={{
          display: `flex`,
          position: `relative`,
          flexDirection: `row`,
          width: `min(100vw, 1360px)`,
          justifyContent: `space-around`,
          alignItems: `flex-start`,
          boxSizing: `border-box`,
        }}
        className={"flex flex-col md:flex-row py-12 md:py-36 "}
      >
        {[
          {
            title: "Exames",
            icon: "assets/images/bloodsample.png",
            description: `| Laboratoriais\n| Biologia Molecular\n\n`,
            cta: "Consultar Resultados",
          },
          {
            title: "Vacinação",
            icon: "assets/images/vaccine.png",
            description: `| Laboratoriais\n| Biologia Molecular\n| Populações Especiais`,
            cta: "Comprar | Agendar",
          },
          {
            title: "Infusão",
            icon: "assets/images/dropper.png",
            description: `| Imunobiológicos\n| Antibióticos\n| Reposição Vitamínica`,
            cta: "Enviar Prescrição Médica",
          },
        ].map((item) => (
          <HomeContainerExamesTile
            key={item.icon}
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              width: "100%",
            }}
            className={"py-8 md:py-0"}
          >
            <HomeContainerExamesIcon
              src={item.icon}
              loading="lazy"
              alt={"blood-sample 1"}
            />
            <Exames>{item.title}</Exames>
            <LaboratoriaisBiologi>{item.description}</LaboratoriaisBiologi>
            <div className="mt-8" />
            <DefaultButtonInk>
              <motion.button className="w-72 h-12">
                <div
                  className="flex items-center justify-center flex-1 h-full py-2.5 border rounded-lg border-red-500"
                  style={{
                    backgroundColor: "#2A060A",
                  }}
                >
                  <p className="text-base font-bold leading-relaxed text-center text-white">
                    {item.cta}
                  </p>
                </div>
              </motion.button>
            </DefaultButtonInk>
          </HomeContainerExamesTile>
        ))}
      </div>
    </InicioContainerExamesWrapper>
  );
}

function InicioJumbotronVacinacaoCondominio() {
  return (
    <DefaultViewportAnimation>
      <InicioJumbotronVacinacaoCondominioWrapper>
        <InicioJumbotronVacinacaoCondominioInside
          className={"flex-col-reverse  md:flex-row"}
        >
          <CColumn
            style={{
              alignItems: "flex-start",
            }}
          >
            <div key={1}>
              <span
                className={"text-5xl"}
                style={{
                  fontFamily: "Raleway",
                  fontWeight: "400",
                  lineHeight: "47px",
                  color: "#390B0B",
                }}
              >
                {"Navegue pelas"}
                <br className={"md:block"} />
                <span
                  style={{
                    borderBottom: "8px solid rgba(150, 25, 22)",
                  }}
                  className={"text-3xl md:text-5xl"}
                >
                  <span
                    style={{
                      fontFamily: "Raleway",
                      fontStyle: "normal",
                      fontWeight: "bold",
                      color: "#971916",
                    }}
                  >
                    {"Categorias"}
                  </span>
                </span>
              </span>
              <div
                style={{
                  height: "40px",
                }}
              ></div>{" "}
              <DefaultButtonGroup
                buttonLabels={["CATEGORIA X", "CATEGORIA Y", "CATEGORIA Z"]}
              />
            </div>
          </CColumn>
        </InicioJumbotronVacinacaoCondominioInside>
      </InicioJumbotronVacinacaoCondominioWrapper>
    </DefaultViewportAnimation>
  );
}

const InicioJumbotronVacinacaoCondominioInside = styled("div")({
  width: "min(100vw, 1366px)",
  height: "auto",
  display: "flex",
  justifyContent: "space-between",
  padding: "5rem 0",
});

const InicioJumbotronVacinacaoCondominioWrapper: any = styled("div")({
  backgroundColor: `rgba(255, 89, 85, 0.1)`,
  width: `100vw`,
  display: `flex`,
  justifyContent: `center`,
  alignItems: `center`,
});

const InicioJumbotronVacinacaoCondominioWrapper2: any = styled("div")({
  width: `100vw`,
  display: `flex`,
  justifyContent: `center`,
  alignItems: `center`,
});

const CRow: any = styled("div")({
  display: `flex`,
  flexDirection: `row`,
  flexWrap: `wrap`,
  justifyContent: `center`,
  alignItems: `center`,
});

const CColumn = styled("div")({
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
});

const InicioContainerExamesWrapper: any = styled("div")({
  backgroundColor: `rgba(25, 8, 8, 1)`,
  width: `100%`,
  display: `flex`,
  boxShadow: `0px 31px 36px rgba(0, 0, 0, 0.1)`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
  paddingTop: `10vh`,
});



const HomeContainerExamesTile: any = styled("div")({
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
  boxSizing: `border-box`,
});

const Exames: any = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Raleway`,
  fontWeight: `700`,
  fontSize: `60px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
});

const LaboratoriaisBiologi: any = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Raleway`,
  fontWeight: `400`,
  fontSize: `20px`,
  letterSpacing: `0.5px`,
  textDecoration: `none`,
  textTransform: `none`,
  left: `50px`,
  marginTop: `20px`,
  marginBottom: `20px`,
  top: `158px`,
});

const HomeContainerExamesIcon: any = styled("img")({
  height: `5rem`,
  objectFit: `cover`,
  left: `131px`,
  top: `0px`,
});

export default Blog;
