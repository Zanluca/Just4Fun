import React from 'react'

import styled from 'styled-components'

const MessageContainer = styled.div`
    margin-bottom: 20px;
`

const UserName = styled.div`
    font-weight: bold;
`

const MessageContent = styled.p`
    width : 100%;
    word-break: break-all;
    background-color: #eeeeee;
    border-radius: 5px;
`

export default function Message({
    user,
    text,
}) {

    return (
        <MessageContainer>
            <UserName>{user}:</UserName>
            <MessageContent>{text}</MessageContent>
        </MessageContainer>
    )
}