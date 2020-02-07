import {
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import React, { useEffect } from 'react';
import ReactLeafletMap from '../components/ReactLeafletMap'
import Container from '../components/Container'


const MapLeaflet = () => {
    const teste = () => {
        console.log('scroll')
    }

    useEffect(() => {
        console.log('Map')
        window.addEventListener('scroll', teste)
        window.addEventListener('touchstart', teste)
    }, [])

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