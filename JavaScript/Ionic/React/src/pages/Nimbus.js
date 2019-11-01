import {
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
} from '@ionic/react';
import React, { useState, useEffect } from 'react';
import { getWeekWeather } from '../service/nimbus'
import styled from 'styled-components'
import Container from '../components/Container'

const Table = styled.div`
    display: table;
    width: 90%;
`

const Th = styled.div`
    display: table-header-group;
    background-color: gray;
    font-weight: bold;
    font-size: 25px;
`

const ThCell = styled.div`
    display: table-cell;
    padding: 10px;
    text-align: justify;
    border-bottom: 1px solid black;
`

const ThBody = styled.div`
    display: table-row-group;
`

const Tr = styled.div`
    display: table-row;
`

const TrCell = styled.div`
    display: table-cell;
    padding: 20px 0;
    text-align: center;
`

const Teste = () => {
    const [weatherInfo, setWeatherInfo] = useState({
        days: [],
        temperature_daily_max: [],
        temperature_daily_min: []
    })

    useEffect(() => {
        async function getData() {
            const weather = await getWeekWeather()
            setWeatherInfo(weather)
        }

        getData()
    }, [])

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/home" />
                    </IonButtons>
                    <IonTitle>Nimbus</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent padding>
                <Container>
                    <Table>
                        <Th>
                            {weatherInfo.days.map((day, index) => <ThCell key={index}>{day}</ThCell>)}
                        </Th>
                        <ThBody>
                            <Tr>
                                {weatherInfo.temperature_daily_max.map((temperature, index) => <TrCell key={index}>{`${temperature.toFixed(2)}°C`}</TrCell>)}
                            </Tr>
                            <Tr>
                                {weatherInfo.temperature_daily_min.map((temperature, index) => <TrCell key={index}>{`${temperature.toFixed(2)}°C`}</TrCell>)}
                            </Tr>
                        </ThBody>
                    </Table>
                </Container>
            </IonContent>
        </IonPage>
    )
}

export default Teste