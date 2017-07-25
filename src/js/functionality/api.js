function apiCall(url, cb) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.setRequestHeader('Authorization', localStorage.getItem('accessToken'));
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const json = JSON.parse(xhr.responseText);
      cb(json);
    }
  };
  xhr.send();
}

export default apiCall;
