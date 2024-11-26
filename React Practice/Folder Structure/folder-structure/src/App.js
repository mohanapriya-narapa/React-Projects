import './App.css';
import  FolderData from './FolderData.js';
import Folder from './Folder.js';
function App() {
  return (
    <div className="App">
<Folder explorer={FolderData}></Folder>
    </div>
  );
}

export default App;
