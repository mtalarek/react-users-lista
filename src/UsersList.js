import React from 'react';
import './UsersList.css';

function UsersList(props) {

    let userList = props.usersList;
    let userLiElements = userList.map((user) => {
        return <li key={user.id}>{user.name}<span onClick={() => props.removeUserMethod(user.id)}>x</span></li>
    })

    return(
        <ul className="the-list">
            {userLiElements}
        </ul>   
    )
}

export default UsersList;