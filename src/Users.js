import React, {Component} from 'react';
import UsersList from "./UsersList";
import './Users.css';


class Users extends Component {

    constructor(props) {
        super(props);

        this.state = {
            users: [] 
        }
    }

    addUser = (event) => {
        event.preventDefault();
        console.log(this._inputName.value)

        let newUser = {
            id: Date.now(),    //ilość milisekund od 1 stycznia 1970roku
            name: this._inputName.value
        }

        this.setState((state)=>{
            return({
                users: state.users.concat(newUser)
            })
        })

        this._inputName.value = '';
    }

    removeUser = (userID) => {
        this.setState((state) => {
            return({
                users: state.users.filter((user) => {
                    return(user.id !== userID)})
            });
        })

    }

    render() {
        return (
            <div className="user-list">
                <h1>Users</h1>
                <form onSubmit={this.addUser}>
                    <input ref={(element)=>{this._inputName=element}}type="text" id="fname" placeholder="Enter name"></input>
                    <button type="submit">Add User</button>
                </form>
                <UsersList usersList={this.state.users} removeUserMethod={this.removeUser}/>
            </div>
        );
    };
}

export default Users;