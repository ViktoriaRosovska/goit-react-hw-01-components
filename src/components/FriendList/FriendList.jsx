import clsx from 'clsx';
import css from './FriendList.module.css';
import friends from 'data/friends.json';

const FriendListItem = ({friendList}) => {
    return (
            friendList.map(({ name, avatar, isOnline, id }) => { 
        return (
            <li className={css.item } key={id}>    
            <span className={clsx(css.status, isOnline ? css.online : css.ofline)} ></span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
            </li>
            )
        })
    )
}


export const FriendList = () => {
    return (
        <ul className="friendList">
            <FriendListItem friendList={friends}/>
        </ul>
    )
}