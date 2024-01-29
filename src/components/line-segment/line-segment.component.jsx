import { Polyline } from 'react-leaflet';

function LineSegment({ segment, color, clickHandler }) {
  return segment.coordinates?.length === 0 ? null : (
    <Polyline
      eventHandlers={{
        click: (e) => {
          // console.log('segment clicked', e);
          clickHandler?.();
        }
      }}
      key={segment.id}
      positions={segment.coordinates}
      pathOptions={{ color: color, weight: 4 }}
    />
  );
}

export default LineSegment;
