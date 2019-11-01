import React, { Fragment } from 'react'

import { Switch } from '@somarmeteorologia/momentum'
import { Text } from '@somarmeteorologia/momentum'
import { Icon } from '@somarmeteorologia/momentum'
import { Navigation } from '@somarmeteorologia/momentum'

const { Type, Interable, Separator, Title } = Navigation

const Structure = (history, closeMenu) => {
    return [
        {
            id: 'menu',
            type: Type.Category,
            title: ({ details, description }) => (
                <Fragment>
                    <Icon name="home" right={10} width={20} height={20} color={details} />
                    <Text
                        weight={Text.weight.bold}
                        size={Text.size.fourteen}
                        color={description}
                    >
                        Menu
                </Text>
                </Fragment>
            ),
            children: [
                {
                    id: 'cars',
                    parent: 'menu',
                    onPrevent: () => console.log('prevented'),
                    title: ({ getter, setter }) => (
                        <Interable>
                            <Switch
                                id="cars"
                                label="Cars"
                                labelAlign="right"
                                active={getter('cars')}
                                onChange={() => setter('cars', !getter('cars'))}
                            />
                        </Interable>
                    ),
                    type: Type.Group,
                    children: []
                },
                {
                    id: 'firstSeparator',
                    parent: 'menu',
                    title: () => <Separator />,
                    type: Type.Item,
                    children: []
                },
                {
                    id: 'momentum',
                    parent: 'menu',
                    title: ({ details }) => (
                        <Title>
                            <Icon
                                name="lightning"
                                right={10}
                                width={20}
                                height={20}
                                color={details}
                            />
                            <Text size={Text.size.fourteen}>Momentum</Text>
                        </Title>
                    ),
                    type: Type.Group,
                    children: [
                        {
                            id: 'accordion',
                            parent: 'momentum',
                            type: Type.Group,
                            title: () => <Title onClick={() => { history.push('/momentum/Accordion'); closeMenu() }}><Text>Accordion</Text></Title>,
                            children: []
                        },
                        {
                            id: 'autocomplete',
                            parent: 'momentum',
                            type: Type.Group,
                            title: () => <Title onClick={() => { history.push('/momentum/Autocomplete'); closeMenu() }}><Text>Autocomplete</Text></Title>,
                            children: []
                        }
                    ]
                },
                {
                    id: 'table',
                    parent: 'menu',
                    onClick: () => { history.push('/table'); closeMenu() },
                    title: ({ details }) => (
                        <Title>
                            <Icon
                                name="resume"
                                right={10}
                                width={20}
                                height={20}
                                color={details}
                            />
                            <Text size={Text.size.fourteen}>Tabela</Text>
                        </Title>
                    ),
                    type: Type.Group,
                    children: []
                },
                {
                    id: 'chart',
                    parent: 'menu',
                    onClick: () => { history.push('/charts'); closeMenu() },
                    title: ({ details }) => (
                        <Title>
                            <Icon
                                name="chart"
                                right={10}
                                width={20}
                                height={20}
                                color={details}
                            />
                            <Text size={Text.size.fourteen}>Gráfico</Text>
                        </Title>
                    ),
                    type: Type.Group,
                    children: []
                },
                {
                    id: 'map',
                    parent: 'menu',
                    onClick: () => { history.push('/map'); closeMenu() },
                    title: ({ details }) => (
                        <Title>
                            <Icon
                                name="location"
                                right={10}
                                width={20}
                                height={20}
                                color={details}
                            />
                            <Text size={Text.size.fourteen}>Mapa</Text>
                        </Title>
                    ),
                    type: Type.Group,
                    children: []
                },
                {
                    id: 'motion',
                    parent: 'menu',
                    onClick: () => { history.push('/motion'); closeMenu() },
                    title: ({ details }) => (
                        <Title>
                            <Icon
                                name="favorite"
                                right={10}
                                width={20}
                                height={20}
                                color={details}
                            />
                            <Text size={Text.size.fourteen}>Motion</Text>
                        </Title>
                    ),
                    type: Type.Group,
                    children: []
                },
                {
                    id: 'nimbus',
                    parent: 'menu',
                    onClick: () => { history.push('/nimbus'); closeMenu() },
                    title: ({ details }) => (
                        <Title>
                            <Icon
                                name="temperature"
                                right={10}
                                width={20}
                                height={20}
                                color={details}
                            />
                            <Text size={Text.size.fourteen}>Nimbus</Text>
                        </Title>
                    ),
                    type: Type.Group,
                    children: []
                },
                {
                    id: 'test',
                    parent: 'menu',
                    onClick: () => { history.push('/teste'); closeMenu() },
                    title: ({ details }) => (
                        <Title>
                            <Icon
                                name="less"
                                right={10}
                                width={20}
                                height={20}
                                color={details}
                            />
                            <Text size={Text.size.fourteen}>Teste</Text>
                        </Title>
                    ),
                    type: Type.Group,
                    children: []
                }
            ]
        }
    ]
}

export default Structure