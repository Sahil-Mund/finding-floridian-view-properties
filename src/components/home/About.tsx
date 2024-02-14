import React, { useState } from "react";
import { formatText } from "../../common/helper";

interface AboutProps {
  images: any[];
  isHoverEffect: boolean;
  visibleHeading: boolean;
  title?: string;
  sectionName: string;
}

const About: React.FC<AboutProps> = ({
  sectionName,
  images,
  title,
  visibleHeading,
  isHoverEffect,
}) => {
  const cssContent: React.CSSProperties = {
    textTransform: visibleHeading ? "uppercase" : "capitalize",
  };

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseOver = (index: number) => {    
    setHoveredIndex(index);
  };

  const handleMouseOut = () => {
    setHoveredIndex(null);
  };

  return (
    <section className={`${sectionName} image-collection-component`}>
      <div className="container">
        <h3 style={cssContent}>{title}</h3>
        <div className="image-items">
          {images.map((ele, index) => (
            <div
              className="item-container"
              key={index}
              onMouseOver={() => handleMouseOver(index)}
              onMouseOut={handleMouseOut}
            >
              <div className="item">
                <img
                  src={ele.image}
                  alt={ele.heading}
                  // style={{
                  //   opacity:
                  //     isHoverEffect && hoveredIndex === index ? "0.5" : "1",
                  // }}
                />
                {visibleHeading && <h4>{ele.heading}</h4>}
              </div>
              {isHoverEffect && hoveredIndex === index && (
                <div className="hover-card" key={index}>
                  <div className="inner-container">
                    {formatText(ele.cardContent).map((para, index) => (
                      <p key={index}>{para}</p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
