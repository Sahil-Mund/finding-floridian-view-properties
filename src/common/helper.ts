export const formatText = (text: string): string[] => {
  const paragraphs = text.split("<br>").map((paragraph, index) => paragraph);
  return paragraphs;
};



export const generateGoogleMapsUrl = (address: string) => {
  const encodedAddress = encodeURIComponent(address);
  const url = `https://www.google.com/maps/place/${encodedAddress}`;
  return url;
}

export const generateMapIframeHtml = (address : string) =>  {
  const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
  const encodedAddress = encodeURIComponent(address);
  const srcUrl = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodedAddress}`;
  return srcUrl;
}


