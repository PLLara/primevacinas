import React from 'react';
import { styled } from '@mui/material/styles';
import { HeaderProps } from 'types';
import { Dropdown, IconButton } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import { DefaultColors } from 'components/global/global';

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
        <HeaderSpacing />
        <Opções>
          <CustomDropdown title="A Prime" trigger={['click']} items={[
            'item de menu 1',
            'item de menu 2',
            'item de menu 3',
            'item de menu 4',
          ]} />
          <CustomDropdown title="Exames" trigger={['click']}items={[
            'item de menu 1',
            'item de menu 2',
            'item de menu 3',
            'item de menu 4',
          ]} />
          {
            [
              {
                text: "Calendário \nde vacinas",
                link: 'https://www.primevacinas.com.br/calendario-de-vacinas',
                isDown: false
              },
              // preços das vacinas
              {
                text: "Preços das vacinas\n & pacotes",
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
            ].map(e => <HomeNavButton>{[e.text]}</HomeNavButton>)
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

const renderIconButton = (props, ref, a) => {
  return (
    <IconButton {...props} ref={ref} icon={<div style={{
      // row
      display: `flex`,
      flexDirection: `row`,
    }}>{a}<HomeArrowDown
        src={`assets/images/Header_right_arrow__1__1.png`}
        loading="lazy"
        alt={'right-arrow (1) 1'}
      /></div>} style={
        {
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
        }
      } />
  );
};

const CustomDropdown = ({ ...props }) => (
  <Dropdown {...props}
    renderToggle={(a, b) => renderIconButton(a, b, props.title)}
  >
    {
      props.items.map(e => <Dropdown.Item key={e} style={{
        color: DefaultColors.primary
      }}>{e}</Dropdown.Item>)
    }

  </Dropdown>
);

function HeaderSpacing() {
  return <>
    <div style={{
      width: '25px'
    }} />
    <div style={{
      display: `flex`,
      flexDirection: `column`,
      justifyContent: `center`,
      alignItems: `center`,
      padding: `0px`,
      boxSizing: `border-box`,
      height: `60px`,
      backgroundColor: DefaultColors.primary,
      width: `2px`,
    }} />
    <div style={{
      width: '25px'
    }} />
  </>;
}

function HomeNavButton(props){
  return (
    <IconButton style={{
      textAlign: `center`,
      whiteSpace: `pre-wrap`,
      color: `rgba(151, 25, 22, 1)`,
      fontFamily: `Montserrat`,
      fontWeight: `500`,
      fontSize: `15px`,
      backgroundColor:'transparent',
      padding:8,
    }}>
      {props.children}
    </IconButton>
  )
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
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  left: `291px`,
  top: `37px`,
});

const HomeArrowDown: any = styled('img')({
  marginTop: '5px',
  marginLeft: '5px',
  width: `9.24px`,
  objectFit: `contain`,
  left: `89px`,
  transform: `rotate(90deg)`,
});



const Line2: any = styled('img')({
  height: `0px`,
  position: `absolute`,
  left: `0px`,
  top: `105px`,
});