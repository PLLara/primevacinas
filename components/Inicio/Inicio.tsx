import React from "react";
import { styled } from "@mui/material/styles";
import Header from "components/Header/Header";
import { InicioProps } from "types";
import { motion } from "framer-motion";
import { DefaultViewportAnimation } from "./DefaultViewportAnimation";

function Inicio(props: InicioProps): JSX.Element {
  return (
    <InicioWrapper className={props.className}>
      <DefaultHeader />

      <InicioJumbotronExamesVacinacaoInfusao/>

      <DefaultViewportAnimation>
        <HomeOndeVoceEstiverContainer>
          <HomeOndeVoceEstiver>
            <HomeOndeVoceEstiverDetalheDireita>
              <Rectangle5></Rectangle5>
              <Rectangle30></Rectangle30>
            </HomeOndeVoceEstiverDetalheDireita>

            <HomeOndeVoceEstiverMain>
              <APrimeVaiOndeVocêEstSpan1>
                {`A `}
                <APrimeVaiOndeVocêEstSpan2>{`Prime`}</APrimeVaiOndeVocêEstSpan2>
                {` vai onde`}
                <br />
                {`você estiver`}
              </APrimeVaiOndeVocêEstSpan1>
              <HomeOndeVoceEstiverSublinhado />

              <HomeOndeVoceEstiverLorem className="mt-10">
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac velit turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac velit turpis.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac velit turpis.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac velit turpis.`}
              </HomeOndeVoceEstiverLorem>

              <motion.button
                className="w-72 h-12 mt-12"
                whileTap={{
                  scale: 0.98,
                }}
              >
                <div className="flex items-center justify-center flex-1 h-full py-3 px-12 bg-red-500 rounded-lg">
                  <p className="text-sm font-bold leading-snug text-white">
                    ENCONTRAR MAIS VACINAS
                  </p>
                </div>
              </motion.button>
            </HomeOndeVoceEstiverMain>
          </HomeOndeVoceEstiver>
        </HomeOndeVoceEstiverContainer>
      </DefaultViewportAnimation>

      <DefaultViewportAnimation>
        <Frame71>
          <Text>
            <H1>
              <VacinaçãoContraAGrip>
                <VacinaçãoContraAGripSpan1>{`Vacinação contra a gripe no seu `}</VacinaçãoContraAGripSpan1>
                <VacinaçãoContraAGripSpan2>{`Condomínio`}</VacinaçãoContraAGripSpan2>
              </VacinaçãoContraAGrip>
              <Rectangle141></Rectangle141>
            </H1>
            <LoremIpsumDolorSitAm1>
              {`lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit

Lorem ipsum dolor sit amet lorem ipsum dolor sit`}
            </LoremIpsumDolorSitAm1>
            <BotãoEncontrar1>
              <Rectangle194
                src={`assets/images/Inicio_Rectangle_19_4.png`}
                loading="lazy"
                alt={"Rectangle 19"}
              />
              <LeveProteçãoAoSeuCon>
                {`Leve proteção ao seu condomínio!`}
              </LeveProteçãoAoSeuCon>
            </BotãoEncontrar1>
          </Text>
          <Frame4>
            <ImagemCondomínio>{`Imagem - Condomínio`}</ImagemCondomínio>
          </Frame4>
          <Frame41>
            <ImagemEmpresa>{`Imagem - Empresa`}</ImagemEmpresa>
          </Frame41>
          {false && (
            <Lines>
              <Line4></Line4>
              <Line5></Line5>
              <Line6></Line6>
            </Lines>
          )}
        </Frame71>
      </DefaultViewportAnimation>

      <DefaultViewportAnimation>
        <Frame9>
          <Anualmente>
            <PorQueAVacinaContraA>
              <PorQueAVacinaContraASpan1>{`Por que a `}</PorQueAVacinaContraASpan1>
              <PorQueAVacinaContraASpan2>{`vacina contra a gripe`}</PorQueAVacinaContraASpan2>
              <PorQueAVacinaContraASpan3>{` deve ser tomada anualmente?`}</PorQueAVacinaContraASpan3>
            </PorQueAVacinaContraA>
            <OsVírusDaGripeSãoBas>
              <OsVírusDaGripeSãoBasSpan1>{`Os vírus da gripe são bastante inquietos. Essa “inquietação” do vírus leva a mutações constantes. Ou seja: `}</OsVírusDaGripeSãoBasSpan1>
              <OsVírusDaGripeSãoBasSpan2>{`a vacina que você tomou em um determinado ano não é capaz de garantir proteção para o ano seguinte,`}</OsVírusDaGripeSãoBasSpan2>
              <OsVírusDaGripeSãoBasSpan3>{` porque pequenas modificações (variações) sempre acontecem.`}</OsVírusDaGripeSãoBasSpan3>
            </OsVírusDaGripeSãoBas>
            <BotãoEncontrar2>
              <Rectangle195
                src={`assets/images/Inicio_Rectangle_19_5.png`}
                loading="lazy"
                alt={"Rectangle 19"}
              />
              <SolicitarProposta>{`Solicitar Proposta`}</SolicitarProposta>
            </BotãoEncontrar2>
            <Rectangle142></Rectangle142>
          </Anualmente>
        </Frame9>
      </DefaultViewportAnimation>

      <DefaultViewportAnimation>
        <Frame10>
          <PeçaAgora>
            <PeçaAgora1>{`Peça Agora!`}</PeçaAgora1>
            <Rectangle143></Rectangle143>
            <Frame11>
              <Rectangle15></Rectangle15>
              <Rectangle16></Rectangle16>
              <Rectangle17></Rectangle17>
            </Frame11>
            <BotãoEncontrar3>
              <motion.button
                className="w-72 h-12 mt-12"
                whileTap={{
                  scale: 0.98,
                }}
              >
                <div className="flex items-center justify-center flex-1 h-full py-3 px-12 bg-red-500 rounded-lg">
                  <p className="text-sm font-bold leading-snug text-white">
                    ENCONTRAR MAIS VACINAS
                  </p>
                </div>
              </motion.button>
            </BotãoEncontrar3>
            <Lines1>
              <Line41></Line41>
              <Line51></Line51>
              <Line61></Line61>
            </Lines1>
          </PeçaAgora>
        </Frame10>
      </DefaultViewportAnimation>

      <Frame12>
        <PlanoDeSaude>
          <UtilizeSeuPlanoDeSaú>
            <UtilizeSeuPlanoDeSaúSpan1>{`Utilize seu `}</UtilizeSeuPlanoDeSaúSpan1>
            <UtilizeSeuPlanoDeSaúSpan2>{`plano de saúde`}</UtilizeSeuPlanoDeSaúSpan2>
            <UtilizeSeuPlanoDeSaúSpan3>{` na Prime`}</UtilizeSeuPlanoDeSaúSpan3>
          </UtilizeSeuPlanoDeSaú>
          <AgoraVocêPodeFazerSe>
            {`Agora você pode fazer seus exames laboratoriais e infusões de medicamentos com a Prime, utilizando seu plano de saúde`}
          </AgoraVocêPodeFazerSe>
          <BotãoEncontrar4>
            <Rectangle197
              src={`assets/images/Inicio_Rectangle_19_7.png`}
              loading="lazy"
              alt={"Rectangle 19"}
            />
            <ConfiraOsPlanosCober>
              {`Confira os planos cobertos`}
            </ConfiraOsPlanosCober>
          </BotãoEncontrar4>
          <Rectangle144></Rectangle144>
        </PlanoDeSaude>
      </Frame12>
      <EmCasa>
        <Div>
          <Div1>
            <SaibaComoANossaVacin>
              {`Saiba como a nossa vacina chega até a sua casa`}
            </SaibaComoANossaVacin>
          </Div1>
          <Div2
            src={`assets/images/Inicio_div.png`}
            loading="lazy"
            alt={"div"}
          />
          <TrabalhamosComAsPrin>
            {`Trabalhamos com as principais fabricantes multinacionais de agentes imunizantes: GSK, MSD, Pfizer e Sanofi. As vacinas chegam até a Prime por meio de distribuidores nacionais, certificados habilitados para a função. 

Uma vez na Prime, ficam armazenadas em câmaras frias fixas da Indrel®️ - uma das mais conceituadas do mercado e específicas para armazenamento de vacinas. 

Com gerador próprio, que possui 48 horas de duração, elas garantem a qualidade das vacinas mesmo que haja queda de energia.`}
          </TrabalhamosComAsPrin>
          <Div3>
            <Svg
              src={`assets/images/Inicio_svg.png`}
              loading="lazy"
              alt={"svg"}
            />
            <Svg
              src={`assets/images/Inicio_svg.png`}
              loading="lazy"
              alt={"svg"}
              style={{
                transform: "rotate(180deg)",
              }}
            />
          </Div3>
        </Div>
      </EmCasa>
      <Blog>
        <Rectangle34
          src={`assets/images/Inicio_Rectangle_34.png`}
          loading="lazy"
          alt={"Rectangle 34"}
        />
        <Frame13>
          <Rec1>
            <LerMais>
              <LerMais1>{`Ler mais`}</LerMais1>
              <RightArrow11
                src={`assets/images/Inicio_right_arrow__1__1.png`}
                loading="lazy"
                alt={"right-arrow (1) 1"}
              />
            </LerMais>
            <Frame42>
              <Rectangle22></Rectangle22>
              <ImagemArtigo>{`Imagem - Artigo`}</ImagemArtigo>
              <AImportânciaDaVacina>
                {`A importância da Vacinação`}
              </AImportânciaDaVacina>
              <LoremIpsumDolorSitAm2>
                {`Lorem ipsum dolor sit amet lorem ipsum dolor sitlorem ipsum`}
              </LoremIpsumDolorSitAm2>
            </Frame42>
          </Rec1>
          <Rec11>
            <LerMais2>
              <LerMais3>{`Ler mais`}</LerMais3>
              <RightArrow111
                src={`assets/images/Inicio_right_arrow__1__1_1.png`}
                loading="lazy"
                alt={"right-arrow (1) 1"}
              />
            </LerMais2>
            <Frame43>
              <Rectangle221></Rectangle221>
              <ImagemArtigo1>{`Imagem - Artigo`}</ImagemArtigo1>
              <AImportânciaDaVacina1>
                {`A importância da Vacinação`}
              </AImportânciaDaVacina1>
              <LoremIpsumDolorSitAm3>
                {`Lorem ipsum dolor sit amet lorem ipsum dolor sitlorem ipsum`}
              </LoremIpsumDolorSitAm3>
            </Frame43>
          </Rec11>
          <Rec12>
            <LerMais4>
              <LerMais5>{`Ler mais`}</LerMais5>
              <RightArrow112
                src={`assets/images/Inicio_right_arrow__1__1_2.png`}
                loading="lazy"
                alt={"right-arrow (1) 1"}
              />
            </LerMais4>
            <Frame44>
              <Rectangle222></Rectangle222>
              <ImagemArtigo2>{`Imagem - Artigo`}</ImagemArtigo2>
              <AImportânciaDaVacina2>
                {`A importância da Vacinação`}
              </AImportânciaDaVacina2>
              <LoremIpsumDolorSitAm4>
                {`Lorem ipsum dolor sit amet lorem ipsum dolor sitlorem ipsum`}
              </LoremIpsumDolorSitAm4>
            </Frame44>
          </Rec12>
        </Frame13>
        <H11>
          <InformaçõesSobreSaúd>
            {`Informações sobre Saúde`}
          </InformaçõesSobreSaúd>
          <AcesseOBlog>{`Acesse o Blog`}</AcesseOBlog>
          <Rectangle145></Rectangle145>
        </H11>
      </Blog>
      <Rectangle35
        src={`assets/images/Inicio_Rectangle_35.png`}
        loading="lazy"
        alt={"Rectangle 35"}
      />
    </InicioWrapper>
  );
}
function InicioJumbotronExamesVacinacaoInfusao() {
  return (
    <InicioContainerExamesWrapper>
      <div
        style={{
          display: `flex`,
          justifyContent: `center`,
          alignItems: `center`,
          width: "100vw",
        }}
      >
        <InicioContainerExames>
          {[{
            title: "Exames",
            icon: "assets/images/Inicio_icon_1.png",
          },{
            title: "Vacinação",
            icon: "assets/images/Inicio_icon_2.png",
          },{
            title: "Infusão",
            icon: "assets/images/Inicio_icon_3.png",
          }].map((item, index) => (
            <DefaultViewportAnimation key={item.title}>
              <HomeContainerExamesTile>
                <BloodSample1
                  src={item.icon}
                  loading="lazy"
                  alt={"blood-sample 1"}
                />
                <Exames>{item.title}</Exames>
                <LaboratoriaisBiologi>
                  {`| Laboratoriais
  | Biologia Molecular`}
                </LaboratoriaisBiologi>

                <motion.button
                  className="w-72 h-12 mt-16"
                  whileTap={{
                    scale: 0.98,
                  }}
                  whileHover={{
                    scale: 1.02,
                  }}
                >
                  <div
                    className="flex items-center justify-center flex-1 h-full py-2.5 border rounded-lg border-red-500"
                    style={{
                      backgroundColor: "#2A060A",
                    }}
                  >
                    <p className="text-base font-bold leading-relaxed text-center text-white">
                      Consultar Resultados
                    </p>
                  </div>
                </motion.button>
              </HomeContainerExamesTile>
            </DefaultViewportAnimation>
          ))}
        </InicioContainerExames>
      </div>
    </InicioContainerExamesWrapper>
  );
}

const InicioWrapper: any = styled("div")({
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
});

const DefaultHeader: any = styled(Header)(({ theme }: any) => ({
  height: `105px`,
  margin: `0px`,
}));

const InicioContainerExamesWrapper: any = styled("div")({
  backgroundColor: `rgba(25, 8, 8, 1)`,
  boxShadow: `0px 31px 36px rgba(0, 0, 0, 0.1)`,
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `center`,
  height: `90vh`,
  paddingTop: `10vh`,
});

const InicioContainerExames: any = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: `1366px`,
  justifyContent: `space-around`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const HomeContainerExamesTile: any = styled("div")({
  display: `flex`,
  position: `relative`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `286px`,
  height: `299px`,
  margin: `0px`,
});

const MaskGroup: any = styled("img")({
  height: `768px`,
  width: `455px`,
  position: `absolute`,
  left: `84px`,
  top: `235px`,
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

const BloodSample1: any = styled("img")({
  height: `65px`,
  width: `25px`,
  objectFit: `cover`,
  left: `131px`,
  top: `0px`,
});

const Button1: any = styled("div")({
  display: `flex`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `286px`,
  height: `48px`,
  left: `0px`,
  top: `251px`,
});

const Rectangle19: any = styled("img")({
  height: `48px`,
  width: `286px`,
  left: `0px`,
  top: `0px`,
});

const ConsultarResultados: any = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `700`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `160.0000023841858%`,
  textTransform: `none`,
  left: `66px`,
  top: `11px`,
});

const HomeOndeVoceEstiverContainer: any = styled("div")({
  display: `flex`,
  justifyContent: `center`,
  alignItems: `center`,
  position: `relative`,
  padding: `71px 0px`,
});

const HomeOndeVoceEstiver: any = styled("div")({
  position: `relative`,
  height: `578px`,
  width: `1406px`,
});

const HomeOndeVoceEstiverDetalheDireita: any = styled("div")({
  position: `absolute`,
  width: `645px`,
  height: `566px`,
  right: `0px`,
});

const Rectangle5: any = styled("div")({
  backgroundColor: `rgba(157, 52, 52, 1)`,
  borderRadius: `250px 0px 0px 25px`,
  width: `645px`,
  height: `552px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Rectangle30: any = styled("div")({
  backgroundColor: `rgba(232, 201, 201, 1)`,
  borderRadius: `250px 250px 25px 25px`,
  width: `391px`,
  height: `463px`,
  position: `absolute`,
  left: `141px`,
  top: `103px`,
});

const HomeOndeVoceEstiverMain: any = styled("div")({
  display: `flex`,
  flexDirection: `column`,
});

const APrimeVaiOndeVocêEstSpan1: any = styled("span")({
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

const APrimeVaiOndeVocêEstSpan3: any = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(56, 58, 72, 1)`,
  fontStyle: `normal`,
  fontFamily: `Raleway`,
  fontWeight: `700`,
  fontSize: `48px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `127.90000438690186%`,
  textTransform: `none`,
});

const APrimeVaiOndeVocêEstSpan4: any = styled("span")({
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
  position: `absolute`,
  left: `0px`,
  top: `128px`,
  marginTop: "-10px",
});

const Frame71: any = styled("div")({
  backgroundColor: `rgba(255, 89, 85, 0.1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  boxSizing: `border-box`,
  height: `557px`,
  width: `1400px`,
  margin: `0px`,
});

const Text: any = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `492.2px`,
  height: `357.66px`,
  left: `113px`,
  top: `118px`,
});

const H1: any = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `492.2px`,
  height: `121px`,
  left: `0px`,
  top: `0px`,
});

const VacinaçãoContraAGripSpan1: any = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(57, 11, 11, 1)`,
  fontStyle: `normal`,
  fontFamily: `Raleway`,
  fontWeight: `400`,
  fontSize: `40px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
});

const VacinaçãoContraAGripSpan2: any = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(151, 25, 22, 1)`,
  fontStyle: `normal`,
  fontFamily: `Raleway`,
  fontWeight: `900`,
  fontSize: `40px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
});

const VacinaçãoContraAGrip: any = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: "unset",
  fontWeight: `400`,
  fontSize: `40px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `483.23px`,
  height: `121px`,
  position: `absolute`,
  left: `9px`,
  top: `0px`,
});

const Rectangle141: any = styled("div")({
  backgroundColor: `rgba(150, 25, 22, 1)`,
  border: `1px solid rgba(150, 25, 22, 0.5)`,
  boxSizing: `border-box`,
  width: `378.61px`,
  height: `9px`,
  position: `absolute`,
  left: `0px`,
  top: `110px`,
});

const LoremIpsumDolorSitAm1: any = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(57, 11, 11, 1)`,
  fontStyle: `normal`,
  fontFamily: `Raleway`,
  fontWeight: `300`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `364.66px`,
  height: `111px`,
  position: `absolute`,
  left: `14px`,
  top: `146px`,
});

const BotãoEncontrar1: any = styled("div")({
  boxShadow: `0px 0px 9px rgba(255, 89, 85, 0.5)`,
  borderRadius: `18px`,
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `284.96px`,
  height: `53.66px`,
  left: `0px`,
  top: `304px`,
});

const Rectangle194: any = styled("img")({
  height: `53.66px`,
  width: `284.96px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const LeveProteçãoAoSeuCon: any = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `900`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `160.0000023841858%`,
  textTransform: `none`,
  width: `230.16px`,
  height: `18px`,
  position: `absolute`,
  left: `28px`,
  top: `14px`,
});

