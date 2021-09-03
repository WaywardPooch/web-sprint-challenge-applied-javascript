import axios from "axios";

/*
  TASK 5
  ---------------------
  Implement this function, which should return the markup you see below. It 
  takes as its only argument an "article" object with `headline`, `authorPhoto` 
  and `authorName` properties. The tags used, the hierarchy of elements and 
  their attributes must match the provided markup exactly! The text inside 
  elements will be set using their `textContent` property (NOT `innerText`). 
  Add a listener for click events so that when a user clicks on a card, the 
  headline of the article is logged to the console.
  
  <div class="card">
    <div class="headline">{ headline }</div>
    <div class="author">
      <div class="img-container">
        <img src={ authorPhoto }>
      </div>
      <span>By { authorName }</span>
    </div>
  </div>
*/

const Card = (article) => {
  // Create Elements
  const articleCard = document.createElement("div");
  const articleHeadline = document.createElement("div");
  const articleAuthorDiv = document.createElement("div");
  const articleAuthorImgCont = document.createElement("div");
  const articleAuthorPhoto = document.createElement("img");
  const articleAuthorName = document.createElement("span");

  // Assign Classes
  articleCard.classList.add("card");
  articleHeadline.classList.add("headline");
  articleAuthorDiv.classList.add("author");
  articleAuthorImgCont.classList.add("img-container");

  // Assign Content
  articleHeadline.textContent = article.headline;
  articleAuthorPhoto.src = article.authorPhoto;
  articleAuthorName.textContent = article.authorName;

  // Append Elements
  articleCard.appendChild(articleHeadline);
  articleCard.appendChild(articleAuthorDiv);
  articleAuthorDiv.appendChild(articleAuthorImgCont);
  articleAuthorDiv.appendChild(articleAuthorName);
  articleAuthorImgCont.appendChild(articleAuthorPhoto);

  // Add event listener
  articleCard.addEventListener("click", () => {
    console.log(
      `You clicked on the article headlined: "${articleHeadline.textContent}"`
    );
  });

  // Return Markup
  return articleCard;
};

/*
  TASK 6
  ---------------------
  Implement this function that takes a css selector as its only argument. It 
  should obtain articles from the endpoint `http://localhost:5000/api/articles` 
  (test it in Postman/HTTPie!). However, the articles do not come organized in 
  a single, neat array. Inspect the response closely! Create a card from each 
  and every article object in the response, using the Card component. Append 
  each card to the element in the DOM that matches the selector passed to the 
  function.
*/

const cardAppender = async (selector) => {
  // Convert "selector" to a true entry point
  const entryPoint = document.querySelector(selector);
  try {
    // Send a get request for "article data" to the local API
    const articles = await axios.get("http://localhost:5000/api/articles");
    // Create an array from the topics in the articles object
    const topicsArr = Object.values(articles["data"]["articles"]);
    // For each array of articles inside the topics array...
    topicsArr.forEach((articleArr) => {
      // ...loop over each article object...
      articleArr.forEach((articleObj) => {
        // ...and append each article to the entry point
        entryPoint.appendChild(Card(articleObj));
      });
    });
  } catch (error) {
    console.log(`ERROR: Could not fetch article data! Problem: ${error}`);
  }
};

export { Card, cardAppender };
