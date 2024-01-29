import './line-map.component.css';
import 'leaflet/dist/leaflet.css';
import { useSelector } from 'react-redux';
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';
import LineStop from '../line-stop/line-stop.component';
import LineSegment from '../line-segment/line-segment.component';

function LineMap({ selectedLine, clickSegment, clickStop }) {
  const { lines, filteredLines, selectedRoute } = useSelector((store) => store.lines);
  const linesData = selectedLine ? [selectedLine] : filteredLines.length ? filteredLines : lines;
  const lineColors = ['#084C61', '#F0C808', '#D11149', '#1B998B', '#6610F2'];
  const lineColorMap = lines.reduce((map, l, i) => {
    map[l.line] = lineColors[i];
    return map;
  }, {});

  return (
    <div className="line-map">
      <MapContainer center={[42.698334, 23.319941]} zoom={12} zoomControl={false}>
        <ZoomControl position="bottomright" />
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {linesData &&
          linesData.map((line) => {
            return line.routes.map((route) => {
              const routeSelected = route.id === selectedRoute?.id;
              const color = routeSelected ? lineColorMap[line.line] : 'gray';

              const segments = route.segments.map((segment) => {
                if (selectedLine) {
                  return <LineSegment key={segment.id} segment={segment} color={color} clickHandler={() => clickSegment?.(route)} />;
                }

                return <LineSegment key={segment.id} segment={segment} color={lineColorMap[line.line]} clickHandler={() => clickStop?.(line.line)} />;
              });

              const stops = route.stops.map((stop) => {
                if (selectedLine) {
                  return routeSelected ? <LineStop key={stop.id} stop={stop} lineName={line.line} color={color} clickHandler={clickStop} /> : null;
                }

                return <LineStop key={stop.id} stop={stop} lineName={line.line} color={lineColorMap[line.line]} clickHandler={clickStop} />;
              });

              // TODO: could be optimized (using push instead of spread?)
              return [...segments, ...stops];
            });
          })}
      </MapContainer>
    </div>
  );
}

export default LineMap;