const Frame4: any = styled("div")({
  backgroundColor: `rgba(54, 7, 7, 1)`,
  borderRadius: `26px`,
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `274.65px`,
  height: `444.76px`,
  left: `703px`,
  top: `56px`,
});

const ImagemCondomínio: any = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `700`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  height: `18px`,
  width: `141.48px`,
  margin: `0px`,
});

const Frame41: any = styled("div")({
  backgroundColor: `rgba(54, 7, 7, 1)`,
  borderRadius: `26px`,
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-end`,
  alignItems: `center`,
  padding: `137.287353515625px 0px`,
  boxSizing: `border-box`,
  width: `177.41px`,
  height: `287.29px`,
  left: `1029px`,
  top: `135px`,
});

const ImagemEmpresa: any = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `700`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  height: `12px`,
  width: `119.56px`,
  margin: `0px`,
});

const Lines: any = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `89.67px`,
  height: `0px`,
  left: `636px`,
  top: `401px`,
});

const Line4: any = styled("div")({
  border: `2px solid rgba(217, 217, 217, 1)`,
  width: `21.92px`,
  height: `0px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Line5: any = styled("div")({
  border: `2px solid rgba(255, 89, 85, 1)`,
  width: `21.92px`,
  height: `0px`,
  position: `absolute`,
  left: `34px`,
  top: `0px`,
});

const Line6: any = styled("div")({
  border: `2px solid rgba(217, 217, 217, 1)`,
  width: `21.92px`,
  height: `0px`,
  position: `absolute`,
  left: `68px`,
  top: `0px`,
});

const Frame9: any = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `115px 0px`,
  boxSizing: `border-box`,
  height: `584px`,
  width: `1366px`,
  margin: `0px`,
});

