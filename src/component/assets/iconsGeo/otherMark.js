import L from "leaflet";
// export const otherMark =
const otherMark = (props) => {
  return new L.Icon({
    iconUrl: `/img/iconGEO/${props.geoIcon}`,
    iconRetinaUrl: `/img/iconGEO/${props.geoIcon}`,
    // iconUrl: `/img/iconGEO/ant.svg`,
    // iconRetinaUrl: `/img/iconGEO/ant.svg`,
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(30, 55),
  });
};
export default otherMark;
