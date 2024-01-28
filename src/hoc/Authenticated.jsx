import { useLocation, Navigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLineData } from '../features/lines/linesSlice';
import { useEffect, useState } from 'react';

// if the user types a line directly in url 
// the line should be displayed if existing
// if not, user should be redirected to all lines view
// a path of /(name of line) should redirect to the line page correctly 
// in a freshly open browser and to the all lines page if the line doesn't exist in the data
export default function Authenticated({ children }) {
  const { selectedLine } = useSelector((store) => store.lines);
  const [ selected, setSelected ] = useState({})
  const dispatch = useDispatch();
  const location = useLocation();
  const params = useParams();

  useEffect(()=>{
    if(!selectedLine){
      // console.log('fetch line data from auth...');

      dispatch(fetchLineData(params.line));
    }

    setSelected(selectedLine);
  }, [selectedLine])



  return selected? children : <Navigate to="/" state={{ from: location.pathname }} />;
}