const Anualmente: any = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: `353.66px`,
  width: `758px`,
  margin: `0px`,
});

const PorQueAVacinaContraASpan1: any = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(56, 58, 72, 1)`,
  fontStyle: `normal`,
  fontFamily: `Raleway`,
  fontWeight: `400`,
  fontSize: `40px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
});

const PorQueAVacinaContraASpan2: any = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(56, 58, 72, 1)`,
  fontStyle: `normal`,
  fontFamily: `Raleway`,
  fontWeight: `900`,
  fontSize: `40px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
});

const PorQueAVacinaContraASpan3: any = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(56, 58, 72, 1)`,
  fontStyle: `normal`,
  fontFamily: `Raleway`,
  fontWeight: `400`,
  fontSize: `40px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
});

const PorQueAVacinaContraA: any = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(56, 58, 72, 1)`,
  fontStyle: `normal`,
  fontFamily: "unset",
  fontWeight: `400`,
  fontSize: `40px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `758px`,
  height: `121px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const OsVírusDaGripeSãoBasSpan1: any = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(56, 58, 72, 1)`,
  fontStyle: `normal`,
  fontFamily: `Raleway`,
  fontWeight: `300`,
  fontSize: `18px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `137.39999532699585%`,
  textTransform: `none`,
});

const OsVírusDaGripeSãoBasSpan2: any = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(56, 58, 72, 1)`,
  fontStyle: `normal`,
  fontFamily: `Raleway`,
  fontWeight: `700`,
  fontSize: `18px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `137.39999532699585%`,
  textTransform: `none`,
});

const OsVírusDaGripeSãoBasSpan3: any = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(56, 58, 72, 1)`,
  fontStyle: `normal`,
  fontFamily: `Raleway`,
  fontWeight: `300`,
  fontSize: `18px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `137.39999532699585%`,
  textTransform: `none`,
});

const OsVírusDaGripeSãoBas: any = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(56, 58, 72, 1)`,
  fontStyle: `normal`,
  fontFamily: "unset",
  fontWeight: `400`,
  fontSize: `18px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `137.39999532699585%`,
  textTransform: `none`,
  width: `646px`,
  height: `111px`,
  position: `absolute`,
  left: `56px`,
  top: `146px`,
});

const BotãoEncontrar2: any = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `286px`,
  height: `53.66px`,
  left: `238px`,
  top: `300px`,
});

const Rectangle195: any = styled("img")({
  height: `53.66px`,
  width: `286px`,
  position: `absolute`,
  borderRadius: `16px`,
  boxShadow: `0px 0px 5px rgba(255, 89, 85, 0.5)`,
  left: `0px`,
  top: `0px`,
});

const SolicitarProposta: any = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `900`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `160.0000023841858%`,
  textTransform: `none`,
  width: `231px`,
  height: `18px`,
  position: `absolute`,
  left: `28px`,
  top: `18px`,
});

const Rectangle142: any = styled("div")({
  backgroundColor: `rgba(150, 25, 22, 1)`,
  border: `1px solid rgba(150, 25, 22, 1)`,
  boxSizing: `border-box`,
  width: `458px`,
  height: `9px`,
  position: `absolute`,
  left: `150px`,
  top: `110px`,
});

const Frame10: any = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `1366px`,
  margin: `0px`,
});

const PeçaAgora: any = styled("div")({
  backgroundColor: `rgba(255, 248, 248, 1)`,
  borderRadius: `30px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: `476px`,
  width: `1079px`,
  margin: `0px`,
});

