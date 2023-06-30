import css from './TransactionHistory.module.css'
import { Transaction } from './Transaction';

export const TransactionHistory = ({ items }) => {
    return (
        <table className={css.transactionHistory}>
          <thead className={css.tableTread}>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </thead>
        <tbody>
              <Transaction items={items} />
        </tbody>
      </table>
    )
}