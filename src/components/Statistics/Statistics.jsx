import css from './Statistics.module.css';
import { StatList } from './StatList';

export const Statistics = ({ title, stats }) => {
    return (
        <section className={css.section}>
            {title ? (<h2 className={css.title}>{title}</h2>) : 
                (<span className={css.title}></span>)}
            
            <StatList stats={stats}/>
        </section>
    )
}


