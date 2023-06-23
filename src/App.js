import './App.css';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path="/" component={LoginPage} />
        <Route path="/dashboard" component={Dashboard} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
