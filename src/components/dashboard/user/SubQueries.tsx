import React from 'react';

interface SubQueriesProps {
  // Add your component's props here
  subQues: any;
}

const SubQueries: React.FC<SubQueriesProps> = ({subQues}) => {
  return (
    <>
      <div className="sub-question-container">
        {subQues.map((ele: any, index: number) => (
          <div className="flex">
            <div className="sub-question" key={`sub-question-${ele?.qNumber}`}>
              {ele?.question}
            </div>
            <div className="sub-options">
              {ele?.options.map((ele: string, index: number) => (
                <div className="option-item" key={index}>
                  <span>{ele}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
     
    </>
  );
};

export default SubQueries;
