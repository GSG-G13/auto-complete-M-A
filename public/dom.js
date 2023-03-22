const searchInput = document.querySelector("input");
const body = document.querySelector("body");
const nameList = document.createElement("ul");

// searchInput.value = "Amal";

const nameRequest = (query) => {
  const url = `/autocomplete?q=${query}`;
  myFetch(url, (response) => {
    nameList.classList.add("links");
    nameList.textContent = "";

    response.forEach((ele) => {
      const nameItem = document.createElement("li");
      const nameLink = document.createElement("a");
      nameLink.addEventListener("click", () => {
        console.log(nameLink.textContent);
        
      });
      nameLink.textContent = ele;
      nameItem.append(nameLink);
      nameLink.setAttribute("href", "#");
      nameList.append(nameItem);
      body.append(nameList);
    });
  });
};
searchInput.addEventListener("input", () => {
  nameRequest(searchInput.value);
});
