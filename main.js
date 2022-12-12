var statisticals = document.querySelector(".main .statisticals");
console.log(statisticals);

fetch("https://6356b8f12712d01e14fb33a6.mockapi.io/list-post") // trả ra mảng dạng json
  .then((response) => response.json()) // biến mảng json thành dạng js
  .then((data) => {
    var productHtmls = data.map(
      (item) => `<div
    class="number-description col-xl-2 bd bshd-10 position-relative text-center"
    >
    <i
      class="ti-search position-absolute fsz-24 ic-statistical br-50 bg-primary p-3 text-light"
    ></i>
    <h2 class="pt-3">${item.number}</h2>
    <p class="pb-4">${item.string}</p>
    </div>`
    );
    statisticals.innerHTML = productHtmls.join("");
  });
