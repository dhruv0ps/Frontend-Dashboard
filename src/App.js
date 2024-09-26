
import './App.css';
import CardGrid from './Components/Card';

import CustomBarChart from './Components/CustomBarChart';
import CustomPieChart from './Components/CustomPieChart';
import Dashboard from './Components/Dashboard';
import Navbar from './Components/Navbar';
import ProjectTable from './Components/ProjectTable';
import Sidebar from './Components/Sidebar';
import Table from './Components/Table';

function App() {
  return (
    <div className="App">
   <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4 bg-gray-100">
        <h1 className="text-2xl font-bold">Main Content Area</h1>
      <Dashboard/>
        <div className="mt-4">
          <p>This is where your other components will be displayed.</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
