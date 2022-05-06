import React from "react";
import MemberShip from "../../../../components/pagesComps/gym/membership/MemberShip";
import { memberships } from "../../../../utils/membership/memberships";

const Pricing = () => {
  return (
    <div id="pricing" className="pricing-container">
      {memberships.map((item) => (
        <MemberShip item={item} />
      ))}
    </div>
  );
};

export default Pricing;
