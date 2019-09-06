// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(response => {
    const topics = response.data.topics;
    const topicsDiv = document.querySelector(".topics");

    topics.forEach(topic => {
      Tab = TabCreator(topic);
      topicsDiv.appendChild(Tab);
      Tab.addEventListener("click", handleTabContentDisplay);
    });
  })
  .catch(err => {
    console.log(err);
  });
function handleTabContentDisplay(e) {

    const topic = e.target.getAttribute("data-tab-topic");
    
    const cards = document.querySelectorAll(".card");    

    const tabs = document.querySelectorAll(".tab");

    tabs.forEach(tab => {

        if(topic === tab.getAttribute("data-tab-topic")) tab.style.background = "orange";
        else tab.style.background = "#333";
    })

    cards.forEach(card => {
      if (topic === card.getAttribute("data-card-topic")) card.style.display = "none";
      else card.style.display = "block";
    });

    // filteredCards =  [...cards].filter(el => topic === el.getAttribute('data-card-topic'))
}

function TabCreator(topic) {
  const div = document.createElement("div");
  div.setAttribute("class", "tab");
  div.textContent = topic;
  div.setAttribute("data-tab-topic", topic);

  return div;
}
