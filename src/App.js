import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './components/Header/Header';
import Filter from './components/Filter/Filter';
import Result from './components/Result/Result';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <Filter />
      <Result />
      <Footer />
    </div>
  );
}

export default App;
