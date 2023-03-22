const fetch = (url, cb) => {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.status == 200 && xhr.readyState == 4) {
      let response = JSON.parse(xhr.responseText);
      cb(response);
    }
  };
  xhr.open("GET", `/autocomplete?q=${query}`, true);
  xhr.send();
};
