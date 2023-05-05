/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import DefaultHeader from "components/Header/Header";
import { InicioProps } from "types";
import { motion } from "framer-motion";
import { DefaultViewportAnimation } from "./DefaultViewportAnimation";
import { DefaultButtonInk } from "../Header/DefaultButtonInk";
import SvgRectangles from "../../public/assets/images/retangulos.svg";
import Chevron from "../../public/assets/images/chevron.svg";
import Image from "next/image";
import { Carousel } from "rsuite";
import TinyCrossfade from "react-tiny-crossfade";

function Inicio(props: InicioProps): JSX.Element {
  return (
    <InicioWrapper className={props.className}>
      <DefaultHeader />

      <InicioJumbotronExamesVacinacaoInfusao />

      <InicioJumbotronPrimeOndeEstiver />

      <InicioJumbotronVacinacaoCondominio />

      <InicioJumbotronVacinaTomadaAnualmente />

      <InicioJumbotronPedirAgoraVacina />

      <InicioJumbotronUtilizePlanoSaude />

      <InicioJumbotronSaibaComo />

      <InicioJumbotronBlog />
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

function InicioJumbotronVacinaTomadaAnualmente() {
  return (
    <DefaultViewportAnimation>
      <div
        style={{
          width: "min(100vw, 1366px)",
        }}
        className={"hidden md:block"}
      >
        <CColumn className="py-28 text-center">
          <span
            style={{
              fontFamily: "Raleway",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: 40,
              textAlign: "center",
              color: "#383A48",
            }}
          >
            Por que a <b>vacina contra a gripe</b> deve
            <br />
            <span
              style={{
                borderBottom: ".7rem solid #961916",
              }}
            >
              ser tomada anualmente?
            </span>
          </span>

          <br />

          <span
            style={{
              fontFamily: "Raleway",
              fontStyle: "normal",
              fontWeight: 300,
              fontSize: "18px",
              lineHeight: "150.4%",
              textAlign: "center",
              color: "#383A48",
              width: "min(100vw, 42rem)",
            }}
          >
            Os vírus da gripe são bastante inquietos. Essa “inquietação” do
            vírus leva a mutações constantes.{" "}
            <b>
              Ou seja: a vacina que você tomou em um determinado ano não é capaz
              de garantir proteção para o ano seguinte,
            </b>
            porque pequenas modificações (variações) sempre acontecem.
          </span>
          <br />
          <br />
          <DefaultButton className="w-72">Solicitar proposta</DefaultButton>
        </CColumn>
      </div>
    </DefaultViewportAnimation>
  );
}

function InicioJumbotronUtilizePlanoSaude() {
  return (
    <DefaultViewportAnimation>
      <div className={"w-max flex flex-col align-middle justify-center"}>
        <div
          style={{
            maxWidth: "min(100vw, 700px)",
          }}
          className={
            "flex flex-col align-middle justify-center text-center py-24 px-6"
          }
        >
          <span
            style={{
              fontFamily: "Raleway",
              fontStyle: "normal",
              fontSize: 40,
              textAlign: "center",
              color: "#383A48",
              borderBottom: ".6rem solid #961916",
              // no break
              whiteSpace: "nowrap",
            }}
          >
            Utilize seu <b>plano de saúde</b> na Prime
          </span>

          <span
            style={{
              fontFamily: "Raleway",
              fontStyle: "normal",
              fontWeight: "300",
              fontSize: "18px",
              lineHeight: "137.4%",
              textAlign: "center",
              color: "#383A48",
            }}
            className={"py-6"}
          >
            Agora você pode fazer seus exames laboratoriais e infusões de
            medicamentos com a Prime, utilizando seu plano de saúde
          </span>

          <div>
            <DefaultButton className={"px-14"}>
              Confira os planos cobertos
            </DefaultButton>
          </div>
        </div>
      </div>
    </DefaultViewportAnimation>
  );
}

export function InicioJumbotronPedirAgoraVacina() {
  return (
    <DefaultViewportAnimation>
      <div
        style={{
          width: "min(100vw,1360px)",
          background: "#FFF8F8",
        }}
        className="md:px-28 md:py-10 rounded-2xl px-6 py-10"
      >
        <CColumn
          style={{
            alignItems: "flex-start",
          }}
        >
          <span
            style={{
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "40px",
              color: "#390B0B",
              borderBottom: ".6rem solid #961916",
            }}
          >
            Peça agora !
          </span>
          <InicioJumbotronPedirAgoraVacinaCarousel />
          <DefaultButton>ENCONTRAR MAIS VACINAS</DefaultButton>
        </CColumn>
      </div>
    </DefaultViewportAnimation>
  );
}

function InicioJumbotronPedirAgoraVacinaCarousel() {
  return (
    <CRow
      style={{
        width: "100%",
      }}
    >
      <Carousel
        placement={"bottom"}
        shape={"bar"}
        autoplayInterval={4000}
        style={{
          width: "100%",
          flex: "1",
          background: "transparent !important",
        }}
        className={"hidden md:block"}
      >
        {["a", "b", "c"].map((e) => (
          <Row
            key={e}
            style={{
              width: "100%",
              height: "100%",
              background: "transparent",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "nowrap",
              gap: "2rem",
            }}
          >
            <DefaultVacinas lista={["a", "b", "c"]} />
          </Row>
        ))}
      </Carousel>

      <Carousel
        placement={"bottom"}
        shape={"bar"}
        className={"block md:hidden"}
        autoplayInterval={4000}
        style={{
          width: "100%",
          flex: "1",
          background: "transparent !important",
        }}
      >
        {["a", "b", "c", "d", "e", "f", "g"].map((e) => (
          <Row
            key={e}
            style={{
              width: "100%",
              height: "100%",
              background: "transparent",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "nowrap",
              gap: "2rem",
            }}
          >
            <DefaultVacinas lista={["a"]} />
          </Row>
        ))}
      </Carousel>
    </CRow>
  );
}

function InicioJumbotronSaibaComo() {
  var [active, setActive] = useState(true);
  return (
    <DefaultViewportAnimation>
      <div
        style={{
          width: "100vw",
        }}
        className={"flex flex-row align-middle justify-center py-24"}
      >
        <div
          style={{
            width: "min(100vw, 1366px)",
          }}
          className={"flex flex-col md:flex-row justify-between px-6"}
        >
          <div
            className={"flex-1"}
            style={{
              flex: 2,
            }}
          >
            <TinyCrossfade>
              {active ? (
                <div key="dsds">
                  <span
                    style={{
                      fontFamily: "Raleway",
                      fontStyle: "normal",
                      fontWeight: 600,
                      fontSize: "38px",
                      lineHeight: "48px",
                      display: "flex",
                      alignItems: "center",
                      color: "#390B0B",
                    }}
                  >
                    Saiba como a nossa <br />
                    vacina chega até a <br />
                    sua casa
                  </span>
                  <br />
                  <br />
                  <span
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "25px",
                      display: "flex",
                      alignItems: "center",
                      color: "#383A48",
                    }}
                  >
                    Trabalhamos com as principais fabricantes multinacionais de
                    agentes imunizantes: GSK, MSD, Pfizer e Sanofi. As vacinas
                    chegam até a Prime por meio de distribuidores nacionais,
                    certificados habilitados para a função.
                    <br />
                    <br />
                    Uma vez na Prime, ficam armazenadas em câmaras frias fixas
                    da Indrel®️ - uma das mais conceituadas do mercado e
                    específicas para armazenamento de vacinas.
                    <br />
                    <br />
                    Com gerador próprio, que possui 48 horas de duração, elas
                    garantem a qualidade das vacinas mesmo que haja queda de
                    energia.
                    <br />
                    <br />
                  </span>
                </div>
              ) : (
                <div key="dsdsdsd">
                  <span
                    style={{
                      fontFamily: "Raleway",
                      fontStyle: "normal",
                      fontWeight: 600,
                      fontSize: "38px",
                      lineHeight: "48px",
                      display: "flex",
                      alignItems: "center",
                      color: "#390B0B",
                    }}
                  >
                    Saiba como a nossa <br />
                    vacina chega até a <br />
                    sua casa
                  </span>
                  <br />
                  <br />
                  <span
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "25px",
                      display: "flex",
                      alignItems: "center",
                      color: "#383A48",
                    }}
                  >
                    Trabalhamos com as principais fabricantes multinacionais de
                    agentes imunizantes: GSK, MSD, Pfizer e Sanofi. As vacinas
                    chegam até a Prime por meio de distribuidores nacionais,
                    certificados habilitados para a função.
                    <br />
                    <br />
                    Uma vez na Prime, ficam armazenadas em câmaras frias fixas
                    da Indrel®️ - uma das mais conceituadas do mercado e
                    específicas para armazenamento de vacinas.
                    <br />
                    <br />
                    Com gerador próprio, que possui 48 horas de duração, elas
                    garantem a qualidade das vacinas mesmo que haja queda de
                    energia.
                    <br />
                    <br />
                  </span>
                </div>
              )}
            </TinyCrossfade>

            <div>
              <Row
                className={"  w-min flex-nowrap"}
                style={{
                  border: "1px solid #FFACAA",
                  borderRadius: "999px",
                }}
              >
                <DefaultButtonInk
                  className={"text p-3"}
                  style={{
                    borderRadius: "999px 0 0 999px",
                  }}
                  onClick={() => {
                    setActive(!active);
                  }}
                >
                  <button className={"px-5 py-3"} style={{}}>
                    <Chevron />
                  </button>
                </DefaultButtonInk>

                <DefaultButtonInk
                  onClick={() => {
                    setActive(!active);
                  }}
                  className={"text p-3"}
                  style={{
                    borderRadius: "0 999px 999px 0",
                  }}
                >
                  <button className={"px-5 py-3"} style={{}}>
                    {" "}
                    <Chevron
                      style={{
                        transform: "rotate(180deg)",
                      }}
                    />
                  </button>
                </DefaultButtonInk>
              </Row>
            </div>
          </div>
          <div
            className={"flex-1 flex justify-end"}
            style={{
              flex: 3,
            }}
          >
            <TinyCrossfade className="component-wrapper">
              {active ? (
                <img src="assets/images/geladeira.png" key={"asd"}></img>
              ) : (
                <img
                  src="assets/images/potevacina.png"
                  key="dsa"
                  width={200}
                ></img>
              )}
            </TinyCrossfade>
          </div>
        </div>
      </div>
    </DefaultViewportAnimation>
  );
}

