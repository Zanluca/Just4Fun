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
import { motion } from "framer-motion"
import styled from 'styled-components'

import Container from '../components/Container'

const ContainerAnimation = styled.div`
    div {
        background: black;
        border-radius: 30px;
        width: 150px;
        height: 150px;
    }
`

const Motion = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/home" />
                    </IonButtons>
                    <IonTitle>Motion</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent padding>
                <Container>
                    <ContainerAnimation>
                        <motion.div
                            animate={{
                                scale: [1, 2, 2, 1, 1],
                                rotate: [0, 0, 270, 270, 0],
                                borderRadius: ["20%", "20%", "50%", "50%", "20%"]
                            }}
                            transition={{
                                duration: 2,
                                ease: "easeInOut",
                                times: [0, 0.2, 0.5, 0.8, 1],
                                loop: Infinity,
                                repeatDelay: 1
                            }}
                        />
                    </ContainerAnimation>
                </Container>
            </IonContent>
        </IonPage>
    )
}

export default Motion