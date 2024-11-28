import logo from './logo.svg';
import './App.css';
import ContentsTabs from './ContentsTabs';
import Contents from './Contents';
function App() {
  return (
    <div className="App">
<ContentsTabs contents={Contents}></ContentsTabs>
    </div>
  );
}

export default App;
