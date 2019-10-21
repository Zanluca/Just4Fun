import {
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import React from 'react';
import ReactLeafletMap from '../components/ReactLeafletMap'
import Container from '../components/Container'

const MapLeaflet = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/home" />
                    </IonButtons>
                    <IonTitle>Map</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <Container>
                    <ReactLeafletMap />
                </Container>
            </IonContent>
        </IonPage>
    )
}

export default MapLeaflet