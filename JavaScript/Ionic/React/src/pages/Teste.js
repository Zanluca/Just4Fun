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
// import Menu from '../components/Menu'
// import styled from 'styled-components'

const Teste = () => {
    const [lastScrollPosition, setLastScrollPosition] = useState(0)
    const [lastValue, setLastValue] = useState(0)

    const handleScroll = ev => {
        const scrollTop = ev.detail.scrollTop
        const scrollDiff = scrollTop - lastScrollPosition

        let newValue = lastValue + scrollDiff
        console.log('ScrollTop', scrollTop)
        newValue = Math.max(0, Math.min(newValue, 44))
        console.log('NewValue', newValue)
        setLastValue(newValue)

        setLastScrollPosition(scrollTop)
    }

    return (
        <IonPage>
            <IonHeader
                style={{
                    marginTop: `${-lastValue}px`,
                    transition: 'margin 250ms linear',
                }}
            >
                <IonToolbar

                >
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/home" />
                    </IonButtons>
                    <IonTitle>Ionic</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent padding
                scrollEvents={true}
                onIonScroll={handleScroll}
                onIonScrollStart={(ev) => console.log(ev)}
                onIonScrollEnd={(ev) => console.log(ev)}
                style={{
                    marginTop: `${-lastValue}px`,
                    transition: 'margin 250ms linear',
                }}
            >
                <h1>Olá Mundo1</h1>
                <h1>Olá Mundo2</h1>
                <h1>Olá Mundo3</h1>
                <h1>Olá Mundo4</h1>
                <h1>Olá Mundo5</h1>
                <h1>Olá Mundo6</h1>
                <h1>Olá Mundo7</h1>
                <h1>Olá Mundo8</h1>
                <h1>Olá Mundo9</h1>
                <h1>Olá Mundo10</h1>
                <h1>Olá Mundo11</h1>
                <h1>Olá Mundo12</h1>
                <h1>Olá Mundo13</h1>
                <h1>Olá Mundo14</h1>
                <h1>Olá Mundo15</h1>
                <h1>Olá Mundo16</h1>
                <h1>Olá Mundo17</h1>
                <h1>Olá Mundo18</h1>
                <h1>Olá Mundo19</h1>
                <h1>Olá Mundo20</h1>
                <h1>Olá Mundo21</h1>
                <h1>Olá Mundo22</h1>
                <h1>Olá Mundo23</h1>
                <h1>Olá Mundo24</h1>
                <h1>Olá Mundo25</h1>
                <h1>Olá Mundo26</h1>
                <h1>Olá Mundo27</h1>
                <h1>Olá Mundo28</h1>
                <h1>Olá Mundo29</h1>
                <h1>Olá Mundo30</h1>
                <h1>Olá Mundo31</h1>
                <h1>Olá Mundo32</h1>
                <h1>Olá Mundo33</h1>
                <h1>Olá Mundo34</h1>
                <h1>Olá Mundo35</h1>
                <h1>Olá Mundo36</h1>
                <h1>Olá Mundo37</h1>
                <h1>Olá Mundo38</h1>
                <h1>Olá Mundo39</h1>
                <h1>Olá Mundo40</h1>
                <h1>Olá Mundo41</h1>
            </IonContent>
        </IonPage>
    )
}

export default Teste

// style={{
//     transform: `translate(0, ${showToolBar ? '0px' : '-50px'})`,
//     transition: 'transform 150ms linear',
// }}