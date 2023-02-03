import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import {setData} from './reducers/actions'
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import StudentDetails from './pages/StudentDetails';
import { BrowserRouter,Route,Router,Routes } from 'react-router-dom';

function App({appState, addData}) {
  function handleAddTask(){
    console.log(appState)
    const task = document.querySelector('.task').value;
    addData(task);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
       
        <Routes>
          <Route exact path="/" element={<Home />}>
          </Route>
          <Route exact path="/student" element={<StudentDetails />} >

          </Route>
        </Routes>
        {/* <h1> All you task</h1>
        <div className="tasks">
          {appState.tasks.map((task)=>{
            <p>{task} </p>
          })}
        </div>
        <input type="text" className="task" />
        <button onClick={handleAddTask}> Add task </button>
         */}
     </BrowserRouter>
    </div>
  );
}
const mapStateToProps = (state) =>({
  appState:state
})

const mapDispatchToProps = (dispatch)=>({
 addData:(userData) => dispatch(setData(userData))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
