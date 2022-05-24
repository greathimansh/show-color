import React, { useContext, useEffect, useRef } from "react";
import "../App.css";
import iconBook from "../Component/icon-book.png";
import { useState } from "react";
const Todo = () => {
  const [inputItem, setInputItem] = useState();
  const [items, setItems] = useState([""]);
  //useRef(null)
  //const { Provider, Consumer } = React.createContext();
  //useEffect();
  //const [state ,dispatch]= useReducer(reducer,initi)
  //useMemo(function())

  const addItems = () => {
    setItems([...items, inputItem]);
    setInputItem("");
  };

  // const deleteItems=()=>{

  // }

  return (
    <div className="main-div">
      <div className="child-div">
        <div className="image-div">
          <figure>
            <img src={iconBook} alt="" />
          </figure>
          <span>
            <h2>TODO LIST </h2>
          </span>
        </div>

        <div className="inputitem">
          <input
            type="text"
            placeholder="Write here &#x270D;...."
            value={inputItem}
            onChange={(e) => setInputItem(e.target.value)}
          />
          <button type="submit" className="btn" onClick={addItems}>
            <i className="fa-solid fa-plus icon-div" />
          </button>
        </div>

        <div className="showdata">
          {items.map((elem) => {
            return <div className="eachItem">
            <h2>{ elem } </h2>

            <button className="btnclose0" type="submit"> &#x2716;</button>
            <button className="btnclose1" type="submit">&#x270D;</button>
    
            </div>;
        
        })}
    
        
        </div>
      </div>
    </div>
  );
};

export default Todo;
