import { FriendListItem } from './FriendListItem';
import PropTypes from 'prop-types';
export const FriendList = ({ friends }) => {
  return (
    <ul className="friendList">
      {friends.map(friend => (
        <FriendListItem friend={friend} key={friend.id} />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.object({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
