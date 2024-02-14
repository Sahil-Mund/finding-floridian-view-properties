import React from "react";
import { formatText } from "../../common/helper";
import ListItems from "./ListItems";
import { LockIcon, UnlockIcon } from "../../assets/svg";

interface DummyFeatureAndPerkProps {
  details: any;
  unLock: boolean;
  onUnLock: () => void;
}

const DummyFeatureAndPerk: React.FC<DummyFeatureAndPerkProps> = ({
  details,
  unLock,
  onUnLock,
}) => {
  const { apartmentFeatures, extendedPerks, extendedPerksDesc } = details;
  return (
    <>
      <div className={`btn-unlock dummy-unlock ${unLock && "animated"}`}>
        {unLock ? (
          <>
            {" "}
            <UnlockIcon className="unlock-icon" />
            {/* <LockIcon className="lock-icon" /> */}
          </>
        ) : (
          <>
            <span onClick={onUnLock} className="pointer">
              Unlock Premium Insights
            </span>
            <LockIcon className="lock-icon" />
          </>
        )}
      </div>
      <div className="dummy-content">
        <div className="feature-perks">
          <ListItems title="APARTMENT FEATURES" data={apartmentFeatures} />
          <div className="vr"></div>
          <ListItems title="EXTENDED PERKS" data={extendedPerks} />
        </div>
        <div className="features-desc">
          {formatText(extendedPerksDesc).map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>
      </div>
    </>
  );
};

export default DummyFeatureAndPerk;
