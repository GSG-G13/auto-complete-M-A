const searchInput = document.querySelector("input");
const nameList = document.createElement("ul");
const nameItem = document.createElement("li");
const nameLink = document.createElement("a");

searchInput.value = "Amal";

const nameRequest = () => {
  const url = `/autocomplete?q=${query}`;
  fetch(url, (resposne) => {
    nameItem.append(nameLink);
    nameLink.setAttribute("href", "#");
    nameLink.textContent = resposne.name;
    nameLink.addEventListener("click", () => {});
    nameList.append(nameItem);
  });
};

nameRequest();
searchInput.addEventListener("change", () => {
  nameRequest();
});
