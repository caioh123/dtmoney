import React from 'react'
import { Container } from '../Dashboard/styles'
import { Summary } from '../Summary'
import { TransactionsTable } from '../TransactionsTable'

export const Dashboard = () => {
    return (
        <div>
            <Container>
                <Summary />
                <TransactionsTable />
            </Container>
        </div>
    )
}
