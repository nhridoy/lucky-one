import React from "react";

const Question = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
      <div className="bg-white p-2 rounded">
        <div className="p-2 border rounded h-full">
          <h2 className="text-2xl">How React Works?</h2>
          <p className="">
            React is a JavaScript library for building user interfaces. It does
            not require you to write HTML or CSS. It has something called JSX.
            Those JSX are written inside the curly braces. React sites are made
            of components. When something changes, the component re-renders.
            This is how React works.
          </p>
        </div>
      </div>
      <div className="bg-white p-2 rounded">
        <div className="p-2 border rounded h-full">
          <h2 className="text-2xl">
            What are the difference between props and state?
          </h2>

          <p className="">
            Props are the properties that are passed to the component. State is
            the data that the component manages. Props are immutable. State can
            be changed.
          </p>
        </div>
      </div>
      <div className="bg-white p-2 rounded">
        <div className="p-2 border rounded h-full">
          <h2 className="text-2xl">How UseState Works?</h2>
          <p className="">
            UseState is a hook that allows you to manage the state of a
            component. It takes a function as an argument. The function returns
            an array. The first element of the array is the current state of the
            component. The second element of the array is a function that allows
            you to update the state of the component.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Question;
