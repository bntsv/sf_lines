import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectLine, updateFilteredLines } from '../../features/lines/linesSlice';
import LinesPanel from '../../components/lines-panel/lines-panel.component';
import LineMap from '../../components/lines-map/line-map.component';

function Home() {
  const { lines, linesFilter } = useSelector((store) => store.lines);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const gotToLine = (lineName) => {
    const selectedLine = lines.find((ln) => ln.line === lineName);

    dispatch(selectLine(selectedLine));

    navigate(`/${lineName}`);
  };

  useEffect(() => {
    const filteredLines = linesFilter.length === 0 ? lines : lines.filter((l) => linesFilter.includes(l.routes[0].transportType));

    dispatch(updateFilteredLines(filteredLines));
  }, [linesFilter]);

  return (
    <>
      <LinesPanel />
      <LineMap clickStop={gotToLine} />
    </>
  );
}

export default Home;
