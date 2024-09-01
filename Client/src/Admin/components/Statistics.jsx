import React from "react";
import CardComponent from "./CardComponent.jsx";

function Statistics() {
  return (
    <main className='border-2 p-4'>
      <h1 className='text-2xl font-bold mb-4'>Dashboard</h1>
      <div className="flex">
        <CardComponent count="300" name="User Count" />
        <CardComponent count="200" name="Vendor Count" />
        <CardComponent count="111" name="Rider Count" />
        <CardComponent count="999" name="Side Traffic" />
      </div>
    </main>
  );
}

export default Statistics;
