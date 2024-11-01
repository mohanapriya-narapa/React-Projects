import logo from './logo.svg';
import './App.css';
import sectionsData from './sections.json';
import Accordian  from './Accordian';

function App() {
  return (
    <div className="App">
     <Accordian sections={sectionsData} />  
    </div>
  );
}

export default App;
