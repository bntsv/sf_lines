import './lines-list.component.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectLine } from '../../features/lines/linesSlice';

function LinesList() {
  const { filteredLines, lines } = useSelector((store) => store.lines);
  const dispatch = useDispatch();

  const linesData = filteredLines.length ? filteredLines : lines;

  return (
    <ul className="lines">
      {linesData.length &&
        linesData.map((l) => {
          const line = l.line;
          return (
            <li
              key={line}
              onClick={() => {
                dispatch(selectLine(l));
              }}
            >
              <Link to={line}>
                <div className="line-card">
                  <h5>{line}</h5>
                  <div className="line-routes">
                    <span>{l.routes[0].name}</span>
                    <span>{l.routes[1].name}</span>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
    </ul>
  );
}

export default LinesList;