function InicioJumbotronBlog() {
  return (
    <DefaultViewportAnimation>
      <div
        className={"flex flex-col items-center justify-center"}
        style={{
          width: "100vw",
          background: "#FFEFEE",
        }}
      >
        <div
          className={"flex flex-col items-start justify-start py-16 px-6"}
          style={{
            width: "min(100vw, 1366px)",
          }}
        >
          <div>
            <span
              style={{
                fontFamily: "Raleway",
                fontStyle: "normal",
                fontWeight: "300",
                fontSize: "40px",
                lineHeight: "47px",
                textAlign: "center",
                color: "#390B0B",
                borderBottom: "8px solid  #961916",
              }}
            >
              Informações sobre Saúde
            </span>
            <br />
            <br />

            <span
              style={{
                fontFamily: "Raleway",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "18px",
                lineHeight: "21px",
                color: "#390B0B",
              }}
            >
              Acesse o Blog
            </span>
          </div>{" "}
          <CRow
            style={{
              width: "100%",
              justifyContent: "space-between",
            }}
            className={"py-12 gap-14 flex-col md:flex-row"}
          >
            {["asd", "dsa", "asdd"].map((e) => {
              return (
                <div key={e} className={"flex flex-col md:w-1/4"}>
                  <Row
                    style={{
                      backgroundColor: "#360707",
                      width: "100%",
                      height: "10rem",
                    }}
                    className={"rounded-xl"}
                  ></Row>
                  <div
                    style={{
                      fontFamily: "Raleway",
                      fontStyle: "normal",
                      fontWeight: 700,
                      fontSize: "20px",
                      lineHeight: "23px",
                      color: "#360707",
                    }}
                    className={"py-5"}
                  >
                    A importância da Vacinação
                  </div>
                  <div
                    style={{
                      fontFamily: "Raleway",
                      fontStyle: "normal",
                      fontWeight: 300,
                      fontSize: "14px",
                      lineHeight: "162.9%",
                      color: "rgba(18, 17, 17, 0.6)",
                    }}
                    className={"py-5"}
                  >
                    Lorem ipsum dolor sit amet lorem ipsum dolor sitlorem ipsum
                  </div>
                  <Row className={"flex justify-end"}>
                    <DefaultButtonInk
                      style={{
                        fontFamily: "Montserrat",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "15px",
                        lineHeight: "18px",
                        textAlign: "center",
                        color: "#971916",
                      }}
                    >
                      <button className={"p-2"}>{"Ler mais >"}</button>
                    </DefaultButtonInk>
                  </Row>
                </div>
              );
            })}
          </CRow>
        </div>
      </div>
    </DefaultViewportAnimation>
  );
}

