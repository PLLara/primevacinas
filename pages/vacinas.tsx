/* eslint-disable @next/next/no-img-element */
import styled from "@emotion/styled";
import { DefaultButtonInk } from "components/Header/DefaultButtonInk";
import { DefaultButton } from "components/Inicio/Inicio";
import { DefaultColors } from "components/global/global";
import Link from "next/link";
import { HeaderProps, IconButton, Dropdown, Row } from "rsuite";
import VacinasPrincipalImagem from "../public/assets/images/vacinasprincipal.svg";
import { DefaultViewportAnimation } from "components/Inicio/DefaultViewportAnimation";

export default function Vacinas() {
  return (
    <div>
      <DefaultHeader />
      <div>
        <VacinasPrincipal />
        <VacinasVacinas />
      </div>
      <DefaultButton>enviar</DefaultButton>
    </div>
  );
}

function VacinasVacinas() {
  return (
    <div
      style={{
        width: "100vw",
        paddingTop: "10rem",
      }}
      className={"flex w-max flex-Column justify-center items-center"}
    >
      <div
        className={"flex flex-row justify-between"}
        style={{
          width: "min(100vw, 1440px)",
        }}
      >
        <div
          style={{
            width: "400px",
          }}
          className="hidden md:flex"
        >
          <div
            className={"mr-16 py-7"}
            style={{
              border: "1px solid #ECECEC",
              borderRadius: "10px",
            }}
          >
            {/*  */}
            <h2
              className={"pl-5"}
              style={{
                fontFamily: "Raleway",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "20px",
                lineHeight: "21px",
                display: "flex",
                alignItems: "center",
                textTransform: "uppercase",
                color: "#FF5955",
              }}
            >
              Vacinas
            </h2>
            <hr
              color="#FF4445"
              style={{
                height: "3px",
              }}
            />
            <ul className={"pl-5 pt-5"}>
              {[
                "Crianças",
                "Adolescentes",
                "Adultos",
                "Idosos",
                "Ocupacional",
                "Viajantes",
                "Influenza (Gripe)",
                "COVID-19",
                "Pacientes Oncológicos",
                "Em Tratamento Com Imunossupressores",
              ].map((item) => {
                return (
                  <div
                    key={item}
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <DefaultButtonInk key="item" className={""}>
                      <li
                        className={
                          "flex flex-row items-center justify-start py-2"
                        }
                      >
                        <input
                          type="radio"
                          name="a"
                          id={"a" + item}
                          style={{
                            width: "16px",
                            height: "16px",
                          }}
                        />
                        <label
                          htmlFor={"a" + item}
                          style={{
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <img
                            src={"assets/images/" + item + ".png"}
                            alt=""
                            width={20}
                            style={{
                              marginLeft: "12px",
                              marginRight: "8px",
                            }}
                          />
                          {item}
                        </label>
                      </li>
                    </DefaultButtonInk>
                    <br />
                  </div>
                );
              })}
            </ul>
            {/*  */}
            <h2
              className={"pl-5 pt-8"}
              style={{
                fontFamily: "Raleway",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "20px",
                lineHeight: "21px",
                display: "flex",
                alignItems: "center",
                textTransform: "uppercase",
                color: "#FF5955",
              }}
            >
              Centro de infusão
            </h2>
            <hr
              color="#FF4445"
              style={{
                height: "3px",
              }}
            />
            <ul className={"pl-5 pt-5"}>
              {["Crianças", "Adolescentes", "Adultos"].map((item) => {
                return (
                  <>
                    <DefaultButtonInk key="item" className={""}>
                      <li
                        className={
                          "flex flex-row items-center justify-start py-2"
                        }
                      >
                        <input
                          type="radio"
                          name="b"
                          id={"b" + item}
                          style={{
                            width: "16px",
                            height: "16px",
                          }}
                        />
                        &nbsp;&nbsp; &nbsp;
                        <img
                          src={"assets/images/" + item + ".png"}
                          alt=""
                          width={20}
                        />
                        &nbsp;&nbsp;
                        <label htmlFor={"b" + item}>{item}</label>
                      </li>
                    </DefaultButtonInk>
                    <br />
                  </>
                );
              })}
            </ul>
            {/*  */}
            <h2
              className={"pl-5 pt-8"}
              style={{
                fontFamily: "Raleway",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "20px",
                lineHeight: "21px",
                display: "flex",
                alignItems: "center",
                textTransform: "uppercase",
                color: "#FF5955",
              }}
            >
              Exames
            </h2>
            <hr
              color="#FF4445"
              style={{
                height: "3px",
              }}
            />
            <ul className={"pl-5 pt-5"}>
              {["Crianças", "Adolescentes", "Adultos"].map((item) => {
                return (
                  <>
                    <DefaultButtonInk key="item" className={""}>
                      <li
                        className={
                          "flex flex-row items-center justify-start py-2"
                        }
                      >
                        <input
                          type="radio"
                          name="c"
                          id={"c" + item}
                          style={{
                            width: "16px",
                            height: "16px",
                          }}
                        />
                        &nbsp;&nbsp; &nbsp;
                        <img
                          src={"assets/images/" + item + ".png"}
                          alt=""
                          width={20}
                        />
                        &nbsp;&nbsp;
                        <label htmlFor={"c" + item}>&nbsp;&nbsp;{item}</label>
                      </li>
                    </DefaultButtonInk>
                    <br />
                  </>
                );
              })}
            </ul>
          </div>
        </div>

        <div
          style={{
            flex: 1,
          }}
          className=""
        >
          <div
            style={{
              display: "grid",
              gap: "5rem",
            }}
            className="grid-cols-1 md:grid-cols-2 content-center"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((item) => {
              return (
                <DefaultViewportAnimation key={item}>
                  <div
                    key={item}
                    style={{
                      maxWidth: "380px",
                      margin: "0 auto",
                    }}
                  >
                    <div
                      style={{
                        background: "#FFF5F5",
                        display: "flex",
                      }}
                      className={"p-5 rounded-xl"}
                    >
                      <img
                        src="assets/images/potevacina.png"
                        alt=""
                        width={50}
                        style={{
                          transform: "scale(1.4)",
                          transformOrigin: "bottom center",
                        }}
                      />
                      <div
                        className={"pl-10"}
                        style={{
                          fontFamily: "Roboto",
                          fontStyle: "normal",
                          fontWeight: "600",
                          fontSize: "14px",
                          color: "#3B3B3B",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                        }}
                      >
                        <div>Vacina Quadrivalente da Gripe (Cepas 2023)</div>
                        <div>
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
                          <br />
                          <div
                            style={{
                              display: "flex",
                              width: "100%",
                            }}
                          >
                            <DefaultButton
                              style={{
                                padding: "0.5rem 1rem",
                                width: "200px",
                              }}
                            >
                              Saiba mais
                            </DefaultButton>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </DefaultViewportAnimation>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function VacinasPrincipal() {
  return (
    <DefaultViewportAnimation>
      <div
        style={{
          backgroundColor: "#190808",
          paddingTop: "25vh",
          paddingBottom: "50px",
          width: "100vw",
        }}
        className={"flex w-max flex-Column justify-center items-center"}
      >
        <div
          className={"flex flex-row"}
          style={{
            width: "min(100vw, 1440px)",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "Raleway",
                fontStyle: "normal",
                fontWeight: 300,
                fontSize: "3rem",
                color: "white",
                maxWidth: "80%",
              }}
            >
              Lorem ipsum dolor sit amet, <b>consectetur adipiscing elit.</b>{" "}
              Etiam ac velit turpis.
            </div>

            <div
              style={{
                fontFamily: "Raleway",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "20px",
                lineHeight: "137.4%",
                color: "rgba(255, 255, 255, 0.7)",
                maxWidth: "50%",
                paddingTop: "3rem",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac
              velit turpis. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Etiam ac velit turpis.
            </div>
          </div>
        </div>
      </div>
    </DefaultViewportAnimation>
  );
}

function DefaultHeader(props: HeaderProps): JSX.Element {
  return (
    <Header1 className={props.className}>
      <div className={"flex flex-col justify-between "}>
        <div
          style={{
            width: "min(100vw, 1440px)",
            position: "relative",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
          className={"px-10 py-5"}
        >
          <div
            className={"flex flex-row justify-between w-max"}
            style={{
              width: "100%",
            }}
          >
            <DefaultButtonInk>
              <Link href="/">
                <HeaderLogo
                  src={`assets/images/logo/text.png`}
                  loading="lazy"
                  alt={"logo"}
                  style={{
                    width: "100%",
                  }}
                />
              </Link>
            </DefaultButtonInk>

            <form
              action=""
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid #971916",
                borderRadius: "10px",
                overflow: "hidden",
                width: "80%",
                paddingLeft: "1rem",
              }}
            >
              <input
                placeholder="Buscar Vacinas..."
                type="text"
                style={{
                  width: "100%",
                  height: "100%",
                  padding: "1rem",
                  outline: "none",
                }}
              />
              <div
                style={{
                  height: "60%",
                  width: "2px",
                  backgroundColor: "#971916",
                  borderRadius: "10px",
                }}
              />

              <DefaultButtonInk>
                <img
                  src="assets/images/lupa.png"
                  alt=""
                  style={{
                    height: "2rem",
                    margin: "0.5rem",
                    paddingRight: "1rem",
                  }}
                />
              </DefaultButtonInk>
            </form>
          </div>
        </div>
        <div
          style={{
            height: `1px`,
            width: `100%`,
            backgroundColor: `rgba(0, 0, 0, 0.1)`,
            transform: `scaleX(2)`,
          }}
        ></div>
        <Opções className={"hidden md:flex"}>
          <CustomDropdown
            title="A Prime"
            trigger={["click"]}
            items={[
              "item de menu 1",
              "item de menu 2",
              "item de menu 3",
              "item de menu 4",
            ]}
          />
          <CustomDropdown
            title="Exames"
            trigger={["click"]}
            items={[
              "item de menu 1",
              "item de menu 2",
              "item de menu 3",
              "item de menu 4",
            ]}
          />
          {[
            {
              text: "Calendário \nde vacinas",
              link: "https://www.primevacinas.com.br/calendario-de-vacinas",
              isDown: false,
            },
            // preços das vacinas
            {
              text: "Preços das vacinas\n & pacotes",
              link: "https://www.primevacinas.com.br/precos-das-vacinas",
              isDown: false,
            },
            {
              text: "Planos de saúde & livre\n escolha (reembolso)",
              link: "https://www.primevacinas.com.br/planos-de-saude-livre-escolha-reembolso",
              isDown: false,
            },
            {
              text: "Blog",
              link: "https://www.primevacinas.com.br/blog",
              isDown: false,
            },
          ].map((e) => (
            <HomeNavButton key={e.text}>{[e.text]}</HomeNavButton>
          ))}
        </Opções>
      </div>
    </Header1>
  );
}

const renderIconButton = (props, ref, a) => {
  return (
    <IconButton
      {...props}
      ref={ref}
      onClick={() => {
        window.location.href = "/vacinas";
      }}
      icon={
        <div
          style={{
            // row
            display: `flex`,
            flexDirection: `row`,
          }}
        >
          {a}
          <HomeArrowDown
            src={`assets/images/Header_right_arrow__1__1.png`}
            loading="lazy"
            alt={"right-arrow (1) 1"}
          />
        </div>
      }
      style={{
        textAlign: `center`,
        whiteSpace: `pre-wrap`,
        fontSynthesis: `none`,
        color: `rgba(151, 25, 22, 1)`,
        fontStyle: `normal`,
        fontFamily: `Montserrat`,
        fontWeight: `500`,
        fontSize: `15px`,
        letterSpacing: `0px`,
        background: `none`,
      }}
    />
  );
};

const CustomDropdown = ({ ...props }) => (
  <Dropdown
    {...props}
    renderToggle={(a, b) => renderIconButton(a, b, props.title)}
  >
    {props.items.map((e) => (
      <Dropdown.Item
        key={e}
        style={{
          color: DefaultColors.primary,
        }}
      >
        {e}
      </Dropdown.Item>
    ))}
  </Dropdown>
);

function HeaderSpacing() {
  return (
    <>
      <div
        style={{
          width: "25px",
        }}
      />
      <div
        style={{
          display: `flex`,
          flexDirection: `column`,
          justifyContent: `center`,
          alignItems: `center`,
          padding: `0px`,
          boxSizing: `border-box`,
          height: `60px`,
          backgroundColor: DefaultColors.primary,
          width: `2px`,
        }}
      />
      <div
        style={{
          width: "25px",
        }}
      />
    </>
  );
}

function HomeNavButton(props) {
  return (
    <IconButton
      style={{
        textAlign: `center`,
        whiteSpace: `pre-wrap`,
        color: `rgba(151, 25, 22, 1)`,
        fontFamily: `Montserrat`,
        fontWeight: `500`,
        fontSize: `15px`,
        backgroundColor: "transparent",
        padding: 8,
      }}
    >
      {props.children}
    </IconButton>
  );
}

const Header1: any = styled("div")({
  boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
  display: `flex`,
  position: `fixed`,
  zIndex: 1,
  backgroundColor: `white`,
  width: "100vw",
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
});

const HeaderLogo: any = styled("img")({});

const Opções: any = styled("div")({
  display: `flex`,
  flex: 1,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `space-between`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  left: `291px`,
  top: `37px`,
});

const HomeArrowDown: any = styled("img")({
  marginTop: "5px",
  marginLeft: "5px",
  width: `9.24px`,
  objectFit: `contain`,
  left: `89px`,
  transform: `rotate(90deg)`,
});

const Line2: any = styled("img")({
  height: `0px`,
  position: `absolute`,
  left: `0px`,
  top: `105px`,
});
