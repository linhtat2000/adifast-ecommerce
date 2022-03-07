import { Visibility } from "@material-ui/icons";
import "./widgetSm.css";

const WidgetSm = () => {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src="" alt="avatar" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Kevin Dean</span>
            <span className="widgetSmUserTitle">UX Designer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="" alt="avatar" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Hathaway</span>
            <span className="widgetSmUserTitle">Ui Designer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="" alt="avatar" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Jeanne Evans</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="" alt="avatar" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Logan Kleins</span>
            <span className="widgetSmUserTitle">Quality Control</span>
          </div>
          <button className="widgetSmButton">
            <Visibility />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSm;
