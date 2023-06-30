import clsx from 'clsx';
import css from './TransactionHistory.module.css';

export const Transaction = ({ items }) => {
    return (
        items.map(({ id, type, amount, currency }, index) => {
            return (
                <tr key={id} className={clsx((index % 2) ? css.odd : css.even)}>
                <td>{ type }</td>
                <td>{ amount }</td>
                <td>{ currency }</td>
        </tr> )
        })
    )
}