const PeçaAgora1: any = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(57, 11, 11, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `700`,
  fontSize: `40px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `891px`,
  height: `68px`,
  position: `absolute`,
  left: `81px`,
  top: `52px`,
});

const Rectangle143: any = styled("div")({
  backgroundColor: `rgba(150, 25, 22, 1)`,
  border: `1px solid rgba(150, 25, 22, 1)`,
  boxSizing: `border-box`,
  width: `237px`,
  height: `8px`,
  position: `absolute`,
  left: `72px`,
  top: `105px`,
});

const Frame11: any = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  left: `69px`,
  top: `171px`,
});

const Rectangle15: any = styled("div")({
  backgroundColor: `rgba(217, 217, 217, 1)`,
  borderRadius: `20px`,
  width: `289px`,
  height: `153px`,
  margin: `0px`,
});

const Rectangle16: any = styled("div")({
  backgroundColor: `rgba(217, 217, 217, 1)`,
  borderRadius: `20px`,
  width: `289px`,
  height: `153px`,
  margin: `0px 0px 0px 37px`,
});

const Rectangle17: any = styled("div")({
  backgroundColor: `rgba(217, 217, 217, 1)`,
  borderRadius: `20px`,
  width: `289px`,
  height: `153px`,
  margin: `0px 0px 0px 37px`,
});

const BotãoEncontrar3: any = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `286px`,
  height: `48px`,
  left: `69px`,
  top: `308px`,
});

const Rectangle196: any = styled("img")({
  height: `48px`,
  width: `286px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const EncontrarMaisVacinas1: any = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `700`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `160.0000023841858%`,
  textTransform: `none`,
  position: `absolute`,
  left: `52px`,
  top: `13px`,
});

