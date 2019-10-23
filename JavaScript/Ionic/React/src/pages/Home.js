import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
} from '@ionic/react';
import React from 'react';
import { Button } from '@somarmeteorologia/momentum'

const style100h = {
  height: '100%',

}

const style100hFlex = {
  flexDirection: 'column',
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)'
}

const styleMarginButtom = {
  margin: 10
}

const Home = (props) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonTitle>Ionic</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent padding>
        <IonGrid style={style100h}>
          <IonRow justify-content-center align-items-center style={style100hFlex}>
            <Button style={styleMarginButtom} onClick={() => props.history.push('/momentum')}>Momentum</Button>
            <Button style={styleMarginButtom} onClick={() => props.history.push('/table')}>Tabela</Button>
            <Button style={styleMarginButtom} onClick={() => props.history.push('/charts')}>Gráfico</Button>
            <Button style={styleMarginButtom} onClick={() => props.history.push('/map')}>Mapa</Button>
            <Button style={styleMarginButtom} onClick={() => props.history.push('/motion')}>Motion</Button>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}

export default Home