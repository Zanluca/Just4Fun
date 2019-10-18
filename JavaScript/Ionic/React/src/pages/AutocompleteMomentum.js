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
import Container from '../components/Container'

import { Autocomplete, Icon, } from '@somarmeteorologia/momentum'

const categories = [
    {
        id: 'city',
        text: 'Cidades',
        icon: ({ width, height, color }) => (
            <Icon name="city" color={color} width={width} height={height} />
        ),
        selected: false
    },
    {
        id: 'state',
        text: 'Estados',
        icon: ({ width, height, color }) => (
            <Icon name="location" color={color} width={width} height={height} />
        ),
        selected: true
    }
]

const options = [
    { value: 1, text: 'Maringá', category: 'city' },
    { value: 2, text: 'Paraná', category: 'state' },
    { value: 3, text: 'São Paulo', category: 'city' },
    { value: 4, text: 'Santa Catarina', category: 'state' }
]

const AutocompleteMomentum = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/momentum" />
                    </IonButtons>
                    <IonTitle>Autocomplete</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <Container>
                    <Autocomplete categories={categories} options={options}/>
                </Container>
            </IonContent>
        </IonPage>
    )
}

export default AutocompleteMomentum