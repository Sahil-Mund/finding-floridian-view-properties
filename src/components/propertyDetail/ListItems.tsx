import React from "react";

interface ListItemsProps {
  // Add your component's props here
  data: any;
  title: string;
}

const ListItems: React.FC<ListItemsProps> = ({ title, data }) => {
  return (
    <div className="details">
      <h3>{title}</h3>
      {data?.map((item: any, index: number) => {
        return (
          <div className="perk" key={index}>
            <img src={item.img} alt="" />
            <div>
              <h4>{item.subTitle}</h4>
              <p>{item.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListItems;
