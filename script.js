async function Links() {
  const link = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
  );
  const links = await link.json();
  let content = document.querySelector(".grid-box");
  for (let i = 0; i < links.length; i++) {
    content.innerHTML += `
    <div class="content">
      <div class="title">
        <img width="50px" src="${links[i].image}"/>
        <div>
          <h3>${links[i].name}</h3>
          <p>${links[i].id}</p>
        </div>
      </div>
      <div class="percent">${links[i].price_change_percentage_24h + "%"}</div>
      <div class="price">${"$" + links[i].current_price}</div>
      <p class="text">Total Volume: ${links[i].total_volume}</p>
      <p class="text">Market Cap: ${links[i].market_cap}</p>
    </div>`;
  }

  let contentList = document.querySelector(".list-box");
  for (let i = 0; i < links.length; i++) {
    contentList.innerHTML += `
    <tr class="contentt">
        <td>
        <div class="title">
        <img width="50px" src="${links[i].image}"/>
        <div>
          <h3>${links[i].name}</h3>
          <p>${links[i].id}</p>
        </div></td>
        <td>
        <div class="percents">${
          links[i].price_change_percentage_24h + "%"
        }</div>
      </td>
      <td><div class="price">${"$" + links[i].current_price}</div>
      </td>
        <td><p class="texts">Total Volume: ${links[i].total_volume}</p>
      </td>
      
      <td>
      <p class="texts">Market Cap: ${links[i].market_cap}</p>
    </td>
    </tr>`;
  }

  // if (links[i].price_change_percentage_24h < 0) {
  //   // document.getElementsByClassName("percent").style.color = "red";
  // }
}

const tabs = document.querySelectorAll(".tab-btn");
const content = document.querySelectorAll(".contents");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", (e) => {
    tabs.forEach((tab) => tab.classList.remove("active"));
    tab.classList.add("active");

    var line = document.querySelector(".line");
    line.style.width = e.target.offsetWidth + "px";
    line.style.left = e.target.offsetLeft + "px";

    content.forEach((content) => content.classList.remove("active"));
    content[index].classList.add("active");
  });
});
