import { useDispatch, useSelector } from 'react-redux';
import './lines-list.component.css';
import { Link } from 'react-router-dom';
import { selectLine } from '../../features/lines/linesSlice';

// const lineTypeMap = {
//     A: 'Bus',
//     TB: 'Trolley bus',
//     TM: 'Tram'
// }

function LinesList() {
  const {lines} = useSelector((store) => store.lines);
  const dispatch = useDispatch();

  return (
    <ul className='lines'>
        {lines.length && lines.map((l) => {
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