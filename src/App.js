import HomePage from './pages/HomePage';
import './App.css';
import { BrowserRouter as Router , Route} from 'react-router-dom'



function App() {

  return(
    <Router>
      <div className="App">
      
        <Route path="/" component={HomePage} exact />
      
      </div>
    </Router>
  )

};

export default App;
