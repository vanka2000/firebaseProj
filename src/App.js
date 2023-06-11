import './App.css';
import Header from './components/header/header';
import Mainfirst from './components/mainfirst/mainfirst';
import MainSec from './components/mainsec/mainsec';
import {app} from "./config/firebase";
import MainHistory from './components/mainhistory/mainhistory';
import Form from './components/form/form';
import Broker from './components/broker/broker';
import Footer from './components/footer/footer';

function App() {
  console.log(app);
  return (
    <>
    <Header/>
    
    <Mainfirst/>
    <MainSec/>
    <MainHistory />
    <Form/>
    <Broker/>
    <Footer/>
    </>
  )
}

export default App;
