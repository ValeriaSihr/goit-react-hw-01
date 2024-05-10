import Profile from './Profile'
import FriendList from './FriendList'
import TransactionHistory from './TransactionHistory'
import userData from '../userData.json'
import friendList from '../friendList.json'
import transactions from '../transactions.json'


import '../App.css'


const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friendList} />
      <TransactionHistory items={transactions} />

    </>
  );
};


export default App
