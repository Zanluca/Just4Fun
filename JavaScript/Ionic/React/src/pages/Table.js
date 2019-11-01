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
import { DataTable } from '@somarmeteorologia/momentum'

const Data = () => {
    const newPerson = () => {
        const statusChance = Math.random()
        return {
            firstName: 'banana',
            lastName: 'apple',
            age: Math.floor(Math.random() * 30),
            visits: Math.floor(Math.random() * 100),
            progress: Math.floor(Math.random() * 100),
            status:
                statusChance > 0.66
                    ? 'relationship'
                    : statusChance > 0.33
                        ? 'complicated'
                        : 'single'
        }
    }

    const range = len => {
        const arr = []
        for (let i = 0; i < len; i++) {
            arr.push(i)
        }
        return arr
    }

    const makeData = (len = 5553) =>
        range(len).map(() => ({
            ...newPerson(),
            children: range(10).map(newPerson)
        }))

    const data = makeData(100)

    const columns = [
        {
            Header: 'First Name',
            accessor: 'firstName',
            textAlign: 'right'
        },
        {
            Header: 'Last Name',
            accessor: 'lastName'
        },
        {
            Header: 'Age',
            accessor: 'age',
            sortable: true
        },
        {
            Header: 'Status',
            accessor: 'status'
        },
        {
            Header: 'Visits',
            accessor: 'visits',
            sortable: true
        }
    ]

    return (
        <>
            <DataTable data={data} columns={columns} size={10} />
        </>
    )
}

const Table = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/home" />
                    </IonButtons>
                    <IonTitle>Table</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <Data />
            </IonContent>
        </IonPage>
    )
}

export default Table