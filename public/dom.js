const searchInput = document.querySelector("input");
const body = document.querySelector("body");
const nameList = document.createElement("ul");

// searchInput.value = "Amal";
const showMeaning = (data, name) => {
  const div = document.createElement("div");
  div.textContent = JSON.stringify(data[0][name]);

  body.append(div);
};
const nameRequest = (query) => {
  const url = `/autocomplete?q=${query}`;
  myFetch(url, (response) => {
    nameList.classList.add("links");
    nameList.textContent = "";

    response.forEach((ele) => {
      const nameItem = document.createElement("li");
      const nameLink = document.createElement("a");
      nameLink.textContent = ele;
      nameItem.append(nameLink);
      nameLink.setAttribute("href", "#");
      nameList.append(nameItem);
      body.append(nameList);
      nameLink.addEventListener("click", () => {
        myFetch(`/selected?q=${nameLink.textContent}`, (data) => showMeaning(data,nameLink.textContent));
      });
    });
  });
};
searchInput.addEventListener("input", () => {
  nameRequest(searchInput.value);
});
