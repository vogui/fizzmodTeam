import React from 'react';
import {
  Container,
  Derecho,
  ParteSuperior,
  IconoCanastoOscuro,
  TituloCanasto,
  ParteCentral1,
  ParteCentralIzq,
  ParteCentral2Izq,
  IconoCanastoVerde,
  NombreCanasto,
  DivIconoAprobado,
  IconoAprobado,
  LineaBlanca,
  ParteCentral2,
  IconoCanastoGris,
  NombreCargarCanasto,
  IconoTeclado,
  ParteInferior,
  OrdenFooter,
  Button,
  Izquierdo,
  ParteSuperiorIzq,
  IconoApproveDiv,
  IconoAprobadoIzq,
  FelicitacionesDiv,
  FelicitacionesH1,
  RondaH1,
  ParteInferiorIzq,
  IconoIzqDiv,
  ColuInfoDerecha,
  ParteTotalesDivInf,
  TituloTotales,
  Pickeados,
  TotalesGris,
  ImgLineaRoja,
} from './style';
import ProgressBarFinal from '../ProgressBar/ProgressBarFinal'
import basket from '../../images/basket_gris.svg';
import basketVerde from '../../images/basket_verde.svg';
import basketNegro from '../../images/basket_negro.svg';
import Aprobado from '../../images/check_bold.svg';
import AprobadoCirculo from '../../images/check_circulo.svg';
import keyboard from '../../images/icn_keyboard.svg';
//import tecladoGris from "../../images/tecladoGris.png";

export default ({handleClick, idSession}) => {
  let total 
  let largo
  let porcentaje
  if(idSession.items){
   total = idSession.totalItems
   largo = idSession.items.filter(Element => Element.status === 'picked' ).length 
  }
  return (
    <Container>
      <Izquierdo>
        <ParteSuperiorIzq>
          <IconoApproveDiv>
            <IconoAprobadoIzq src={AprobadoCirculo} />
          </IconoApproveDiv>
          <FelicitacionesDiv>
            <FelicitacionesH1>Felicitaciones!</FelicitacionesH1>
            <RondaH1>Has completado la ronda.</RondaH1>
          </FelicitacionesDiv>
        </ParteSuperiorIzq>
        <ParteInferiorIzq>
          <IconoIzqDiv>
            <IconoCanastoOscuro src={basket} />
          </IconoIzqDiv>
          <ColuInfoDerecha>
            <TituloTotales>TOTALES</TituloTotales>
            <Pickeados>Pickeados: 738</Pickeados>
            <TotalesGris>Totales: 1000</TotalesGris>
          </ColuInfoDerecha>
        </ParteInferiorIzq>
           <ProgressBarFinal Done={largo} Total={total}></ProgressBarFinal>
      </Izquierdo>
      <Derecho>
        <div>
        <ParteSuperior>
          <IconoCanastoOscuro src={basket} />
          <TituloCanasto>CANASTOS</TituloCanasto>
        </ParteSuperior>
        <ParteCentral1>
          <ParteCentralIzq>
            <IconoCanastoVerde src={basketVerde} />
            <NombreCanasto>Canasto 017</NombreCanasto>
          </ParteCentralIzq>
          <DivIconoAprobado>
            <IconoAprobado src={Aprobado} />
          </DivIconoAprobado>
        </ParteCentral1>
        <LineaBlanca />
        <ParteCentral2>
          <ParteCentral2Izq>
            <IconoCanastoGris src={basketNegro} />
            <NombreCargarCanasto>Cargar Nuevo Canasto</NombreCargarCanasto>
          </ParteCentral2Izq>
          <IconoTeclado src={keyboard} />
        </ParteCentral2>
        </div>
        <div>
        <ParteInferior>
          <OrdenFooter>
            <Button onClick={handleClick}>FINALIZAR</Button>
          </OrdenFooter>
        </ParteInferior>
        </div>
      </Derecho>
    </Container>
  );
};