const Lines1: any = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `90px`,
  height: `0px`,
  left: `495px`,
  top: `416px`,
});

const Line41: any = styled("div")({
  border: `2px solid rgba(217, 217, 217, 1)`,
  width: `22px`,
  height: `0px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Line51: any = styled("div")({
  border: `2px solid rgba(255, 89, 85, 1)`,
  width: `22px`,
  height: `0px`,
  position: `absolute`,
  left: `34px`,
  top: `0px`,
});

const Line61: any = styled("div")({
  border: `2px solid rgba(217, 217, 217, 1)`,
  width: `22px`,
  height: `0px`,
  position: `absolute`,
  left: `68px`,
  top: `0px`,
});

const Frame12: any = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: `366px`,
  width: `1366px`,
  margin: `0px`,
});

const PlanoDeSaude: any = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: `225.66px`,
  width: `758px`,
  margin: `0px`,
});

const UtilizeSeuPlanoDeSaúSpan1: any = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(56, 58, 72, 1)`,
  fontStyle: `normal`,
  fontFamily: `Raleway`,
  fontWeight: `400`,
  fontSize: `40px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
});

const UtilizeSeuPlanoDeSaúSpan2: any = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(56, 58, 72, 1)`,
  fontStyle: `normal`,
  fontFamily: `Raleway`,
  fontWeight: `900`,
  fontSize: `40px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
});

const UtilizeSeuPlanoDeSaúSpan3: any = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(56, 58, 72, 1)`,
  fontStyle: `normal`,
  fontFamily: `Raleway`,
  fontWeight: `400`,
  fontSize: `40px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
});

const UtilizeSeuPlanoDeSaú: any = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(56, 58, 72, 1)`,
  fontStyle: `normal`,
  fontFamily: "unset",
  fontWeight: `400`,
  fontSize: `40px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `758px`,
  height: `121px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const AgoraVocêPodeFazerSe: any = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(56, 58, 72, 1)`,
  fontStyle: `normal`,
  fontFamily: `Raleway`,
  fontWeight: `300`,
  fontSize: `18px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `137.39999532699585%`,
  textTransform: `none`,
  width: `646px`,
  height: `111px`,
  position: `absolute`,
  left: `56px`,
  top: `88px`,
});

