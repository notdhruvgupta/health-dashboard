import './App.css';
import Sidebar from './layout/Sidebar/Sidebar';
import DashboardMainComponent from './Dashboard/DashboardMainComponent';

function App() {
  return (
    <div className="md:h-screen flex flex-col font-quickSand md:pb-2 pb-24">
      <div className='flex-1 overflow-auto'>
        <div className='flex h-full'>
          <div className='hidden lg:block'>
            <Sidebar />
          </div>
          <DashboardMainComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
