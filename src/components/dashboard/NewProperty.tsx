import React, { Key, useEffect, useRef, useState } from "react";
import { BuyProperties, ImgUploadIcon, SellProperties } from "../../assets/svg";
import ImageUpload from "./ImageUpload";
import Rating from "components/questionnaire/Rating";
import PropertyRating from "./PropertyRating";
import "../../styles/elements/rating.scss";
import { useForm } from "hooks/useForm";
import Video from "components/home/Video";
import { FormMethod, Link, useLocation, useNavigate } from "react-router-dom";
import { add_property, uploadSingleImageToAWS } from "backend";
import { toast } from "react-toastify";

interface NewPropertyProps {
  // Add your component's props here
}

const initialFormState = {
  title: "",
  subtitle: "",
  city: "",
  state: "",
  flatNo: "",
  zip: "",
  price: "",
  mls: "",
  description: "",
  property_type: "",
  num_of_bedroom: 0,
  num_of_bathroom: 0,
  property_located_at: "",
  amenities: {
    newconstruction: false,
    gym: false,
    petfriendly: false,
    waterfront: false,
    newlyrenovated: false,
    yard: false,
    parking: false,
    inunitlaundry: false,
    pool: false,
    luxury: false,
    concierge: false,
    noHomeOwnersAssociation: false,
    garage: false,
    centralAC: false,
  },
  located_in_florida: "",
  rating: {},
  gallery: [],
  homeTour: {},
  banner_img: "",
  acknowledgement: false,
};

const rent = [
  {
    label: "New Construction",
    value: "newconstruction",
  },
  {
    label: "New Renovated",
    value: "newlyrenovated",
  },
  {
    label: "Pool",
    value: "pool",
  },
  {
    label: "Gym",
    value: "gym",
  },
  {
    label: "Yard",
    value: "yard",
  },
  {
    label: "Luxury",
    value: "luxury",
  },
  {
    label: "Pet Friendly",
    value: "petfriendly",
  },
  {
    label: "Parking",
    value: "parking",
  },
  {
    label: "Concierge",
    value: "concierge",
  },
  {
    label: "Waterfront",
    value: "waterfront",
  },
  {
    label: "In-Unit Laundry",
    value: "inunitlaundry",
  },
];
const sell = [
  {
    label: "New Construction",
    value: "newconstruction",
  },
  {
    label: "New Renovated",
    value: "newlyrenovated",
  },
  {
    label: "Pool",
    value: "pool",
  },
  {
    label: "Yard",
    value: "yard",
  },
  {
    label: "Luxury",
    value: "luxury",
  },
  {
    label: "No Homeowners Association",
    value: "noHomeOwnersAssociation",
  },
  {
    label: "Waterfront",
    value: "waterfront",
  },
  {
    label: "Garage",
    value: "garage",
  },
  {
    label: "Central AC",
    value: "centralAC",
  },
];

const located_at = [
  {
    label: "Central",
    value: "Central",
  },
  {
    label: "South",
    value: "South",
  },
  {
    label: "West",
    value: "West",
  },
  {
    label: "North",
    value: "North",
  },
  {
    label: "East (Atlantic Ocean)",
    value: "East (Atlantic Ocean)",
  },
];

