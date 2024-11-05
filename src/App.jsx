import './App.css';
import Home from './layout/Home';
import "./style/main.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../src/layout/Header'
import Footer from './layout/Footer';
function App() {
  return (
    <div className='app'>
      <Header/>
      <Home/>
    </div>
  );
}

export default App;