function DefaultVacinas(props: { lista: string[] }) {
  return (
    <>
      {props.lista.map((e) => {
        return (
          <div
            key={e}
            style={{
              position: "relative",
              width: "100%",
              flex: 1,
            }}
            className={"max-w-100% md:max-w-30% "}
          >
            <img
              src="/assets/images/potevacina.png"
              alt=""
              width={57.6}
              height={146.4}
              style={{
                transform: "scale(1.4) translateX(20px)",
                transformOrigin: "bottom center",
                position: "absolute",
                zIndex: 10,
              }}
            />
            <DefaultButtonInk
              key={e}
              style={{
                overFlow: "visible !important",
                flex: 1,
                width: "100%",
              }}
            >
              <Row
                style={{
                  background: "white",
                  flexWrap: "nowrap",
                  alignItems: "end",
                  width: "100%",
                }}
                className={"rounded-xl"}
              >
                <Column
                  className="pl-32 pr-10 py-5"
                  style={{
                    flex: 1,
                    width: "100%",
                    justifyContent: "flex-start",
                  }}
                >
                  <div style={{}}>
                    <span
                      style={{
                        fontFamily: "Roboto",
                        fontWeight: 600,
                        fontSize: 14,
                        maxWidth: "10px",
                        whiteSpace: "pre-wrap",
                        textAlign: "left",
                      }}
                    >
                      <div>Vacina Quadrivalente da Gripe (Cepas 2023)</div>
                    </span>
                  </div>

                  <br />
                  <br />
                  <br />
                  <Row
                    style={{
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span>
                      <span
                        style={{
                          fontFamily: "Roboto",
                          fontStyle: "normal",
                          fontWeight: 700,
                          fontSize: "12px",
                          lineHeight: "24px",
                          color: "#FF5955",
                        }}
                      >
                        R$: &nbsp;&nbsp;
                      </span>
                      <span
                        style={{
                          fontFamily: "Roboto",
                          fontSize: 16,
                          color: "#212B36",
                        }}
                      >
                        120,00
                      </span>
                    </span>
                    <img src="assets/images/search.png" alt="" width={30} />
                  </Row>
                </Column>
              </Row>
            </DefaultButtonInk>
          </div>
        );
      })}
    </>
  );
}

function InicioJumbotronExamesVacinacaoInfusao() {
  return (
    <InicioContainerExamesWrapper>
      <InicioContainerExames
        className={"flex flex-col md:flex-row py-12 md:py-36 "}
      >
        {[
          {
            title: "Exames",
            icon: "assets/images/bloodsample.png",
            description: `\n| Laboratoriais\n| Biologia Molecular\n`,
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

            <DefaultButtonInk className="mt-12">
              <motion.button
                className="w-72 h-12"
                whileTap={{
                }}
              >
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
      </InicioContainerExames>
    </InicioContainerExamesWrapper>
  );
}

function InicioJumbotronPrimeOndeEstiver() {
  return (
    <DefaultViewportAnimation>
      <HomeOndeVoceEstiver className={"flex flex-col md:flex-row"}>
        {/*  */}
        <HomeOndeVoceEstiverMain className={"px-6 md:px-0"}>
          <HomeOndeVoceEstiverTextSpan>
            {`A `}
            <APrimeVaiOndeVocêEstSpan2>{`Prime`}</APrimeVaiOndeVocêEstSpan2>
            {` vai onde`}
            <br />
            {`você estiver`}
          </HomeOndeVoceEstiverTextSpan>
          <HomeOndeVoceEstiverSublinhado />

          <HomeOndeVoceEstiverLorem className="mt-10">
            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac velit turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac velit turpis.
\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac velit turpis.
\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac velit turpis.`}
          </HomeOndeVoceEstiverLorem>

          <div className={"flex align-bottom justify-center md:justify-start"}>
            <motion.button
              className="w-72 h-12 mt-12"
              whileTap={{
                scale: 0.98,
              }}
            >
              <DefaultButtonInk>
                <div
                  className="flex items-center justify-center flex-1 h-full py-3 px-12  rounded-lg"
                  style={{
                    background: "#C8524F",
                  }}
                >
                  <p className="text-sm font-bold leading-snug text-white">
                    ENCONTRAR MAIS VACINAS
                  </p>
                </div>
              </DefaultButtonInk>
            </motion.button>
          </div>
        </HomeOndeVoceEstiverMain>

        {/*  */}
        <div className={"hidden md:block"}>
          <SvgRectangles></SvgRectangles>
        </div>
      </HomeOndeVoceEstiver>
    </DefaultViewportAnimation>
  );
}

export function DefaultButton(props) {
  return (
    <DefaultButtonInk
      style={{
        color: "#FFFFFF",
        borderRadius: "18px",
      }}
      className={props.className}
    >
      <motion.button
        whileTap={{
          scale: 0.98,
        }}
        style={{
          filter: "drop-shadow(0px 0px 9px rgba(255, 89, 85, 0.5))",
          borderRadius: "18px",
          background: "#C8524F",
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: 900,
          fontSize: "14px",
          lineHeight: "160%",
          color: "#FFFFFF",
          width: "100%",
          padding: "1rem 2rem",
          ...props.style,
        }}
      >
        {props.children}
      </motion.button>
    </DefaultButtonInk>
  );
}

function InicioJumbotronVacinacaoCondominio() {
  const [selected, setSelected] = useState(1);
  return (
    <DefaultViewportAnimation>
      <InicioJumbotronVacinacaoCondominioWrapper>
        <InicioJumbotronVacinacaoCondominioInside
          className={"flex-col-reverse  md:flex-row px-6 "}
        >
          <CColumn
            style={{
              alignItems: "flex-start",
            }}
          >
            <TinyCrossfade>
              {selected == 1 ? (
                <div key={1}>
                  <span
                    style={{
                      fontFamily: "Raleway",
                      fontWeight: "400",
                      fontSize: "2.7rem",
                      lineHeight: "47px",
                      color: "#390B0B",
                    }}
                  >
                    {"Vacinação contra a gripe"}
                    <br className={"md:block"} />
                    <span
                      style={{
                        borderBottom: "8px solid rgba(150, 25, 22)",
                      }}
                      className={"text-4xl"}
                    >
                      {"no seu "}
                      <span
                        style={{
                          fontFamily: "Raleway",
                          fontStyle: "normal",
                          fontWeight: "bold",
                          color: "#971916",
                        }}
                      >
                        {"Condomínio"}
                      </span>
                    </span>
                  </span>
                  <br />
                  <br />
                  <br />
                  <span
                    style={{
                      paddingTop: "2rem",
                      fontFamily: "Raleway",
                      fontStyle: "normal",
                      fontWeight: 300,
                      fontSize: "1.2rem",
                      color: "#390B0B",
                    }}
                  >
                    {`lorem ipsum dolor sit amet lorem ipsum dolor sit`}
                    <br />
                    amet lorem ipsum dolor sit amet lorem ipsum dolor sit
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet lorem ipsum dolor sit
                  </span>

                  <div
                    style={{
                      height: "3rem",
                    }}
                  />
                  <div
                    className={
                      "flex justify-center w-max align-middle md:justify-start"
                    }
                    style={{
                      width: "100%",
                    }}
                  >
                    <DefaultButton>
                      Leve proteção ao seu condomínio!
                    </DefaultButton>
                  </div>
                </div>
              ) : (
                <div key={2}>
                  <span
                    style={{
                      fontFamily: "Raleway",
                      fontWeight: "400",
                      fontSize: "2.7rem",
                      lineHeight: "47px",
                      color: "#390B0B",
                    }}
                  >
                    {"Vacinação contra a gripe"}
                    <br className={"md:block"} />
                    <span
                      style={{
                        borderBottom: "8px solid rgba(150, 25, 22)",
                      }}
                      className={"text-4xl"}
                    >
                      {"no seu "}
                      <span
                        style={{
                          fontFamily: "Raleway",
                          fontStyle: "normal",
                          fontWeight: "bold",
                          color: "#971916",
                        }}
                      >
                        {"Condomínio"}
                      </span>
                    </span>
                  </span>
                  <br />
                  <br />
                  <br />
                  <span
                    style={{
                      paddingTop: "2rem",
                      fontFamily: "Raleway",
                      fontStyle: "normal",
                      fontWeight: 300,
                      fontSize: "1.2rem",
                      color: "#390B0B",
                    }}
                  >
                    {`lorem ipsum dolor sit amet lorem ipsum dolor sit`}
                    <br />
                    amet lorem ipsum dolor sit amet lorem ipsum dolor sit
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet lorem ipsum dolor sit
                  </span>

                  <div
                    style={{
                      height: "3rem",
                    }}
                  />
                  <div
                    className={
                      "flex justify-center w-max align-middle md:justify-start"
                    }
                    style={{
                      width: "100%",
                    }}
                  >
                    <DefaultButton>
                      Leve proteção ao seu condomínio!
                    </DefaultButton>
                  </div>
                </div>
              )}
            </TinyCrossfade>
          </CColumn>

          <CRow
            style={{
              flexWrap: "nowrap",
            }}
            className={"pb-12 md:pb-0"}
          >
            <motion.div
              whileHover={{
                scale: 1.03,
                boxShadow: "0px 0px 9px rgba(255, 89, 85, 0.5)",
              }}
              style={{
                borderRadius: "30px",
                overflow: "hidden",
                cursor: "pointer",
              }}
            >
              <img
                src="/assets/images/vacinacao1.png"
                alt="vacinacao"
                height={450}
                width={300}
                style={{
                  width: selected == 1 ? "300px" : "200px",
                  height: selected == 1 ? "450px" : "300px",
                  transitionDuration: "0.5s",
                }}
                onMouseEnter={() => {
                  setSelected(1);
                }}
              />
            </motion.div>
            <div
              style={{
                width: "3rem",
                height: "450px",
              }}
            />
            <motion.div
              whileHover={{
                scale: 1.03,
                boxShadow: "0px 0px 9px rgba(255, 89, 85, 0.5)",
              }}
              style={{
                borderRadius: "30px",
                overflow: "hidden",
                cursor: "pointer",
              }}
            >
              <img
                src="/assets/images/vacinacao2.png"
                alt="vacinacao"
                height={450}
                width={300}
                style={{
                  width: selected == 2 ? "300px" : "200px",
                  height: selected == 2 ? "450px" : "300px",
                  transitionDuration: "0.5s",
                }}
                onMouseEnter={() => {
                  setSelected(2);
                }}
              />
            </motion.div>
          </CRow>
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

const Row: any = styled("div")({
  display: `flex`,
  flexDirection: `row`,
  flexWrap: `wrap`,
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
const Column = styled("div")({
  display: `flex`,
  flexDirection: `column`,
});

export const InicioWrapper: any = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  width: "100%",
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
  height: "auto",
  minHeight: "100vh",
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

const InicioContainerExames: any = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: `min(100vw, 1360px)`,
  justifyContent: `space-around`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const HomeContainerExamesTile: any = styled("div")({
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
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
  top: `158px`,
});

const HomeContainerExamesIcon: any = styled("img")({
  height: `5rem`,
  objectFit: `cover`,
  left: `131px`,
  top: `0px`,
});

const HomeOndeVoceEstiver: any = styled("div")({
  margin: `71px 0px`,
  position: `relative`,
  width: `min(100vw, 1360px)`,
  display: `flex`,
  justifyContent: `space-between`,
});

const HomeOndeVoceEstiverMain: any = styled("div")({
  display: `flex`,
  flexDirection: `column`,
});

const HomeOndeVoceEstiverTextSpan: any = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(56, 58, 72, 1)`,
  fontStyle: `normal`,
  fontFamily: `Raleway`,
  fontWeight: `300`,
  fontSize: `48px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `127.90000438690186%`,
  textTransform: `none`,
});

const APrimeVaiOndeVocêEstSpan2: any = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(151, 25, 22, 1)`,
  fontStyle: `normal`,
  fontFamily: `Raleway`,
  fontWeight: `700`,
  fontSize: `48px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `127.90000438690186%`,
  textTransform: `none`,
});

const HomeOndeVoceEstiverLorem: any = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(56, 58, 72, 1)`,
  fontStyle: `normal`,
  fontFamily: `Raleway`,
  fontWeight: `400`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `137.4000072479248%`,
  textTransform: `none`,
  width: `406px`,
  height: `267px`,
  left: `9px`,
  top: `175px`,
});

const HomeOndeVoceEstiverSublinhado: any = styled("div")({
  backgroundColor: `rgba(150, 25, 22, 1)`,
  border: `1px solid rgba(150, 25, 22, 1)`,
  boxSizing: `border-box`,
  width: `295px`,
  height: `8px`,
  marginTop: "-5spx",
});

export const Rectangle35: any = styled("img")({
  height: `456px`,
  width: `1366px`,
  margin: `0px`,
});

export default Inicio;
