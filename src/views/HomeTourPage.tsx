import React from "react";
import { VideoGallery } from "../components";

import '../styles/hometour.scss'
import { videoGallerySources } from "../assets/constansts";

interface HomeTourProps {
  // Add your component's props here
}

const HomeTour: React.FC<HomeTourProps> = (props) => {
  return (
    <section className="home-tour-section">
      <VideoGallery videos={videoGallerySources}/>
    </section>
  );
};

export default HomeTour;
