const catalog = [];
const main = () => {
  document.querySelector("#form").addEventListener("submit", creatCatalog);
};
const creatCatalog = (event) => {
  event.preventDefault();
  const fields = document.querySelectorAll("#form input,textarea");
  const catalogItem = {
    id: catalog.length,
  };
  for (field of fields) {
    catalogItem[field.id] = field.value;
    field.value = "";
  }
  catalog.push(catalogItem);
  renderUl();
};
const renderUl = () => {
  const ul = document.querySelector("#catalog-list");
  ul.innerHTML = "";
  catalog.forEach((elem) => {
    const li = document.createElement("li");
    li.id = `product_${elem.id}`;
    const h3 = document.createElement("h3");
    h3.innerText = elem.name;
    const p = document.createElement("p");
    p.innerText = `Цена ${elem.price} $`;
    li.appendChild(h3);
    li.appendChild(p);
    li.addEventListener("click", (event) => {
      event.preventDefault();
      console.log(event.currentTarget);
      console.log(event.target);
      renderProduct(event.currentTarget.id);
    });
    ul.appendChild(li);
  });
};
const renderProduct = (elemId) => {
  let id = +elemId.split("_")[1];
  const product = catalog.filter((elem) => {
    return elem.id === id;
  });
  const productWrapper = document.querySelector("#full-info");
  productWrapper.innerHTML = "";
  productWrapper.innerHTML = `<h2>${product[0].name}, </h2><p>${product[0].descr}</p><h4>Вес ${product[0].weidht} гр.</h4><h4>Количество ${product[0].quantity}</h4><h4>Цена ${product[0].price} $</h4>`;
};
main();
