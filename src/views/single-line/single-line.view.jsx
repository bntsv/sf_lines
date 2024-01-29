import { useDispatch, useSelector } from 'react-redux';
import { selectRoute } from '../../features/lines/linesSlice';
import LineDetails from '../../components/line-details/line-details.component';
import LineMap from '../../components/lines-map/line-map.component';

function SingleLine() {
  const { selectedLine } = useSelector((store) => store.lines);
  const dispatch = useDispatch();

  const clickRoute = (route) => {
    dispatch(selectRoute(route));
  };

  return (
    <div className="display-flex single-line-view">
      <LineDetails />
      <LineMap selectedLine={selectedLine} clickSegment={clickRoute} />
    </div>
  );
}

export default SingleLine;
