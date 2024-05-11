import css from './FriendListItem.module.css'

export const FriendListItem = ({ friend: {
    avatar, name, isOnline,
}}) => {
    return <li className={css.listItems}>
          
            <img className='img' src={avatar} alt="Avatar" width="48" />
            <p>{name}</p>
            <p>
              {isOnline ? (<span>Online</span>) : (<span>Offline</span>)}
            </p>
          
        </li>
}