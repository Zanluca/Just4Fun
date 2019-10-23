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
                Content here
            </IonContent>
        </IonPage>
    )
}

export default Teste