const BotãoEncontrar4: any = styled("div")({
  boxShadow: `0px 0px 5px rgba(255, 89, 85, 0.5)`,
  borderRadius: `16px`,
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `286px`,
  height: `53.66px`,
  left: `238px`,
  top: `172px`,
});

const Rectangle197: any = styled("img")({
  height: `53.66px`,
  width: `286px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const ConfiraOsPlanosCober: any = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `900`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `160.0000023841858%`,
  textTransform: `none`,
  width: `231px`,
  height: `18px`,
  position: `absolute`,
  left: `28px`,
  top: `18px`,
});

const Rectangle144: any = styled("div")({
  backgroundColor: `rgba(150, 25, 22, 1)`,
  border: `1px solid rgba(150, 25, 22, 1)`,
  boxSizing: `border-box`,
  width: `678px`,
  height: `9px`,
  position: `absolute`,
  left: `40px`,
  top: `56px`,
});

const EmCasa: any = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `0px 23px 69px 23px`,
  boxSizing: `border-box`,
  height: `783px`,
  margin: `0px`,
  overflow: `hidden`,
});

const Div: any = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: `500px`,
  width: `1320px`,
  margin: `0px`,
});

const Div1: any = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `420px`,
  height: `500px`,
  left: `175px`,
  top: `14px`,
});

const SaibaComoANossaVacin: any = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(57, 11, 11, 1)`,
  fontStyle: `normal`,
  fontFamily: `Raleway`,
  fontWeight: `600`,
  fontSize: `38px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `48px`,
  textTransform: `none`,
  width: `399.33px`,
  height: `144px`,
  position: `absolute`,
  left: `-95px`,
  top: `0px`,
});

const Div2: any = styled("img")({
  height: `513px`,
  width: `513px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `709px`,
  top: `0px`,
});

