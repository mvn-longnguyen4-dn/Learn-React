import React from 'react';

class UserRow extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const user = this.props.user

        return (
            <tr>
                <td>{ user.id }</td>
                <td>{ user.email }</td>
                <td>{ user.country }</td>
                <td>{ user.gender }</td>
                <td>{ user.info }</td>
                <td>
                    <button onClick={ () => this.handleRemove(user.id) }>X</button>
                </td>
            </tr>
        )
    }

    handleRemove(index) {
        this.props.handleRemove(index);
    }
}

export default UserRow; 
