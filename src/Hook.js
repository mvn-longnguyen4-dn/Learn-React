import React, { useState } from 'react';
import HookUserRow from './HookUserRow.js';

function Hook() {
  const [form, setFormData] = useState({
    data: {
        email: '',
        password: '',
        country: '',
        gender: 'Male',
        info: ''
      }
  });

  const [usersData, setUsers] = useState({
    users: []
  });

  const [id, increaseId] = useState(0);

  function handleSubmit(event) {
    event.preventDefault();

    increaseId(id + 1);

    const user = {...form.data, id: id };

    setUsers(prev => ({
      users: [
          ...prev.users,
          user
      ]
    }))
  };

  function handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    setFormData(prev => ({
        data: {
          ...prev.data,
          [name]: value
        }
      })
    );
  };

  function handleRemove(id) {
    const newUsers = usersData.users.filter(item => item.id != id);
    setUsers(prev => ({
      users: newUsers
    }));
  }

  return (
    <div className="form-container">
    <form className="register-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Email address</label>
        <input
          type="text"
          name="email"
          onChange={handleChange}
          />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          />
      </div>
      <div className="form-group">
        <label>Your Country</label>
        <select name="country" onChange={handleChange}>
          <option value="">Please Choose</option>
          <option value="VietNam">Việt Nam</option>
          <option value="Japan">日本</option>
        </select>
      </div>
      <div className="form-group">
        <label>Gender</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              value="Male"
              name="gender"
              defaultChecked={form.gender === 'Male'}
              onChange={handleChange}
              />
            Male
          </label>
          <label>
            <input
              type="radio"
              value="Female"
              name="gender"
              defaultChecked={form.gender === 'Female'}
              onChange={handleChange}
              />
            Female
          </label>
        </div>
      </div>
      <div className="form-group">
        <label>Other information</label>
        <textarea name="info" onChange={handleChange}></textarea>
      </div>
      <div className="buttons-set">
        <button className="btn">Submit</button>
      </div>
    </form>

    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Email Address</th>
          <th>Country</th>
          <th>Gender</th>
          <th>Info</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          usersData.users.map(e => (
            <HookUserRow key={ e.id } user={ e } handleRemove={ handleRemove }/>
        ))
        }
      </tbody>
    </table>
  </div>
  );
}

export default Hook; 