/**********************************************************************
 *
 *   Component generated by Quest
 *
 *   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts.
 *   To preseve that abilty, always export from Quest to regenerate this file.
 *   To setup props, bindings and actions, use the Quest editor
 *   Code Logic goes in the hook associated with this component
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from 'react';
import { styled } from '@mui/material/styles';
import { HeaderProps } from 'types';


function Header(props: HeaderProps): JSX.Element {
  return (
    <Header1 className={props.className}>
      <div style={{
        width: '1366px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <PrimevacinasVacinaca
     
          src={`assets/images/Header_primevacinas_vacinacao_aplicacao_de_vacinas_imunisacao_de_criancas_calendario_de.png`}
          loading="lazy"
          alt={
            'primevacinas-vacinacao-aplicacao-de-vacinas-imunisacao-de-criancas-calendario-de-vacinacao-logo 1'
          }
        />
        <div style={{
          width:'50px'
        }}>

        </div>

        <Opções>
          {
            [
              {
                text: 'A prime',
                link: 'https://www.primevacinas.com.br/',
                isDown: true
              },
              {
                text: "Exames",
                link: 'https://www.primevacinas.com.br/exames',
                isDown: true
              },
              {
                text: "Calendário \nde vacinas",
                link: 'https://www.primevacinas.com.br/calendario-de-vacinas',
                isDown: false
              },
              // preços das vacinas
              {
                text: "Preços das vacinas",
                link: 'https://www.primevacinas.com.br/precos-das-vacinas',
                isDown: false
              },
              {
                text: "Planos de saúde & livre\n escolha (reembolso)",
                link: 'https://www.primevacinas.com.br/planos-de-saude-livre-escolha-reembolso',
                isDown: false
              },
              {
                text: "Blog",
                link: 'https://www.primevacinas.com.br/blog',
                isDown: false
              },
            ].map(e => <HomeNavOption>
              <HomeNavButton>{[e.text]}</HomeNavButton>
              {
                e.isDown &&
                <HomeArrowDown
                  src={`assets/images/Header_right_arrow__1__1.png`}
                  loading="lazy"
                  alt={'right-arrow (1) 1'}
                />
              }
            </HomeNavOption>)
          }

        </Opções>

        <Line2
          src={`assets/images/Header_Line_2.png`}
          loading="lazy"
          alt={'Line 2'}
        />
      </div>

    </Header1>
  );
}

export default Header;



const Header1: any = styled('div')({
  boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
  display: `flex`,
  position: `fixed`,
  zIndex: 1,
  backgroundColor: `white`,
  width: '100vw',
  isolation: `isolate`,
  flexDirection: `row`,
  height: `105px`,
  justifyContent: `center`,
  alignItems: `cemter`,
  padding: `0px`,
  boxSizing: `border-box`,
});

const HeaderRec: any = styled('img')({
  height: `105px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Line3: any = styled('div')({
  border: `1px solid rgba(151, 25, 22, 0.5)`,
  width: `65px`,
  height: `0px`,
  position: `absolute`,
  left: `299px`,
  top: `57px`,
});

const PrimevacinasVacinaca: any = styled('img')({
  height: `48px`,
  width: `165px`,
  objectFit: `cover`,
  left: `65px`,
  top: `32px`,
});

const Opções: any = styled('div')({
  display: `flex`,
  flex: 1,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `space-between`,
  alignItems: `space-between`,
  padding: `0px`,
  boxSizing: `border-box`,
  left: `291px`,
  top: `37px`,
});

const HomeNavOption: any = styled('button')({
  display: `flex`,
});

const HomeArrowDown: any = styled('img')({
  marginTop:'5px',
  marginLeft: '5px',
  width: `9.24px`,
  objectFit: `cover`,
  left: `89px`,
  top: `8px`,
  transform: `rotate(90deg)`,
});

const HomeNavButton: any = styled('div')({
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
  width: `100%`,
  left: `0px`,
  top: `0px`,
});

const Opção11: any = styled('button')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `95.82px`,
  height: `16.16px`,
  left: `149px`,
  top: `0px`,
});

const RightArrow111: any = styled('img')({
  height: `9.24px`,
  width: `9.24px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `96px`,
  top: `16px`,
});

const Exames: any = styled('div')({
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
  width: `88.89px`,
  height: `16.16px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const CalendárioDeVacinas: any = styled('button')({
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
  width: `88.89px`,
  height: `33.25px`,
  position: `absolute`,
  left: `305px`,
  top: `0px`,
});

const PreçosDasVacinasPaco: any = styled('button')({
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
  width: `148.89px`,
  height: `33.55px`,
  position: `absolute`,
  left: `454px`,
  top: `0px`,
});

const PlanosDeSaúdeLivreEs: any = styled('button')({
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
  width: `191.89px`,
  height: `42.99px`,
  position: `absolute`,
  left: `664px`,
  top: `0px`,
});

const Blog: any = styled('button')({
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
  width: `37.57px`,
  height: `16.16px`,
  position: `absolute`,
  left: `916px`,
  top: `0px`,
});

const Line2: any = styled('img')({
  height: `0px`,
  position: `absolute`,
  left: `0px`,
  top: `105px`,
});