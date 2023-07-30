import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Grocery } from './pages/grocery/Grocery';
import { HomePage } from './pages/homePage/HomePage';
import { BabyCare } from './pages/babyCare/BabyCare';
import { Beverages } from './pages/beverages/Beverages';
import { Cleaning } from './pages/cleaning/Cleaning';
import { OilGhee } from './pages/oilGhee/OilGhee';
import { PersonalCare } from './pages/personalCare/PersonalCare';
import { NotFound } from './pages/notFound/NotFound';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route index element={<Grocery />} />
            <Route path="/personalCare" element={<PersonalCare />} />
            <Route path="/cleaning" element={<Cleaning />} />
            <Route path="/babyCare" element={<BabyCare />} />
            <Route path="/oilGhee" element={<OilGhee />} />
            <Route path="/beverages" element={<Beverages />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

{/* <Routes>
  <Route path="/" element={<HomePage />}>
    <Route index element={<Grocery />} />
    <Route path="/personalCare" element={<PersonalCare />} />
    <Route path="/cleaning" element={<Cleaning />} />
    <Route path="/babyCare" element={<BabyCare />} />
    <Route path="/oilGhee" element={<OilGhee />} />
     <Route path="/oilGhee" element={<Beverages />} />
    <Route path="*" element={<NotFound />} />
  </Route>
</Routes> */}
