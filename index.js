// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
console.log(saturdayFun()); 
console.log(saturdayFun("go to the beach"));
// 2. Lab Task
const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  }
console.log(mondayWork()); 
console.log(mondayWork("write code")); 
console.log(mondayWork("have a meeting"));

// 3. Lab Task 

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  }
  
  function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  const encouragingPromptFunction = wrapAdjective("!!!");
  console.log(encouragingPromptFunction("amazing")); 
  console.log(encouragingPromptFunction("incredible")); 
  console.log(encouragingPromptFunction());