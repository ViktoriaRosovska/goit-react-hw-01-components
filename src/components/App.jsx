import PropTypes from 'prop-types';
import { Profile } from "./Profile/Profile";
import {Statistics} from './Statistics/Statistics'
import user from 'data/user.json';
import css from './App.module.css';
import data from 'data/data.json';
import { FriendList } from './FriendList/FriendList';
import friends from 'data/friends.json';


export const App = () => {
  return (
    <div className={css.AppWrapper}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
        avatar={user.avatar}
      />
      <Statistics 
        title="Upload stats"
        stats={data} />
      
      
      <FriendList friends={friends} />
      
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.exact({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number
  })
}

Statistics.propTypes = {
  title: PropTypes.string
}


       
   
    
  