import { useEffect, useState } from 'react';
import './App.css';
import { getLinesData } from './api/api';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await getLinesData();

      if (!data.length) {
        setData(response);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <h1>sf-lines</h1>
      <div>
        {data.length &&
          data.map((l) => {
            console.log(l);
            return <p>{l.line}</p>;
          })}
      </div>
    </>
  );
}

export default App;
