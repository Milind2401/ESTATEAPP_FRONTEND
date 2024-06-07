import { Marker, Popup } from "react-leaflet";
import "./pin.scss";
import { Link } from "react-router-dom";
import marker from '../../Assets/icons/Location.svg';
import { Icon } from 'leaflet'

function Pin({ item }) {
const myIcon = new Icon({
 iconUrl: marker,
 iconSize: [32,32]
})
  return (
    <Marker position={[item.latitude, item.longitude]} icon={myIcon}>
      <Popup>
        <div className="popupContainer">
          <img src={item.img} alt="" />
          <div className="textContainer">
            <Link to={`/${item.id}`}>{item.title}</Link>
            <span>{item.bedroom} bedroom</span>
            <b>Rs. {item.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

export default Pin;
