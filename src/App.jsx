import './App.css';
import GetCharacters from './components/GetCharacters/GetCharacters';

function App() {
  return (
    <>
      <div></div>
      <h1>Rick & Morty</h1>
      <h2>CHARACTERS</h2>
      <div className='card'>
        <GetCharacters />
      </div>
    </>
  );
}

export default App;
