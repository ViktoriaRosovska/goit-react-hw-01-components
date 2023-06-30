import css from './Statistics.module.css';

export const StatList = ({ stats }) => {
        return (
            <ul className={css.statList}>
                {stats.map(stat => (
                    <li className={css.item} key={stat.id} id={stat.id}>
                        <span className={css.label}>{stat.label}</span>
                        <span className={css.percentage}>{stat.percentage}%</span>
                    </li>
                ))}
            </ul>
        );
    };