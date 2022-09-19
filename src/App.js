import './App.css';
import Navbar from './components/navbar/Navbar'
import Sidebar from "./components/sidebar"
import Content from './components/content'
import postimg from './assets/images.png'
import moment from 'moment';

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
        <Content
          name="Muhammd Huzaifah"
          date={moment().startOf('hour').fromNow()}
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          Quia, quibusdam. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Quia, quibusdam. Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Quia, quibusdam. 
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          Quia, quibusdam. Lorem ipsum dolor sit amet consectetur, 
          adipisicing elit. Quia, quibusdam."
          image={postimg}
        />

        <Content
          name="Muhammd Huzaifah"
          date={moment().startOf('hour').fromNow()}
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          Quia, quibusdam. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Quia, quibusdam. Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Quia, quibusdam. 
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          Quia, quibusdam. Lorem ipsum dolor sit amet consectetur, 
          adipisicing elit. Quia, quibusdam."
          image={postimg}
        />
    </>
  );
}

export default App;
