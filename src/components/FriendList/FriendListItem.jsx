import clsx from 'clsx';
import css from './FriendList.module.css';
import PropTypes from 'prop-types';
export const FriendListItem = ({ friend: { name, avatar, isOnline } }) => (
  <li className={css.item}>
    <span
      className={clsx(css.status, isOnline ? css.online : css.ofline)}
    ></span>
    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>
  </li>
);

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
};
