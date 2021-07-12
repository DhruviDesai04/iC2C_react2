import React from "react";

function Instruction() {
  return (
    <section className="introduction detailsArea">
      <h5>Introduction</h5>
      <ul class="p-0">
        <li>
          <i className="fas fa-arrow-right iconArrow2"></i> The Given timeslots
          are available at mentioned prise.
        </li>
        <li>
          <i className="fas fa-arrow-right iconArrow2"></i> If you didn’t joint
          at a time, only you are responsible for it. (Price won’t return.)
        </li>
        <li>
          <i className="fas fa-arrow-right iconArrow2"></i> If there will be any
          change in time or price amount it will informed you.
        </li>
      </ul>
    </section>
  );
}

export default Instruction;
