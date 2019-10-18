import {
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonList,
    IonListHeader,
    IonItem
} from '@ionic/react';
import React from 'react';
import { Button } from '@somarmeteorologia/momentum'
import Container from '../components/Container'

const Momentum = ({ history }) => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/home" />
                    </IonButtons>
                    <IonTitle>Momentum</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <Container>
                    <IonList>
                        <IonListHeader>
                            Components
                        </IonListHeader>
                        <IonItem onClick={() => history.push('/momentum/Accordion')}>
                            <Button>
                                Accordion
                            </Button>
                        </IonItem>
                        <IonItem onClick={() => history.push('/momentum/Autocomplete')}>
                            <Button>
                                Autocomplete
                            </Button>
                        </IonItem>
                    </IonList>
                </Container>
            </IonContent>
        </IonPage>
    );
};
export default Momentum;