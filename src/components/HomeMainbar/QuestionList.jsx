// import React from "react";
// import Questions from "./Questions";
// const QuestionList = ({ questionsList }) => {
//   return (
//     <>
//       {questionsList.map((question) => (
//         <Questions question={question} key={question._id} />
//       ))}
//     </>
//   );
// };

// export default QuestionList;
// QuestionList.jsx

import React from 'react';

const QuestionList = ({ questionsList }) => {
  if (!questionsList) {
    return <p>Loading questions...</p>;
  } else if (Array.isArray(questionsList)) {
    return (
      <ul>
        {questionsList.map((question) => (
          <li key={question.id}>{question.text}</li>
        ))}
      </ul>
    );
  } else {
    return <p>Error: Unexpected data format</p>;
  }
};

export default QuestionList;
