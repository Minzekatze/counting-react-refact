import React from "react";

export default ({ decreasing, counting, counter }) => {
  return (
    <div>
      {counter.map((oneCounter) => (
        <div key={oneCounter.id}>
          <button className="btn+" onClick={() => counting(oneCounter.id)}>
            +
          </button>
          {oneCounter.count}
          <button className="btn-" onClick={() => decreasing(oneCounter.id)}>
            -
          </button>
        </div>
      ))}
    </div>
  );
};
