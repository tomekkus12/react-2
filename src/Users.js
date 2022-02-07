import React, {Component} from "react";
import './Users.css';
import UsersList from "./UsersList";

class Users extends Component {

    constructor(props) {
        super(props);

        this.state = {
            users: []
        };
    }

    addUser = (event) => {
        event.preventDefault();
        

        let newUser = {id: Date.now(), name: this._inputName.value};

        this.setState((state) => {
            return({
                users: state.users.concat(newUser)
            });
        });

        this._inputName.value = '';
    }

    removeUser = (userID) => {
        this.setState((state) => {

            return ({
                users: state.users.filter((user) => {return (user.id !== userID)})
            });    
        });

    }

    render() {

        return(
            <div className="users-main">
                <h1>User's List</h1>
                <form onSubmit={this.addUser}>
                    <input type="text" placeholder="Enter name" ref={(element) => {this._inputName = element;}} />
                    <button type="submit">Add user</button>
                    <UsersList usersList={this.state.users} removeUserMethod={this.removeUser} />
                </form>
            </div>
        );
    }

}

export default Users;