import { ImgUploadIcon } from "assets/svg";
import React, { useEffect, useRef, useState } from "react";

interface ImageUploadProps {
  // Add your component's props here
  setFormData: (src: any) => void;
  setBannerImgUrl: (src: any) => void;
  setSelectedCoverImage: (src: any) => void;
  selectedCoverImage : string;
  type: any;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  setFormData,
  type,
  setBannerImgUrl,
  setSelectedCoverImage,
  selectedCoverImage

}) => {
  const fileInputRef = useRef(null);

  //   const handleSvgClick = () => {
  //     if(fileInputRef?.current){

  //         (fileInputRef?.current as HTMLInputElement).click();
  //     }
  //   };



  const handleChange = async (event: any) => {
    // handle file change
    // console.log(event.target?.files && event.target?.files[0]);
    const file = event.target.files && event.target.files[0];
    if (file) {
      // Read the selected file as a data URL
      const reader = new FileReader();
      reader.onloadend = () => {
        // Set the selected image to the data URL
        setSelectedCoverImage(reader.result as string);
        if (type === "banner") {
          setFormData((prev: any) => {
            return { ...prev, banner_img: reader.result };
          });
        }

        if (type === "gallery") {
          setFormData((prev: any) => [...prev, file]);
        }
      };
      reader.readAsDataURL(file);

      setBannerImgUrl(file);
      // let's use aws
      // const data = await uploadToAWS(file);
      // console.log(data);
    }
  };
  /*
.image-upload-container{
    width: 250px;
    height: 150px;
    border: 1px solid #C2C2C2;
    background: #F8F8F8;
    display: flex;
    justify-content: center;
    .upload{
        display: flex;
        align-items: center;
        justify-content: center;
    }

   
}
*/
  return (
    <div className="image-upload-container">
      <div className="upload">
        <label htmlFor="imageUpload">
          {selectedCoverImage ? (
            <img
              src={selectedCoverImage}
              alt="Selected"
              className="selected-banner-img"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          ) : (
            <ImgUploadIcon className="pointer" />
          )}
        </label>
        <input
          type="file"
          id="imageUpload"
          name="image"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleChange}
        />
        {/* <ImgUploadIcon /> */}
      </div>
    </div>
  );
};

export default ImageUpload;
