import './App.css';
import Fsection from './fsection';
import Header from './Header';
import Link from './Link';
import Myskill from './Myskill';
import Loader from './Loader';
import Designskill from './designskill';

function App() {
  return (
    <div className="App">
          <Header />
          <Link />
          <Fsection />
          <Myskill />
          <Loader />
          <Designskill />
    </div>
  );
}

export default App;
