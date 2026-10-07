import './App.css'
import SidebarTabs from 

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <SidebarTabs></SidebarTabs>
      <Dashboard></Dashboard>
    </div> 
  )
}
import Dashboard from './Dashboard'

export default App
