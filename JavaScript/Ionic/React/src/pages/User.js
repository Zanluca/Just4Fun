import {
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
} from '@ionic/react';
import React, { useState } from 'react';
import Container from '../components/Container'
import { Input, Button } from '@somarmeteorologia/momentum'


const User = ({ history }) => {
    const [userName, setUserName] = useState('')


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
            <IonContent>
                <Container>
                    <Input
                        placeholder="Username"
                        value={userName}
                        onChange={e => {
                            setUserName(e)
                        }} />
                    <Button onClick={() => history.push({ pathname: '/chatroom', userName })}>Entrar</Button>
                </Container>
            </IonContent>
        </IonPage>
    )
}

export default User