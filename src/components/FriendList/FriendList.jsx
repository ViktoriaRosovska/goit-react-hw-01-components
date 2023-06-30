import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
    return (
        <ul className="friendList">
            {friends.map(friend => 
             (<FriendListItem friend={friend} key={friend.id} />)
            )}
        </ul>
    )
}