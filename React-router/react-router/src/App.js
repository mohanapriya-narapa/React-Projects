import routes from './routesConfig'
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
   <Router>
    <Routes>
{
  routes.map(({path, element},index )=>(
   <Route key={index} path={path} element={element}></Route>
  ))
}
    </Routes>
   </Router>
  );
}

export default App;
