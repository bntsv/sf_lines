import { useDispatch, useSelector } from 'react-redux';
import './lines-list.component.css';
import { Link } from 'react-router-dom';
import { selectLine } from '../../features/lines/linesSlice';

function LinesList() {
  const { lines, linesFilter } = useSelector((store) => store.lines);
  const dispatch = useDispatch();

  
  const filteredLines = linesFilter.length === 0
    ? lines
    : lines.filter((l) => linesFilter.includes(l.routes[0].transportType));

  return (
    <ul className='lines'>
        {filteredLines.length && filteredLines.map((l) => {
            const line = l.line;
            return (
                <li key={line} onClick={() => {
                    dispatch(selectLine(l))
                }}>
                    <Link to={line}>{line}</Link>
                </li>
            )
        })}
    </ul>
  )
}   

export default LinesList;