const searchInput = document.querySelector("input");
const body = document.querySelector("body");
const nameList = document.createElement("ul");
const nameDesc = document.createElement("div");
nameDesc.classList.add("name-desc");
// searchInput.value = "Amal";

const nameRequest = (query) => {
  const url = `/autocomplete?q=${query}`;
  myFetch(url, (response) => {
    nameList.classList.add("links");
    nameList.textContent = "";
    nameDesc.textContent = "";
    nameDesc.remove();

    response.forEach((ele) => {
      const nameItem = document.createElement("li");
      const nameLink = document.createElement("a");
      nameLink.className = "link";
      nameLink.textContent = ele;
      nameItem.append(nameLink);
      nameLink.setAttribute("href", "#");
      nameList.append(nameItem);
      body.append(nameList);

      nameLink.addEventListener("click", () => {
        myFetch(`/selected?q=${nameLink.textContent}`, (data) =>
          showMeaning(data, nameLink.textContent)
        );
      });
    });
  });
};
const showMeaning = (data, name) => {
  const par = document.createElement("p");
  par.textContent = JSON.stringify(data[0][name]);
  nameDesc.append(par);
  body.append(nameDesc);
};
searchInput.addEventListener("input", () => {
  if (searchInput.value.trim() == "") {
    nameList.innerHTML = "";
  } else {
    nameRequest(searchInput.value);
  }
});

document.addEventListener("click", (ele) => {
  if (ele.target.classList.contains("link")) {
    console.log(ele.target.textContent);
    searchInput.value = ele.target.textContent;
  }
});
