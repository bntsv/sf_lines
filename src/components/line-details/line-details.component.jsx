import { useSelector } from 'react-redux';
import './line-details.component.css'

function LineDetails() {
    const { selectedLine } = useSelector((store) => store.lines);

    return (
      <div className="line-details layout-container">
        <h2>Line: {selectedLine?.line}</h2>
      </div>
    );
  }
  
  export default LineDetails;