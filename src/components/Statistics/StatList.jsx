import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const StatList = ({ stats }) => {
  return (
    <ul className={css.statList}>
      {stats.map(({ id, label, percentage }) => (
        <li className={css.item} key={id} id={id}>
          <span className={css.label}>{label}</span>
          <span className={css.percentage}>{percentage}%</span>
        </li>
      ))}
    </ul>
  );
};

StatList.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
