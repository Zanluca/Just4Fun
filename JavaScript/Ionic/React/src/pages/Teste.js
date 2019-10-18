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

const Teste = () => {
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
                        <Button style={styleMarginButtom} onClick={() => console.log('Teste')}>Momentum</Button>
                        <Button style={styleMarginButtom} onClick={() => console.log('Tabela')}>Tabela</Button>
                        <Button style={styleMarginButtom} onClick={() => console.log('Gráfico')}>Gráfico</Button>
                        <Button style={styleMarginButtom} onClick={() => console.log('Mapa')}>Mapa</Button>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
}

export default Teste