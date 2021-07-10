const HookUserRow = ({ handleRemove, user }) => {
    return (
        <tr>
        <td>{ user.id }</td>
        <td>{ user.email }</td>
        <td>{ user.country }</td>
        <td>{ user.gender }</td>
        <td>{ user.info }</td>
        <td>
            <button onClick={ () => handleRemove(user.id) }>X</button>
        </td>
        </tr>
    );
};

export default HookUserRow; 