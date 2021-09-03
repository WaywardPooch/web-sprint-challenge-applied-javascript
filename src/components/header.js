/*
  TASK 1
  ---------------------
  Implement this function taking `title`, `date` and `temp` as its 3 args and 
  returning the markup below.  The tags used, the hierarchy of elements and 
  their attributes must match the provided markup exactly! The text inside 
  elements will be set using their `textContent` property (NOT `innerText`).
  
  <div class="header">
    <span class="date">{ date }</span>
    <h1>{ title }</h1>
    <span class="temp">{ temp }</span>
  </div>
*/

const Header = (title, date, temp) => {
  // Create Elements
  const header = document.createElement("div");
  const headerDate = document.createElement("span");
  const headerTitle = document.createElement("h1");
  const headerTemp = document.createElement("span");

  // Append Elements
  header.appendChild(headerDate);
  header.appendChild(headerTitle);
  header.appendChild(headerTemp);

  // Assign Classes
  header.classList.add("header");
  headerDate.classList.add("date");
  headerTemp.classList.add("temp");

  // Assign Content
  headerDate.textContent = date;
  headerTitle.textContent = title;
  headerTemp.textContent = temp;

  // Return Markup
  return header;
};

/*
  TASK 2
  ---------------------
  Implement this function taking a css selector as its only argument. It should 
  create a header using the Header component above, passing arguments of your 
  choosing. It should append the header to the element in the DOM that matches 
  the given selector.
*/

const headerAppender = (selector) => {
  // Convert "selector" to a true entry point
  const entryPoint = document.querySelector(selector);

  // Append to the entry point...
  entryPoint.appendChild(
    // ... a newly-made header, with the following content
    Header("The Future is Now!", "December 10th, 2077", "Temporary text? HAH!")
  );
};

export { Header, headerAppender };
