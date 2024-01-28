import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';
import './line-map.component.css';
import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';

function LineMap() {
  return (
    <div className="line-map">
      <MapContainer center={[42.698334, 23.319941]} zoom={13} zoomControl={false}>
        <ZoomControl position="bottomright" />
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>
    </div>
  );
}

export default LineMap;
