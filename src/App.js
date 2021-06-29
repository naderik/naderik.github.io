import HomePage from './pages/HomePage';
import './App.css';
import { BrowserRouter as Router , Route} from 'react-router-dom'
import background from './img/background.png'




function App() {

  return(
    <Router>
      <div className="App" style={{backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
      
        <Route path="/" component={HomePage} exact />
      
      </div>
    </Router>
  )

};

export default App;
