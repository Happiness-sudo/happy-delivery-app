import React from "react";
import { useNavigate } from "react-router-dom";
function Home() {
  let navigate=useNavigate()
  return (
    <div className="page home">
      <h1>Welcome to Happy Delivery 🚚</h1>
      <p>
        Order your favorite items online and choose a delivery guy of your choice!
      </p>
      <button onClick={()=>navigate("/items")} className="cta-btn">Start Ordering</button>
    </div>
  );
}

export default Home;
