import logo from './logo.svg';
import './App.css';
import CurrentPage from './components/CurrentPage';

function App() {
  return (
    <div className="App">
      <div className='current-page render-page'>
        <CurrentPage />
      </div>
    </div>
  );
}

export default App;
