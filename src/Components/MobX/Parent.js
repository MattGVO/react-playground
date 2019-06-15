import React from "react";
import Child from "./Child";

function Parent() {
  return (
    <div className="Parent">
      <div>
        <span>Price: </span>
        <div className="in-container">
          <p>$</p>
          <input
            size="4"
            onInput={e =>
              e.target.value.length > 3
                ? (e.target.value = +e.target.value.toString().slice(0, 4))
                : null
            }
            className="mobx-in"
            type="number"
            max="999"
          />
          <span>.</span>
          <input
            style={{width: "2rem"}}
            onInput={e =>
              e.target.value.length > 2
                ? (e.target.value = +e.target.value.toString().slice(0, 2))
                : null
            }
            className="mobx-in-two"
            type="number"
          />
        </div>
      </div>
      <Child />
    </div>
  );
}

export default Parent;
