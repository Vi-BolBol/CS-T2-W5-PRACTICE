import Card from './components/Card.jsx';
import { ALL_CARD_DATA } from './data.js'

function App() {
  return (
    <>
      <header>
      <h1>My Neighbors?</h1>
      </header>
      
      <main>
        <div className="cards-view">
          <div className="cards-grid">
            {ALL_CARD_DATA.map((n) => <Card key={n.id} c={n}/>)}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