const TrabalhamosComAsPrin: any = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(56, 58, 72, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `25px`,
  textTransform: `none`,
  width: `454px`,
  height: `372px`,
  position: `absolute`,
  left: `80px`,
  top: `182px`,
});

const Div3: any = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `420px`,
  height: `42px`,
  left: `80px`,
  top: `508px`,
});

const Svg: any = styled("img")({
  height: `42px`,
  width: `42px`,
  cursor: "pointer",
});

const Svg1: any = styled("div")({
  opacity: `0.5`,
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `42px`,
  height: `42px`,
  left: `63px`,
  top: `0px`,
  overflow: `hidden`,
});

const Frame: any = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `42px`,
  height: `42px`,
  left: `0px`,
  top: `0px`,
});

const Vector: any = styled("img")({
  height: `40.05px`,
  width: `40.16px`,
  position: `absolute`,
  left: `1px`,
  top: `1px`,
});

const Vector1: any = styled("img")({
  height: `1.69px`,
  width: `15.39px`,
  position: `absolute`,
  left: `19px`,
  top: `16px`,
});

const Vector2: any = styled("img")({
  height: `1.38px`,
  width: `15.36px`,
  position: `absolute`,
  left: `41px`,
  top: `28px`,
});

const Blog: any = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: `643px`,
  width: `1366px`,
  margin: `0px`,
});

const Rectangle34: any = styled("img")({
  height: `643px`,
  width: `1366px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Frame13: any = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `1141px`,
  left: `103px`,
  top: `220px`,
});

const Rec1: any = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `288px`,
  height: `332.16px`,
  margin: `0px`,
});

const LerMais: any = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-end`,
  alignItems: `center`,
  padding: `0px 2.9164886474609375px 0px 0px`,
  boxSizing: `border-box`,
  width: `85px`,
  height: `16.16px`,
  left: `176px`,
  top: `316px`,
});

const LerMais1: any = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(151, 25, 22, 1)`,
  fontStyle: `normal`,
  fontFamily: `Montserrat`,
  fontWeight: `500`,
  fontSize: `15px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `82.08px`,
  height: `16.16px`,
  margin: `0px`,
});

const RightArrow11: any = styled("img")({
  height: `5px`,
  width: `6px`,
  objectFit: `cover`,
  margin: `0px 0px 0px -3px`,
});

const Frame42: any = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `288px`,
  height: `324px`,
  left: `0px`,
  top: `0px`,
});

const Rectangle22: any = styled("div")({
  backgroundColor: `rgba(54, 7, 7, 1)`,
  borderRadius: `16px`,
  width: `288px`,
  height: `195px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const ImagemArtigo: any = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `700`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `109px`,
  height: `18px`,
  position: `absolute`,
  left: `90px`,
  top: `89px`,
});

const AImportânciaDaVacina: any = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(54, 7, 7, 1)`,
  fontStyle: `normal`,
  fontFamily: `Raleway`,
  fontWeight: `700`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `281px`,
  height: `20px`,
  position: `absolute`,
  left: `7px`,
  top: `208px`,
});

const LoremIpsumDolorSitAm2: any = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(18, 17, 17, 0.6)`,
  fontStyle: `normal`,
  fontFamily: `Raleway`,
  fontWeight: `300`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `162.8999948501587%`,
  textTransform: `none`,
  width: `266px`,
  height: `71px`,
  position: `absolute`,
  left: `7px`,
  top: `253px`,
});

const Rec11: any = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `288px`,
  height: `332.16px`,
  margin: `0px 0px 0px 134px`,
});

const LerMais2: any = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-end`,
  alignItems: `center`,
  padding: `0px 2.9164886474609375px 0px 0px`,
  boxSizing: `border-box`,
  width: `85px`,
  height: `16.16px`,
  left: `176px`,
  top: `316px`,
});

