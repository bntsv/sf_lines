import { useDispatch, useSelector } from 'react-redux';
import './lines-filter.component.css';
import { updateFilter } from '../../features/lines/linesSlice';

const lineTypeMap = {
  A: 'Bus',
  TB: 'Trolley bus',
  TM: 'Tram'
};

function LinesFilter() {
  const { linesFilter } = useSelector((store) => store.lines);
  const dispatch = useDispatch();

  function updateFilters(checked, typeFilter) {
    if (checked) {
      dispatch(updateFilter([...new Set(linesFilter).add(typeFilter)]));
    }

    if (!checked) {
      const newFilter = (prev) => {
        const next = new Set(prev);
        next.delete(typeFilter);
        return [...next];
      };

      dispatch(updateFilter(newFilter(linesFilter)));
    }
  }

  return (
    <div className="filter-checkboxes">
      {Object.keys(lineTypeMap).map((lType, i) => {
        return (
          <div className="filter-checkbox" key={i}>
            <input
              type="checkbox"
              checked={linesFilter.includes(lType)}
              onChange={(e) => updateFilters(e.target.checked, lType)}
              id={lType}
              name={lType}
              value={lineTypeMap[lType]}
            />

            <label htmlFor={lType}>{lineTypeMap[lType]}</label>
          </div>
        );
      })}
    </div>
  );
}

export default LinesFilter;
