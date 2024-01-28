import './line-details.component.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectRoute } from '../../features/lines/linesSlice';

function LineDetails() {
  const { selectedLine, selectedRoute } = useSelector((store) => store.lines);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const selectedRoute = selectedLine.routes.find((r) => r.name === e.target.value);
    console.log(selectedRoute);
    dispatch(selectRoute(selectedRoute));
  };

  useEffect(() => {
    console.log(selectedLine);
  });

  const renderRouteStopsTable = (route) => (
    <div className="table-wrap">
      <table cellPadding="10">
        <thead>
          <tr>
            <th scope="col">Stop name</th>
            <th scope="col">ID</th>
            <th scope="col">Avg. people</th>
          </tr>
        </thead>
        <tbody>
          {route?.stops.map((stop) => {
            return (
              <tr key={stop.id}>
                <td>{stop.name}</td>
                <td>{stop.id}</td>
                <td>{stop.averagePeople}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="line-details">
      <h2>{selectedLine?.line}</h2>

      {/* <label htmlFor="routeSelect">Choose route: </label> */}
      <select name="route" id="routeSelect" className="custom-select" onChange={handleChange}>
        <option value={selectedLine?.routes[0].name}>{selectedLine?.routes[0].name}</option>
        <option value={selectedLine?.routes[1].name}>{selectedLine?.routes[1].name}</option>
      </select>

      {renderRouteStopsTable(selectedRoute ? selectedRoute : selectedLine?.routes[0])}
    </div>
  );
}

export default LineDetails;
