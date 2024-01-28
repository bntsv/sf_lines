import { useEffect, useState } from 'react';
import './App.css';
import { getLinesData } from './api/api';
import Navbar from './components/navbar/navbar.component';
import { Route, Routes } from 'react-router-dom';
import Home from './views/home/home.view';
import SingleLine from './views/single-line/single-line.view';
import Authenticated from './hoc/Authenticated';
import { useDispatch } from 'react-redux';
import { fetchLinesData } from './features/lines/linesSlice';

function App() {
  // const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    // async function fetchData() {
    //   const response = await getLinesData();

    //   if (!data.length) {
    //     setData(response);
    //   }
    // }

    // fetchData();

    dispatch(fetchLinesData());
  }, []);

  return (
    <>
      <header>
        <h1 className="logo">S</h1>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/:line"
            element={
              <Authenticated>
                <SingleLine />
              </Authenticated>
            }
          ></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
