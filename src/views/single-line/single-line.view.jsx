import './single-line.view.css';
import LineMap from '../../components/lines-map/line-map.component';
import LineDetails from '../../components/line-details/line-details.component';

function SingleLine() {
  return (
    <div className="single-line-view">
      <LineDetails />
      <LineMap />
    </div>
  );
}

export default SingleLine;
