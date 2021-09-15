import { Container } from './styles'
import incomeImg from '../../assets/income.svg'
import totalImg from '../../assets/total.svg'
import { useTransactions } from '../../hooks/useTransactions'

export const Summary = () => {
    const {transactions} = useTransactions()

    const summary = transactions.reduce((acc, curr) => {
        if(curr.type === "deposit") {
            acc.deposits += curr.amount;
            acc.total += curr.amount
        } else {
            acc.withdraws += curr.amount
            acc.total -= curr.amount
        }

        return acc
    },{
        deposits: 0,
        withdraws:0,
        total:0
    })

    return (
        <Container>


            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>
                {new
                Intl.NumberFormat("pt-BR", {
                                    style: "currency",
                                    currency: "BRL"
                                }).format(summary.deposits)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                </header>
                <strong>
                - {new
                Intl.NumberFormat("pt-BR", {
                                    style: "currency",
                                    currency: "BRL"
                                }).format(summary.withdraws)}
                </strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>
                {new
                Intl.NumberFormat("pt-BR", {
                                    style: "currency",
                                    currency: "BRL"
                                }).format(summary.total)}
                </strong>
            </div>

        </Container>
    )
}
