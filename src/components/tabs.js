import axios from "axios";

/*
  TASK 3
  ---------------------
  Implement this function which takes an array of strings ("topics") as its 
  only argument. As an example, if the topics passed are ['javascript', 
  'bootstrap', 'technology'], then the function returns the markup below. The 
  tags used, the hierarchy of elements and their attributes must match the 
  provided markup! The text inside elements will be set using their 
  `textContent` property (NOT `innerText`).
  
  <div class="topics">
    <div class="tab">javascript</div>
    <div class="tab">bootstrap</div>
    <div class="tab">technology</div>
  </div>
*/

const Tabs = (topics) => {
  // Create Elements
  const topicsTab = document.createElement("div");
  topics.forEach((topic) => {
    const topicEntry = document.createElement("div");
    // Assign Classes
    topicEntry.classList.add("tab");
    // Assign Content
    topicEntry.textContent = topic;
    // Append Elements
    topicsTab.appendChild(topicEntry);
  });
  // Return Markup
  return topicsTab;
};

/*
  TASK 4
  ---------------------
  Implement this function which takes a css selector as its only argument.
  It should obtain topics from the endpoint: `http://localhost:5000/api/topics` 
  (test it in Postman/HTTPie!). Find the array of topics inside the response, 
  and create the tabs using the Tabs component. Append the tabs to the element 
  in the DOM that matches the selector passed to the function.
*/

const tabsAppender = async (selector) => {
  // Convert "selector" to a true entry point
  const entryPoint = document.querySelector(selector);
  try {
    // Send a get request for "topic data" to the local API
    const topicsData = await axios.get("http://localhost:5000/api/topics");
    // Create topics using topicsData and append them to the DOM
    entryPoint.appendChild(Tabs(topicsData["data"]["topics"]));
  } catch (error) {
    console.log(`ERROR: Could not fetch data! Problem: ${error}`);
  }
};

export { Tabs, tabsAppender };