const LerMais3: any = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(151, 25, 22, 1)`,
  fontStyle: `normal`,
  fontFamily: `Montserrat`,
  fontWeight: `500`,
  fontSize: `15px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `82.08px`,
  height: `16.16px`,
  margin: `0px`,
});

const RightArrow111: any = styled("img")({
  height: `5px`,
  width: `6px`,
  objectFit: `cover`,
  margin: `0px 0px 0px -3px`,
});

const Frame43: any = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `288px`,
  height: `324px`,
  left: `0px`,
  top: `0px`,
});

const Rectangle221: any = styled("div")({
  backgroundColor: `rgba(54, 7, 7, 1)`,
  borderRadius: `16px`,
  width: `288px`,
  height: `195px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const ImagemArtigo1: any = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `700`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `109px`,
  height: `18px`,
  position: `absolute`,
  left: `90px`,
  top: `89px`,
});

const AImportânciaDaVacina1: any = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(54, 7, 7, 1)`,
  fontStyle: `normal`,
  fontFamily: `Raleway`,
  fontWeight: `700`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `281px`,
  height: `20px`,
  position: `absolute`,
  left: `7px`,
  top: `208px`,
});

const LoremIpsumDolorSitAm3: any = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(18, 17, 17, 0.6)`,
  fontStyle: `normal`,
  fontFamily: `Raleway`,
  fontWeight: `300`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `162.8999948501587%`,
  textTransform: `none`,
  width: `266px`,
  height: `71px`,
  position: `absolute`,
  left: `7px`,
  top: `253px`,
});

const Rec12: any = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `288px`,
  height: `332.16px`,
  margin: `0px 0px 0px 134px`,
});

const LerMais4: any = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-end`,
  alignItems: `center`,
  padding: `0px 2.9164886474609375px 0px 0px`,
  boxSizing: `border-box`,
  width: `85px`,
  height: `16.16px`,
  left: `176px`,
  top: `316px`,
});

const LerMais5: any = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(151, 25, 22, 1)`,
  fontStyle: `normal`,
  fontFamily: `Montserrat`,
  fontWeight: `500`,
  fontSize: `15px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `82.08px`,
  height: `16.16px`,
  margin: `0px`,
});

const RightArrow112: any = styled("img")({
  height: `5px`,
  width: `6px`,
  objectFit: `cover`,
  margin: `0px 0px 0px -3px`,
});

const Frame44: any = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `288px`,
  height: `324px`,
  left: `0px`,
  top: `0px`,
});

const Rectangle222: any = styled("div")({
  backgroundColor: `rgba(54, 7, 7, 1)`,
  borderRadius: `16px`,
  width: `288px`,
  height: `195px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const ImagemArtigo2: any = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `700`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `109px`,
  height: `18px`,
  position: `absolute`,
  left: `90px`,
  top: `89px`,
});

const AImportânciaDaVacina2: any = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(54, 7, 7, 1)`,
  fontStyle: `normal`,
  fontFamily: `Raleway`,
  fontWeight: `700`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `281px`,
  height: `20px`,
  position: `absolute`,
  left: `7px`,
  top: `208px`,
});

const LoremIpsumDolorSitAm4: any = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(18, 17, 17, 0.6)`,
  fontStyle: `normal`,
  fontFamily: `Raleway`,
  fontWeight: `300`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `162.8999948501587%`,
  textTransform: `none`,
  width: `266px`,
  height: `71px`,
  position: `absolute`,
  left: `7px`,
  top: `253px`,
});

const H11: any = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `492px`,
  height: `83px`,
  left: `104px`,
  top: `60px`,
});

const InformaçõesSobreSaúd: any = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(57, 11, 11, 1)`,
  fontStyle: `normal`,
  fontFamily: `Raleway`,
  fontWeight: `300`,
  fontSize: `40px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `484px`,
  height: `40px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const AcesseOBlog: any = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(57, 11, 11, 1)`,
  fontStyle: `normal`,
  fontFamily: `Raleway`,
  fontWeight: `700`,
  fontSize: `18px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `484px`,
  height: `20px`,
  position: `absolute`,
  left: `8px`,
  top: `63px`,
});

const Rectangle145: any = styled("div")({
  backgroundColor: `rgba(150, 25, 22, 1)`,
  border: `1px solid rgba(150, 25, 22, 1)`,
  boxSizing: `border-box`,
  width: `468px`,
  height: `9px`,
  position: `absolute`,
  left: `8px`,
  top: `49px`,
});

const Rectangle35: any = styled("img")({
  height: `456px`,
  width: `1366px`,
  margin: `0px`,
});

export default Inicio;
