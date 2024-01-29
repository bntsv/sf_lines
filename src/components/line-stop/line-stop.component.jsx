import { CircleMarker, Popup } from 'react-leaflet';

function LineStop({ stop, lineName, color, clickHandler }) {
  return stop.position === null ? null : (
    <CircleMarker
      eventHandlers={{
        click: (e) => {
          // console.log('marker clicked', e);
          clickHandler?.(lineName);
        }
      }}
      center={[stop.location.lat, stop.location.lon]}
      radius={6}
      pathOptions={{ color: color, fillColor: '#FFFFFF', fillOpacity: 1 }}
    >
      {!clickHandler ? <Popup>{stop.name}</Popup> : null}
    </CircleMarker>
  );
}

export default LineStop;
