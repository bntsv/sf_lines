import { useSelector } from "react-redux";

function SingleLine() {
  const { selectedLine } = useSelector((store) => store.lines);

  return (
    <>
        <h2>Single line: {selectedLine?.line}</h2>
        <h2>MapComponent</h2>
    </>
  );
}

export default SingleLine;