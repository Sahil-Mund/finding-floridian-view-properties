export const formatText = (text: string): string[] => {
    const paragraphs = text.split("<br>").map((paragraph, index) => paragraph);
    return paragraphs;
  };