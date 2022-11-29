// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchGreetings, selectGreeting } from "../redux/greetingSlice";

// function Greeting() {

//  const greeting = useSelector(selectGreeting)
//  const dispatch = useDispatch();

//  useEffect(() => {
//   dispatch(fetchGreetings());
//  },[dispatch])

//  return (
//   <div>
//    <h1> {greeting} </h1>
//    <h2>thank you!</h2>
//   </div>
//  );
// }

// export default Greeting;


import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGreeting } from "../redux/greetings/greetings";

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greetings.greeting);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, []);

  return <h3>{greeting}</h3>;
};

export default Greeting;