import './css/App.css';
import Counter from './components/Counter';

function App() {
  return (
    <div className='outer'>
      <Counter title="Counter 1" />
      <Counter title="Counter 2" />
    </div>
  );
}

export default App;
