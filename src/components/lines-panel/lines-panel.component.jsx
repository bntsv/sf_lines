import LinesFilter from "../lines-filter/lines-filter.component";
import LinesList from "../lines-list/lines-list.component";
import './lines-panel.component.css'

function LinesPanel() {
  return (
    <div className="lines-panel layout-container">
      <LinesFilter/>
      <LinesList/>
    </div>
  );
}

export default LinesPanel;