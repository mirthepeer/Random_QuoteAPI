
import './App.css';
import './components/QuotCard'
import QuotCard from './components/QuotCard';
import Nav from './components/Nav/Nav';

function App() {
  return (
    
    <div className='app'>
      <Nav />
      <QuotCard />
    </div>
  );
}

export default App;