const rental_property_type = [
  {
    label: "Apartment",
    value: "Apartment",
  },
  {
    label: "Town home",
    value: "Town home",
  },
  {
    label: "House",
    value: "House",
  },
];
const sell_property_type = [
  {
    label: "Condo",
    value: "Condo",
  },
  {
    label: "Single Family",
    value: "Single Family",
  },
  {
    label: "Townhome",
    value: "Townhome",
  },
  {
    label: "Multi-Family",
    value: "Multi-Family",
  },
  {
    label: "Ranch",
    value: "Ranch",
  },
];
const NewProperty: React.FC<NewPropertyProps> = (props) => {
  const rating = [
    {
      label: "Walkability",
      value: "walkability",
    },
    {
      label: "Closeness to Restaurents/Stores",
      value: "closeness_To_restaurant",
    },
    {
      label: "Proximity to Parks/Nature",
      value: "proximity_to_parks",
    },
    {
      label: "Quality of Schools",
      value: "quality_of_schools",
    },
    {
      label: "Distance to the Ocean",
      value: "distance_to_the_ocean",
    },
    {
      label: "Proximity to a lake",
      value: "proximity_to_lake",
    },
  ];

  const [serviceType, setServiceType] = useState("rent");
  const [formData, setFormData] = useState(initialFormState);
  const [galleryPreview, setGalleryPreview] = useState<
    (string | ArrayBuffer)[]
  >([]);
  const [galleryImgFiles, setGalleryImgFiles] = useState<any>([]);
  const [homeTour, setHomeTour] = useState<string | null>(null);
  const [homeTourFile, setHomeTourFile] = useState<string | null>(null);
  const [bannerImgUrl, setBannerImgUrl] = useState("");
  const galleryImageRef = useRef(null);
  const videoRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCoverImage, setSelectedCoverImage] = useState<string | null>(
    null
  );

  const [validationError, setValidationError] = useState<string>("");
  const formRef = useRef(null);
  const resetForm = () => {
    setFormData(initialFormState);
    setBannerImgUrl(""); // Reset banner image URL
    setGalleryImgFiles([]); // Reset gallery image files
    setGalleryPreview([]); // Reset gallery image previews
    setHomeTour(null); // Reset home tour video
    setSelectedImage(null);
    setSelectedCoverImage(null); //reset cover image
    setDots({
      proximity_to_lake: { row: 0, col: 0 },
      walkability: { row: 0, col: 0 },
      closeness_To_restaurant: { row: 0, col: 0 },
      quality_of_schools: { row: 0, col: 0 },
      distance_to_the_ocean: { row: 0, col: 0 },
      proximity_to_parks: { row: 0, col: 0 },
    });
  };

  useEffect(() => {
    resetForm();
  }, [serviceType]);

  const handleRemoveImages = (url: string | ArrayBuffer) => {
    const idx = galleryPreview.indexOf(url);

    const filteredArray = galleryPreview.filter((item) => item !== url);

    // Create a new array without the element at the specified index
    const newArray = [
      ...galleryImgFiles.slice(0, idx),
      ...galleryImgFiles.slice(idx + 1),
    ];

    setGalleryPreview(filteredArray);
    setGalleryImgFiles(newArray);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked, value } = e.target;

    if (name === "acknowledgement") {
      setFormData({
        ...formData,
        acknowledgement: checked,
      });
      return;
    }

    // Assuming each checkbox's value attribute is the key for formData state
    if (name === "amenities") {
      setFormData({
        ...formData,
        amenities: {
          ...formData.amenities,
          [value]: checked, // This updates the specific amenity with true (if checked) or false (if unchecked)
        },
      });
    } else {
      // For other inputs, if any
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const getGalleryImagesURLs = async () => {
    const gallery_images_urls: any = [];

    if (galleryImgFiles && galleryImgFiles.length !== 0) {
      // Use map to create an array of promises
      const uploadPromises = galleryImgFiles.map(async (img: any) => {
        const result = await uploadSingleImageToAWS(img);
        console.log("res", result);
        if (result && result.data.data) {
          gallery_images_urls.push(result?.data.data);
        }
      });

      // Wait for all promises to resolve before continuing
      await Promise.all(uploadPromises);
    }

    return gallery_images_urls;
  };

  function isValidPrice(price: any) {
    console.log(price);

    const priceRegex = /^\d+(\.\d+)?$/;
    // Check if the input matches the regular expression
    return !priceRegex.test(price);
  }

  const handleVideoDelete = () => {
    setHomeTour(null);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    //check validations here

    const ratingLen = Object.keys(formData.rating).length || 0;
    console.log(ratingLen);

    if (ratingLen !== 6) {
      setValidationError("Make sure to rate your properties");
      toast.error(validationError);
      return;
    }

    if (isValidPrice(formData.price)) {
      setValidationError("Invalid Price");
      toast.error("Invalid Price");
      return;
    }

    //check for amenities checkbox
    const hasAmenities = Object.values(formData.amenities).some(
      (value) => value === true
    );

    if (!hasAmenities) {
      setValidationError("Choose at least one Amenities");
      toast.error("Choose at least one Amenities");
      return;
    }

    if (!formData.acknowledgement) {
      setValidationError("Agree on terms to continue");
      toast.error("Agree on terms to continue");
      return;
    }

    if (!formData.banner_img) {
      setValidationError("Enter a cover image for your property");
      toast.error("Enter a cover image for your property");
      return;
    }

    let banner_img, home_tour_video;
    if (bannerImgUrl) {
      banner_img = await uploadSingleImageToAWS(bannerImgUrl);
    }
    if (homeTourFile) {
      home_tour_video = await uploadSingleImageToAWS(homeTourFile);
    }

    const gallery_images_urls = await getGalleryImagesURLs();

    // console.log(gallery_images_urls);
    try {
      const response = await add_property({
        ...formData,
        banner_img: banner_img?.data.data || "",
        serviceType,
        gallery_images_urls,
        home_tour_video: home_tour_video?.data.data || "",
      });
      resetForm();
      // console.log(response);

      if (response.STATUS === "SUCCESS") {
        toast.success(response.MESSAGE || "Product Added Successfully");
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data.message);
    }

    // window.location.reload();
  };

  const [dots, setDots] = useState<any>({
    proximity_to_lake: { row: 0, col: 0 },
    walkability: { row: 0, col: 0 },
    closeness_To_restaurant: { row: 0, col: 0 },
    quality_of_schools: { row: 0, col: 0 },
    distance_to_the_ocean: { row: 0, col: 0 },
    proximity_to_parks: { row: 0, col: 0 },
  });

  const handleDotClick = (col: number, row: number, data: any) => {
    console.log(col + " / " + row, data);

    setFormData((prev) => {
      return {
        ...prev,
        rating: {
          ...prev.rating,
          [data.value]: col,
        },
      };
    });
    // onRatingChange((prevData: any) => ({
    //   ...prevData,
    //   [qna?.step || ""]: {
    //     question: qna?.question || "",
    //     options: {
    //       ...(prevData[qna?.step || ""]?.options || {}),
    //       [currentOption || ""]: selectedRating,
    //     },
    //   },
    // }));

    setDots((prev: any) => {
      return {
        ...prev,
        [data.value]: { row, col },
      };
    });
  };

  const handleImageChange = async (event: any) => {
    // handle file change for gallery images
    // console.log(event.target?.files && event.target?.files[0]);
    const file = event.target.files && event.target.files[0];
    if (file) {
      // Read the selected file as a data URL
      const reader = new FileReader();
      reader.onloadend = () => {
        // Set the selected image to the data URL
        setSelectedImage(reader.result as string);

        setGalleryPreview((prev: any) => [...prev, reader.result]);
      };
      reader.readAsDataURL(file);
      setGalleryImgFiles((prev: any) => [...prev, file]);

      // let's use aws
      // const data = await uploadToAWS(file);
      // console.log(data);
    }
  };
  const handleVideoChange = async (event: any) => {
    // handle file change
    // console.log(event.target?.files && event.target?.files[0]);
    const file = event.target.files && event.target.files[0];

    if (file) {
      // Read the selected file as a data URL
      const reader = new FileReader();
      reader.onloadend = () => {
        // Set the selected image to the data URL
        // setSelectedImage(reader.result as string);

        if (reader.result !== null) {
          setHomeTour(reader.result as string);
        } else {
          // Handle the case when reader.result is null (e.g., reading failed)
          console.error("Failed to read the video file.");
        }
      };
      reader.readAsDataURL(file);
      setHomeTourFile(file);

      // let's use aws
      // const data = await uploadToAWS(file);
      // console.log(data);
    }
  };

  // const [serviceType, setserviceType] = useState("rent");
  const handleTabClick = (type: string) => {
    setServiceType(type);

    resetForm();
  };

  // const handleAddProperty = () => {
  //   if (formRef.current) {
  //     (formRef.current as any).submit();
  //   }
  // }

  // const gallery
  return (
    <div className="property-conatiner">
      {/* <div classNameName="property-conatiner__banner">
        <div>
          <BuyProperties />
          <button>+ Rent a property</button>
        </div>
        <div>
          <SellProperties />
          <button>+ Sell a property</button>
        </div>
      </div> */}
      <span className="backbutton" style={{ textDecoration: "none", visibility:'hidden' }}>
        <img
          src="https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/2f72bef8-773f-4c15-8692-6e46798ffea3.png"
          alt="back_icon"
        />
        <p>Back</p>
      </span>

      <div className="main-div">
        <div className="rentSell">
          <div
            // className="inner-div"

            className={
              serviceType === "rent" ? "inner-div selected-tab" : "inner-div"
            }
          >
            <BuyProperties />
            <button onClick={() => handleTabClick("rent")} className="pointer">
              {" "}
              + Rent a property
            </button>
          </div>

          <div
            className={
              serviceType === "sell" ? "inner-div selected-tab" : "inner-div"
            }
          >
            <SellProperties />

            <button onClick={() => handleTabClick("sell")} className="pointer">
              {" "}
              + Sell a property
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} ref={formRef}>
          <div className="content-div">
            <div className="img-input">
              {/* <label htmlFor="imageUpload">Image</label>
              <input
                type="file"
                id="imageUpload"
                name="image"
                accept="image/*"
              /> */}
              <ImageUpload
                setFormData={setFormData}
                type={"banner"}
                setBannerImgUrl={setBannerImgUrl}
                selectedCoverImage={selectedCoverImage as string}
                setSelectedCoverImage={setSelectedCoverImage}
              />
              <br />
              {/* <input type="submit" value="Upload Cover Photo" /> */}

              <p>
                Elevate Your Space: Strategies to Boost Your Property's Appeal
              </p>
              <button disabled>Boost Your Property</button>
            </div>

            <div className="form-input">
              <div className="flex">
                <div className="grid">
                  <label>Title</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    placeholder="Seaton Ave Fridai Apartment "
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="grid">
                  <label>Sub Title</label>
                  <input
                    type="text"
                    name="subtitle"
                    value={formData.subtitle}
                    onChange={handleChange}
                    placeholder="Your Peaceful Retreat"
                  />
                </div>
              </div>
              <div className="flex">
                <div className="grid">
                  <label>Price ($)</label>

                  <input
                    type="text"
                    name="price"
                    placeholder="$4,600.00"
                    value={formData.price}
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="grid">
                  <label>Flat No.</label>
                  <input
                    type="text"
                    name="flatNo"
                    value={formData.flatNo}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="flex">
                <div className="grid">
                  <label>City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    // placeholder="Alexandria, Virginia"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="grid">
                  <label>State</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    // placeholder="Alexandria, Virginia"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="flex">
                <div className="grid">
                  <label>Zip Code</label>
                  <input
                    type="text"
                    name="zip"
                    value={formData.zip}
                    // placeholder="Alexandria, Virginia"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              {serviceType === "sell" && (
                <div className="grid">
                  <label>MLS Number</label>
                  <input
                    type="text"
                    name="mls"
                    value={formData.mls}
                    placeholder="#463738387"
                    onChange={handleChange}
                    required
                  />
                </div>
              )}

              <div className="grid">
                <label>Description</label>
                <input
                  type="text"
                  name="description"
                  placeholder="Enter description"
                  required
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="check-box">
            <label>Type of {serviceType === 'rent' ? 'Rental' : 'Sell'}</label>
            <div className="check-option">
              {(serviceType === "rent"
                ? rental_property_type
                : sell_property_type
              ).map(({ label, value }) => (
                <label>
                  <input
                    type="radio"
                    name="property_type"
                    onChange={handleChange}
                    value={value}
                    checked={formData.property_type === value}
                    required
                  />{" "}
                  {label}
                </label>
              ))}
              {/* <label>
                <input
                  type="radio"
                  name="property_type"
                  onChange={handleChange}
                  value="Apartment"
                  required
                />{" "}
                Apartment
              </label>
              <label>
                <input
                  type="radio"
                  name="property_type"
                  onChange={handleChange}
                  value="Town home"
                  required
                />{" "}
                Town home
              </label>
              <label>
                <input
                  type="radio"
                  name="property_type"
                  onChange={handleChange}
                  value="House"
                  required
                />{" "}
                House
              </label> */}
            </div>

            <div className="check-number">
              {/* <div>
                <label>No. of Guests</label>
                <input type="number" name="guests" placeholder="3" />
              </div> */}
              <div>
                <label>No. of Bedrooms</label>
                <input
                  type="number"
                  name="num_of_bedroom"
                  placeholder="3"
                  onChange={handleChange}
                  value={formData.num_of_bedroom}
                  min="0"
                  required
                />
              </div>

              <div>
                <label>No. of Bathrooms</label>
                <input
                  type="number"
                  name="num_of_bathroom"
                  placeholder="2"
                  value={formData.num_of_bathroom}
                  onChange={handleChange}
                  min="0"
                  required
                />
              </div>

              {/* <div>
                <label>Duration</label>
                <input type="time" name="duration" placeholder="30" />
              </div> */}
            </div>

            <label>Property Located</label>
            <div className="check-option">
              <label>
                <input
                  type="radio"
                  value="city"
                  name="property_located_at"
                  onChange={handleChange}
                  required
                  checked={formData.property_located_at === "city"}
                />{" "}
                City
              </label>
              <label>
                <input
                  type="radio"
                  value="country"
                  name="property_located_at"
                  onChange={handleChange}
                  required
                  checked={formData.property_located_at === "country"}
                />{" "}
                Country
              </label>
              <label>
                <input
                  type="radio"
                  value="suburb"
                  name="property_located_at"
                  onChange={handleChange}
                  required
                  checked={formData.property_located_at === "suburb"}
                />{" "}
                Suburb
              </label>
            </div>
          </div>

          <div className="check-box">
            <label>Rate the following aspects of your property</label>

            {rating.map((item, idx) => (
              <div className="rating-box" key={idx}>
                <label>{item.label}</label>
                <div className="rating-container">
                  {[...Array(5)].map((_, index) => (
                    <>
                      <div
                        key={index}
                        className={`dot ${
                          index + 1 === (dots[item.value].col || 0) &&
                          idx === dots[item.value].row
                            ? "selected"
                            : ""
                        }`}
                        // className="dot"
                        onClick={() => handleDotClick(index + 1, idx, item)}
                      ></div>
                    </>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="check-container">
            <label>What amenities does your property offer</label>
            <div className="inner-container">
              {(serviceType === "rent" ? rent : sell).map((item) => (
                <label>
                  <input
                    type="checkbox"
                    name="amenities"
                    onChange={handleChange}
                    value={item.value}
                    checked={
                      formData.amenities[
                        item.value as keyof typeof formData.amenities
                      ]
                    }
                  />{" "}
                  {item.label}
                </label>
              ))}
            </div>
          </div>

          <div className="check-container">
            <label>Which part of Florida is the property located in</label>
            <div className="inner-container">
              {located_at.map(({ label, value }) => (
                <label>
                  <input
                    type="radio"
                    name="located_in_florida"
                    onChange={handleChange}
                    value={value}
                    checked={formData.located_in_florida === value}
                    required
                  />{" "}
                  {label}
                </label>
              ))}
              {/* <label>
                <input
                  type="radio"
                  name="located_at"
                  onChange={handleChange}
                  value="Central"
                  required
                />{" "}
                Central
              </label>
              <label>
                <input
                  type="radio"
                  name="located_at"
                  onChange={handleChange}
                  value="South"
                  required
                />{" "}
                South
              </label>
              <label>
                <input
                  type="radio"
                  name="located_at"
                  onChange={handleChange}
                  value="West"
                  required
                />{" "}
                West
              </label>
              <label>
                <input
                  type="radio"
                  name="located_at"
                  onChange={handleChange}
                  value="North"
                  required
                />{" "}
                North
              </label>
              <label>
                <input
                  type="radio"
                  name="located_at"
                  onChange={handleChange}
                  value="East (Atlantic Ocean)"
                  required
                />{" "}
                East (Atlantic Ocean)
              </label> */}
            </div>

            <div className="Gallery">
              <p>Gallery</p>
              <div className="img">
                {galleryPreview?.map((url) => (
                  <div className="img-container">
                    <img src={url as string} alt="gallery-img-url" />
                    <div
                      className="delete-overlay"
                      onClick={() => handleRemoveImages(url)}
                    >
                      X
                    </div>
                  </div>
                ))}
                <div
                  className="image-upload-container"
                  style={{
                    width: galleryPreview.length < 2 ? "200px" : "100%",
                  }}
                >
                  <div className="upload">
                    <label htmlFor="galleryImageUpload">
                      <ImgUploadIcon className="pointer" />
                    </label>
                    <input
                      type="file"
                      id="galleryImageUpload"
                      name="image"
                      accept="image/*"
                      ref={galleryImageRef}
                      style={{ display: "none" }}
                      onChange={handleImageChange}
                    />
                    {/* <ImgUploadIcon /> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="Gallery video-gallery">
              <p>Upload Home Tour Videos </p>
              <div className="vid">
                {homeTour ? (
                  <div className="vid-container">
                    <Video url={homeTour} />
                    <div className="delete-overlay" onClick={handleVideoDelete}>
                      X
                    </div>
                  </div>
                ) : (
                  <div
                    className="image-upload-container"
                    style={{
                      width: galleryPreview.length < 2 ? "200px" : "100%",
                    }}
                  >
                    <div className="upload">
                      <label htmlFor="homeTourUpload">
                        <ImgUploadIcon className="pointer" />
                      </label>
                      <input
                        type="file"
                        id="homeTourUpload"
                        name="video"
                        accept="video/*"
                        ref={videoRef}
                        style={{ display: "none" }}
                        onChange={handleVideoChange}
                      />
                      {/* <ImgUploadIcon /> */}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="radio-acknowledge">
            <label>
              <input
                type="checkbox"
                name="acknowledgement"
                onChange={handleChange}
                checked={formData.acknowledgement}
              />{" "}
              <p>
                I acknowledge and agree to the terms and conditions of listing
                this property.
              </p>
            </label>
          </div>

          <div className="submit-button">
            <button>Preview</button>
            <button type="submit">Add Property</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewProperty;
