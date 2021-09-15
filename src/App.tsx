import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global'
import Modal from 'react-modal'
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionProvider } from './hooks/useTransactions';

Modal.setAppElement("#root")

export function App() {
  const [isNewTransactionModalOPen, setIsNewTransactionMOdalOpen] = useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransactionMOdalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionMOdalOpen(false)
  }
  return (
    <TransactionProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOPen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </TransactionProvider>
  );
}

