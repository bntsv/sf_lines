import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { fetchLinesData } from './features/lines/linesSlice';
import Navbar from './components/navbar/navbar.component';
import Authenticated from './hoc/Authenticated';
import Home from './views/home/home.view';
import SingleLine from './views/single-line/single-line.view';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLinesData());
  }, []);

  return (
    <>
      <header>
        <div className="logo">S</div>
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
