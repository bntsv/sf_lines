import { useLocation, Navigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectLine } from '../features/lines/linesSlice';

// if the user types a line directly in url 
// the line should be displayed if existing
// if not, user should be redirected to all lines view
export default function Authenticated({ children }) {
  const { selectedLine, lines } = useSelector((store) => store.lines);
  const dispatch = useDispatch();
  const location = useLocation();
  const params = useParams();

  if (!selectedLine) {
    const line = lines.find((l)=>l.line === params.line);
    
    if(line) {
      dispatch(selectLine(line));
      return children;
    }

    return <Navigate to="/" state={{ from: location.pathname }} />;
  }

  return children;
}
