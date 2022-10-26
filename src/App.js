import './normalize.css'
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import MainPosts from './components/MainPosts/MainPosts';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainPosts/>
      <Sidebar/>
    </div>
  );
}

export default App;
