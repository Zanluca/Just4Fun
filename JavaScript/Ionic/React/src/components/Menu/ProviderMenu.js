import React from 'react'
import { withRouter } from "react-router"

import { Navigation } from '@somarmeteorologia/momentum'

import structure from './Structure'

const { Provider } = Navigation


const defaultInterables = [
    {
        id: 'cars',
        interables: [
            {
                id: 'cars',
                value: true
            }
        ]
    }
]

function ProviderMenu({ children, defaultStructure, history, closeMenu }) {
    return (
        <Provider
            defaultStructure={defaultStructure(history, closeMenu)}
            defaultInterables={defaultInterables}
        >
            {children}
        </Provider>
    )
}

export default withRouter(ProviderMenu)

ProviderMenu.defaultProps = {
    defaultStructure: structure
}