import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { userRequest } from "../../../../client/src/requestMethods";

import "./widgetSm.css";

const WidgetSm = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("users/?new=true");
        setUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUsers();
  }, []);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {users.map((user) => (
          <li className="widgetSmListItem" key={user._id}>
            <img
              src={
                user.img ||
                "https://www.google.com/url?sa=i&url=http%3A%2F%2Fhethongxephangtudong.net%2Fbinh-luan%2Fmay-in-so-cap-phat-phieu-so-thu-tu-doc-lap-vncpr1.html%2F1&psig=AOvVaw1vYNrtnqbvh-_Z8EjZygz4&ust=1647009379118000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJDM553iu_YCFQAAAAAdAAAAABAD"
              }
              alt="avatar"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WidgetSm;
