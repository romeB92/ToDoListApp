import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//add into array = concat
//delete from an array = filter
//update = map

//create your first component
const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [mylist, setMyList] = useState([]);

  return (
    <div className="container">
      <h1>My List</h1>
      <ul>
        <li>
          <input
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyUpCapture={(e) => {
              if (e.key === "Enter") {
                console.log("enter was pressed");
                setMyList(mylist.concat(inputValue));
                setInputValue("");
              }
            }}
            placeholder="Write Here"
          ></input>
        </li>
        {mylist.map((item, index) => (
          <li>
            {item}{" "}
            <i
              className="fas fa-solid fa-trash"
              onClick={() =>
                setMyList(
                  mylist.filter((t, currentIndex) => index != currentIndex)
                )
              }
            ></i>
          </li>
        ))}
      </ul>
      <div>{mylist.length} tasks</div>
    </div>
  );
};

export default Home;
