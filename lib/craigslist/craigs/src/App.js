import { Container, Col } from 'reactstrap'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Results from './components/Results'
function App() {
  return (
    <div className='overall-app'>
      <Header />
      <Results />
     
    </div>
  );
}

export default App;
