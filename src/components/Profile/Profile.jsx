import './Profile.css'

const Profile = ({ name, tag, location, image, stats }) => {
   const { followers, views, likes } = stats;
    return <>
        <div className="user-card">
         <div className="user-avatar">
            <img src={image} alt="User avatar" className="photo"/>
            <p className="user-name">{name}</p>
            <p className="user-data">@{tag}</p>
            <p className="user-data">{location}</p>
         </div>
               
             <ul className="user-stats">
                 <li className="user-stats-list">
                    <span>Followers</span>
                    <span>{followers}</span>
                 </li>
                 <li className="user-stats-list">
                    <span>Views</span>
                    <span>{views}</span>
                 </li>
                 <li className="user-stats-list">
                    <span>Likes</span>
                    <span>{likes}</span>
                 </li>
             </ul>
             </div>
        
        </>
}

export default Profile