import Form from './components/Form';
import MissionStatement from './components/MissionStatement';
import TextOne from './components/TextOne';
import TextTwo from './components/TextTwo';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Little Feets</h1>
      </header>
      <TextOne />
      <MissionStatement />
      <TextTwo />
      <Form />
      
    </div>
  );
}

export default App;
