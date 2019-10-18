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
import { Text, Checkbox, Button } from '@somarmeteorologia/momentum'

const NewItem = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/home" />
                    </IonButtons>
                    <IonTitle>New Item</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <Text>Teste</Text>
                <Checkbox />
                <Button>Teste</Button>
            </IonContent>
        </IonPage>
    );
};
export default NewItem;