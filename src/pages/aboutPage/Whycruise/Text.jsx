// import React, { useState, useEffect } from "react";

// const Text = () => {
//   const [typedText, setTypedText] = useState("");
//   const text = "Why Cruise OP?";

//   useEffect(() => {
//     let localTypingIndex = 0;
//     let localTyping = "";

//     const printer = setInterval(() => {
//       if (localTypingIndex < text.length) {
//         localTyping += text[localTypingIndex];
//         setTypedText(localTyping);
//         localTypingIndex += 1;
//       } else {
//         // STOP: Clear the interval once the text is complete
//         clearInterval(printer);
//       }
//     }, 150);

//     return () => clearInterval(printer);
//   }, [text]);

//   const containerStyle = {
//     backgroundColor: "#edfaff",

//     color: "#43c5ff",

//     display: "inline-block",
//     fontFamily: '"Joti One", system-ui',
//     fontSize: "56px",
//     fontWeight: "bold",
//     borderRadius: "8px",
//     minHeight: "1.2em",
//     // Prevents the box from jumping when typing starts
//   };

//   return (
//     <div style={containerStyle}>
//       <span>{typedText}</span>
//     </div>
//   );
// };

// export default Text;

import React, { useState, useEffect } from "react";
import styles from "./Text.module.css";

const Text = () => {
  const [typedText, setTypedText] = useState("");
  const text = "Why Cruise OP?";

  useEffect(() => {
    let localTypingIndex = 0;
    let localTyping = "";

    const printer = setInterval(() => {
      if (localTypingIndex < text.length) {
        localTyping += text[localTypingIndex];
        setTypedText(localTyping);
        localTypingIndex += 1;
      } else {
        // STOP: Clear the interval once the text is complete
        clearInterval(printer);
      }
    }, 150);

    return () => clearInterval(printer);
  }, [text]);

  return (
    <div className={styles.container}>
      {" "}
      {/* 2. 使用 styles.container */}
      <span>{typedText}</span>
    </div>
  );
};

export default Text;
