// import Dash from "./components/dashboard";
import {Routes , Route} from 'react-router-dom'

import Users from './Users'
import AddUsers from './Pages/AddUsers';
import EditUsers from './Pages/EditUsers'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Users/>}></Route>
      <Route path="/add" element={<AddUsers/>}></Route>
      <Route path="/edit/:id" element={<EditUsers/>}></Route>
    </Routes>
    </>
  );
}

export default App;