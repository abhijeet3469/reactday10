import React, {useState, useRef} from "react";
// import { Api } from "../Resources/Api";

const Useref = () => {
  // const [state, setState] = useState("");
  const state = useRef("");
  const [name, setname] = useState(null);
  // const handleInput = (e) => {
  //   setState(e.target.value)
  // }
  const handleForm = (e) => {
    e.preventDefault();
    console.log(state.current.value);
    setname(state.current.value)
  }
  console.log("render");
  return (
    <>
    <h4>Hi, I am {name}</h4>
      <form onSubmit={handleForm}>
        Enter your name <input type="text" id="name" ref={state}/>
        <button className="btn btn-danger">Submit ✔️</button>
      </form>

      {/* ------------------------------------------------------------------------------------- */}
      {/* PROJECT */}
      {/* <div className="topic">
      {Api.map((val) => {
        return (<div className="card_ref">
          <img src={val.ImageAsset} alt="" height="200px" width="400px"></img>
          <div className="card_details">
            <h5>
              {val.CategoryName} {val.PublishedDate}
            </h5>
            <h5>{val.Title}</h5>
            <h6>{val.BlogContent}</h6>
          </div>
          <h6>❤️ {val.Likes}</h6>
        </div>);
      })}
      </div> */}
      {/* ------------------------------------------------------------------------------------------------ */}
    </>
  );
};
export default Useref;

// controlled and uncontrolled components:-
// using hooks we are trying to control everything as much as possible - from starting, making a component to rendering component, takes function and value 
// useRef ✅ useState ❌:- Stores state/value and also update, no re-rendering ✅, works like JS DOM ✅.
// useRef uses uncontrolled way and useState use controlled way.

// Uncontrolled components - 