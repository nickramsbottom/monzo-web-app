function menu() {
  const content = `
  <div class="menu-item">
    <h4><a href="yourdata.html">Summary</a></h4>
  </div>
  <div class="menu-item">
    <h4><a href="#" onClick="toggleMenu()">Categories &#9660;</a></h4>
    <ul id="subMenu">
      <li><a href="transport.html">Transport</a></li>
      <li><a href="#">Eating Out</a></li>
      <li><a href="#">Entertainment</a></li>
      <li><a href="#">Holidays</a></li>
      <li><a href="#">Groceries</a></li>
      <li><a href="#">Shopping</a></li>
    </ul>
  </div>
  <div class="menu-item">
    <h4><a href="map.html">Map</a></h4>
  </div>`;
  const element = document.getElementsByClassName('menu');
  element[0].innerHTML = content;
  return content;
}

export { menu };
