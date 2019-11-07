import {
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
} from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { Button } from '@somarmeteorologia/momentum'
import styled from 'styled-components'
import io from 'socket.io-client'

import Container from '../components/Container'
import Message from '../components/Message'

const Messages = styled.div`
    overflow-y: auto;
    height: 50vh;
    margin-bottom: 10px;
    text-align: left;
    width: 100%;
`

const FormMessage = styled.form`
    width: 100%;
`

const Textareable = styled.textarea`
  resize: none;
  height: 90px;
  width: 100%;
`

const styleContainer = {
    flexDirection: 'column'
}

let socket = null

const ChatRoom = ({ location }) => {
    const { userName } = location
    const [message, setMessage] = useState('')
    const [messages, setMesssages] = useState([])

    useEffect(() => {
        console.log('socket')
        console.log(socket = io('http://192.168.25.6:3000'))
    }, [])

    useEffect(() => {
        socket.on('reciveMessage', message => {
            setMesssages([...messages, message])
        })

        socket.on('previousMessage', messages => {
            setMesssages(messages)
        })
    }, [messages])

    function handleSubmit(event) {
        event.preventDefault()
        if (userName && message.length) {
            const messageObject = {
                author: userName,
                message
            }
            socket.emit('sendMessage', messageObject)
            setMesssages([...messages, messageObject])
        }
        setMessage('')
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/chat" />
                    </IonButtons>
                    <IonTitle>Ionic</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent padding>
                <h3>{userName ? userName : 'User'}</h3>
                <Container style={styleContainer}>
                    <Messages>
                        {messages.map((mes, index) => <Message key={index} text={mes.message} user={mes.author} />)}
                    </Messages>
                    <FormMessage onSubmit={handleSubmit}>
                        <Textareable placeholder="Digite sua mensagem aqui..." value={message} onChange={event => setMessage(event.target.value)} />
                        <Button type='submit'>Enviar</Button>
                    </FormMessage>
                </Container>
            </IonContent>
        </IonPage>
    )
}

export default ChatRoom