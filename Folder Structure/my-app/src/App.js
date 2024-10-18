import logo from './logo.svg';
import './App.css';
import Folder from './Folder.js'
import { explorer } from './FolderData/FolderData'; 

function App() {
  return (
    <div className="App">
    <Folder explorer={explorer }>

    </Folder>
    </div>
  );
}

export default App;
