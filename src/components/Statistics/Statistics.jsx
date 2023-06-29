import css from './Statistics.module.css';
import PropTypes from 'prop-types';
import data from 'data/data.json'

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

export const Statistics = ({ title }) => {
    return (
        <section className={css.section}>
            <h2 className={css.title}>{title}</h2>
                <StatList stats={data}/>
        </section>
    )
}

StatList.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number
}

