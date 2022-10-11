import React, { useEffect, useState, useRef } from "react";
import "./App.css";

// Hooks 공부
// ---------------------------- useTabs -------------------------------
// const content = [
//   {
//     tab: "Section 1",
//     cont: "I'm the content of the Section 1",
//   },
//   {
//     tab: "Section 2",
//     cont: "I'm the content of the Section 2",
//   },
// ];

// const useTabs = (iniTab, allTabs) => {
//   const [currentIdx, setCurrentIdx] = useState(iniTab);
//   if (!allTabs || !Array.isArray(allTabs)) {
//     return;
//   }
//   return {
//     currentItem: allTabs[currentIdx],
//     changeItem: setCurrentIdx,
//   };
// };

// const App = () => {
//   const { currentItem, changeItem } = useTabs(1, content);

//   return (
//     <div className="App">
//       {content.map((section, idx) => (
//         <button onClick={() => changeItem(idx)} key={section.tab}>
//           {section.tab}
//         </button>
//       ))}
//       <div className="content-box">{currentItem.cont}</div>
//     </div>
//   );
// };
// export default App;

// ------------------------- useEffect ------------------------------

// const App = () => {
//   const [number, setNumber] = useState(0);
//   const [aNumber, setAnumber] = useState(0);
//   const sayHello = () => console.log("hello!");
//   useEffect(() => {
//     sayHello();
//   }, []); //[]만 넣으면 sayHellor가 한번만 실행된다
//   return (
//     <div className="App">
//       <div>Hi</div>
//       <button onClick={() => setNumber(number + 1)}>{number}</button>
//       <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
//     </div>
//   );
// };
// export default App;

// -------------------------- useTitle ---------------------------
// 문서 제목을 업데이트 해주는
// const useTitle = (initialTitle) => {
//   const [title, setTitle] = useState(initialTitle);
//   const updateTitle = () => {
//     const htmlTitle = document.querySelector("title");
//     htmlTitle.innerText = title;
//   };
//   useEffect(updateTitle, [title]);
//   return setTitle;
// };
// const App = () => {
//   const titleUpdater = useTitle("Loading...");
//   setTimeout(() => titleUpdater("Home"), 5000);
//   return (
//     <div className="App">
//       <div>Hi</div>
//     </div>
//   );
// };
// export default App;

// -------------------------- useClick ---------------------------

// const useClick = (onClick) => {
//   const element = useRef();
//   useEffect(() => {
//     if (element.current) {
//       element.current.addEventListener("click", onClick); //component mount 되었을 때 event를 추가해주고
//     }
//     return () => {
//       if (element.current) {
//         element.current.removeEventListener("click", onClick);
//       }
//     }; //useEffect는 componentWillUnmount 때
//   }, []);
//   if (typeof onClick !== "function") {
//     return;
//   }
//   return element;
// };

const App = () => {
  // const sayHello = () => console.log("say hello");
  // const title = useClick(sayHello);
  // return (
  //   <div className="App">
  //     <h1 ref={title}>Hi</h1>
  //   </div>
  // );
  return null;
};
export default App;

///-------------------  연습중
