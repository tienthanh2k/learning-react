import './App.scss';
import TodoAppComponent from './example/todo-app/TodoAppComponent';
import JobAppComponent from './example/job-app/JobAppComponent';
import MyComponent from './example/MyComponent';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavComponent from './nav/NavComponent';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ListUser from './example/axios/ListUserComponent';
import DetailUserComponent from './example/axios/DetailUserComponent';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavComponent />
        <Routes>
            <Route path="/todo" element={<TodoAppComponent />} />
            <Route path="/about" element={<MyComponent />} />
            <Route path="/user" element={<ListUser />} />
            <Route path="/user/:id" element={<DetailUserComponent />} />
            <Route path="/" element={<JobAppComponent />} />
        </Routes>
        {/* <MyComponent /> */}
        {/* <JobAppComponent /> */}
        {/* <TodoAppComponent /> */}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </BrowserRouter>

  );
}

export default App;
