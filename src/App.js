import React, { useState } from "react";
import "./App.css";

// Hooks 공부

const content = [
  {
    tab: "Section 1",
    cont: "I'm the content of the Section 1",
  },
  {
    tab: "Section 2",
    cont: "I'm the content of the Section 2",
  },
];

const useTabs = (iniTab, allTabs) => {
  const [currentIdx, setCurrentIdx] = useState(iniTab);
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  return {
    currentItem: allTabs[currentIdx],
    changeItem: setCurrentIdx,
  };
};

const App = () => {
  const { currentItem, changeItem } = useTabs(1, content);

  return (
    <div className="App">
      {content.map((section, idx) => (
        <button onClick={() => changeItem(idx)} key={section.tab}>
          {section.tab}
        </button>
      ))}
      <div className="content-box">{currentItem.cont}</div>
    </div>
  );
};
export default App;
