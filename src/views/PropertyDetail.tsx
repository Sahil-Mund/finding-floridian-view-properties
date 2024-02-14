import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import {
  Banner,
  NeignborhoodDetails,
  ApartmentInfo,
  Gallery,
} from "../components";
import {
  rentalApartmanetDetails,
  SalesApartmanetDetails,
  dummyApartmentDetails,
} from "../assets/constansts";
import "../styles/property-detail.scss";
import { useUserModal } from "../hooks/useUserModal";
import { apartmanetDetails } from "assets/data";

interface PropertyDetailProps {
  // Add your component's props here
}

const PropertyDetail: React.FC<PropertyDetailProps> = (props) => {
  //TODO : later add logic for this
  const [propertyType, setPropertyType] = useState<"RENT" | "BUY">("RENT");
  const [property, setProperty] = useState<number>(0);

  const location = useLocation();

  useEffect(() => {
    console.log(location);
    const idx = location.search.split("&title=")[0].split("?d=")[1];
    setProperty(+idx - 1);
  }, [location, location.search, location.key]);

  // const STATIC_TYPE : "BUY" | "RENT" = "RENT";
  const { banner, neighbourHood, property_title, gallery, ...apartmentInfo } =
    apartmanetDetails[Number(property)]; /// [0];
  // propertyType === "RENT" ? rentalApartmanetDetails : SalesApartmanetDetails;
  // rentalApartmanetDetails

  // const {
  //   state: { data },
  // } = useLocation();
  const [unLock, setUnLock] = useState<boolean>(false);
  const [ispremiumUser, setIspremiumUser] = useState<boolean>(true);
  const { onOpen } = useUserModal();

  const handleUnlock = () => {
    setUnLock(true);
    setTimeout(() => {
      // setIspremiumUser(true);
      onOpen();
      setUnLock(false); // TODO:  will remove this later
    }, 3000);
  };



  return (
    <div className="property-container">
      <Banner
        data={banner}
        propertyType={propertyType}
        gallery={gallery}
        title={property_title}
      />
      <NeignborhoodDetails data={neighbourHood} />
      <ApartmentInfo
        data={ispremiumUser ? apartmentInfo : dummyApartmentDetails}
        ispremiumUser={ispremiumUser}
        unLock={unLock}
        onUnLock={handleUnlock}
      />

      {ispremiumUser && <Gallery data={gallery} />}
    </div>
  );
};

export default PropertyDetail;
