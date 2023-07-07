import "./App.css";
// import Todo from "./components/Todo";
// import Title from "./components/Title";
// import Modal from "./components/Modal";
// import React, { useState, useEffect } from "react";
// import Counter from "./components/Counter";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Nav from "./components/Nav"
import Users from "./pages/Users";

function App() {

  return (
    <div>
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="users/:id" element={<Users />}/>
        </Routes>
      </Router>
    </div>
  )










  // //Section 1 of Video Didn't Want to Delete for Ref
  // const [showModal, setShowModal] = useState(false);

  // function onTodoDelete() {
  //   setShowModal(true);
  // }

  // function cancelModal() {
  //   setShowModal(false);
  // }

  // function confirmModal() {
  //   setShowModal(false);
  // }
  
  // useEffect(()=>{
  //   console.log('ONLY on mount')
  // }, [])

  // useEffect(()=>{
  //   console.log('on mount AND showModal change')
  // }, [showModal])

  // useEffect(()=>{
  //   console.log('EVERY render')
  // })

  // return (
  //   <div>
  //     <Title />
  //     <div>
  //       <input
  //         type="text"
  //         onChange={(event) => {
  //           console.log(event.target.value);
  //         }}
  //       />
  //       <button onClick={() => setShowModal(true)}>Add todo</button>
  //     </div>
  //     <div className="todo__wrapper">
  //       <Todo onTodoDelete={onTodoDelete} title="Finish FES" />
  //       <Todo onTodoDelete={onTodoDelete} title="Finish Interview" />
  //       <Todo onTodoDelete={onTodoDelete} title="Land A 100k Job" />
  //     </div>
  //     {showModal && <Modal confirmModal={confirmModal} cancelModal={cancelModal} title="Confirm Delete" />}
  //   </div>
  // );
}

export default App;
