import logo from './logo.svg';
import './App.css';
import Sidebar from './layout/Sidebar/Sidebar';
import Header from './layout/Header/Header';
import DashboardMainComponent from './Dashboard/DashboardMainComponent';

function App() {
  return (
    <div className="h-screen flex flex-col font-quickSand">
      <Header />
      <div className='flex-1 overflow-auto'>
        <div className='flex h-full'>
          <Sidebar/>
          <DashboardMainComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
