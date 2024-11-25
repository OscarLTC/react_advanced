import "./App.css"
import { Button } from "./components"

function App() {


  const handleClick = () => {
    console.log("click");
  }


  return <Button parentMethod={handleClick}>
    <div>CTMR</div>
  </Button>
}
export default App
