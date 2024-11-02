import logo from './logo.svg';
import './App.css';
import contents from './content.json'
import ContentTabs from './ContentTabs'

function App() {
  return (
    <div className="App">
     <ContentTabs  contents={contents}>
      </ContentTabs> 
    </div>
  );
}

export default App;
