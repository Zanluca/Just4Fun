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
import { Accordion } from '@somarmeteorologia/momentum'

const AccordionMomentum = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/momentum" />
                    </IonButtons>
                    <IonTitle>Accordion</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <Container>
                    <Accordion
                        accordions={[
                            {
                                id: 1,
                                active: false,
                                text: 'foo',
                                Header: <div>Lorem ipsum dolor sit amet</div>,
                                Body: (
                                    <div>
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                        qui officia deserunt mollit anim id est laborum.
                        </div>
                                )
                            },
                            {
                                id: 2,
                                active: false,
                                text: 'bar',
                                Header: <div>Sed ut perspiciatis unde omnis</div>,
                                Body: (
                                    <div>
                                        Ut enim ad minima veniam, quis nostrum exercitationem ullam
                                        corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                                        consequatur?
                        </div>
                                )
                            }
                        ]}
                    />
                </Container>
            </IonContent>
        </IonPage>
    )
}

export default AccordionMomentum