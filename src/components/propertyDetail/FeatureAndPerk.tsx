import React from "react";
import { formatText } from "../../common/helper";
import ListItems from "./ListItems";

interface FeatureAndPerkProps {
  details: any;
}

const FeatureAndPerk: React.FC<FeatureAndPerkProps> = ({ details }) => {
  const { apartmentFeatures, extendedPerks, extendedPerksDesc } = details;
  return (
    <>
      {/* <div className="feature-perks">
        <ListItems title="APARTMENT FEATURES" data={apartmentFeatures} />
        <div className="vr"></div>
        <ListItems title="EXTENDED PERKS" data={extendedPerks} />
      </div> */}
      <div className="features-desc">
        {formatText(extendedPerksDesc).map((para, index) => (
          <p key={index}>{para}</p>
        ))}
      </div>
    </>
  );
};

export default FeatureAndPerk;
