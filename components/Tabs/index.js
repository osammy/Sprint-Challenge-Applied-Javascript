// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get("https://lambda-times-backend.herokuapp.com/topics")
.then(response => {
    console.log(response);
    const topics = response.data.topics;
    const topicsDiv = document.querySelector(".topics");

    topics.forEach(topic => {
        Tab = TabCreator(topic);
        topicsDiv.appendChild(Tab);
        // Tab.addEventListener('click',handleTabContentDisplay(2,4))
    })

})
.catch(err => {
    console.log(err);
})
function handleTabContentDisplay(x,y) {
    console.log(x+y)
    return function(e){
       const attrValue =  e.target.getAttribute('data-tab-topic');
       const cards = document.querySelector(".cards-container")
    }
}
function TabCreator(topic) {
    const div = document.createElement('div');
    div.setAttribute('class','tab');
    div.textContent = topic;
    div.setAttribute('data-tab-topic',topic);

    return div;
}