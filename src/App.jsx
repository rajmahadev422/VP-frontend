import { Link } from "react-router-dom";
import { useBasic } from './store/useBasic.js'
import Header from "./components/layout/Header";

function App() {
  const {count, increase, decrease} = useBasic();
  
  return (
    <>
    <Header />
    <Link to='/login'>Login</Link>
      <h1 className="text-3xl">Mahadev</h1>
      <p>{count}</p>
      <div className="flex gap-3 m-3">
        <button className="bg-green-400 text-2xl p-2" onClick={increase}>I</button>
        <button className="bg-green-400 text-2xl p-2" onClick={decrease}>D</button>
      </div>
      
    </>
  )
}

export default App;
