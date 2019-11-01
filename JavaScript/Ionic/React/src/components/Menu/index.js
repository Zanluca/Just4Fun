import React from 'react'
import { IonContent } from '@ionic/react'
import styled from 'styled-components'
import { Navigation } from '@somarmeteorologia/momentum'

import ProviderMenu from './ProviderMenu'


// const { Context, useInterable, Type, Title } = Navigation

const Container = styled.div`
  width: 100%; 
  height: 100vh;
  display: flex;
`

const Menu = ({ toOpen, isLow, children, closeMenu }) => {
    return (
        <IonContent>
            <ProviderMenu closeMenu={closeMenu}>
                <Container isLow={isLow}>
                    <Navigation height={isLow ? '200px' : '100%'} toOpen={toOpen} />
                    {children}
                </Container>
            </ProviderMenu>
        </IonContent>
    )
}

export default Menu