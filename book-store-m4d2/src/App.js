
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import MyJumbotron from './components/MyJumbotron';



function App() {
  return (
    <div className="App">
      <MyNav title="Books Store" />
      <MyJumbotron/>
      <MyFooter />
      
    </div>
  );
}

export default App
