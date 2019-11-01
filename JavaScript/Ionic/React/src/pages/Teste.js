import {
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
} from '@ionic/react';
import React from 'react';
import Menu from '../components/Menu'
// import styled from 'styled-components'


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
                <Menu />
            </IonContent>
        </IonPage>
    )
}

export default Teste