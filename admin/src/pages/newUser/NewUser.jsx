import "./newUser.css";

const NewUser = () => {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label htmlFor="username">Username</label>
          <input id="username" type="text" placeholder="johndoe" />
        </div>
        <div className="newUserItem">
          <label htmlFor="fullname">Fullname</label>
          <input id="fullname" type="text" placeholder="John Doe" />
        </div>
        <div className="newUserItem">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="johndoe@gmail.com" />
        </div>
        <div className="newUserItem">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" />
        </div>
        <div className="newUserItem">
          <label htmlFor="phone">Phone Number</label>
          <input id="phone" type="text" placeholder="+02 751 874" />
        </div>
        <div className="newUserItem">
          <label htmlFor="address">address</label>
          <input id="address" type="text" placeholder="California | USA" />
        </div>
        <div className="newUserItem">
          <label htmlFor="gender">Gender</label>
          <div className="newUserGender">
            <input name="gender" id="male" value="male" type="radio" />
            <label htmlFor="male">Male</label>
            <input name="gender" id="female" value="female" type="radio" />
            <label htmlFor="female">Female</label>
            <input name="gender" id="other" value="other" type="radio" />
            <label htmlFor="other">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select name="active" id="active" className="newUserSelect">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
};

export default NewUser;
