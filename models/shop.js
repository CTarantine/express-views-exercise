global.shops = [
  {
    name: "Dancing Goats",
    employees: 8,
    currentlyOpen: true
  }
];


function createShop() {
  return {
    name: "",
    employees: 0,
    currentlyOpen: false
  };
}

function getShops() {
  return global.shops;
}

function getShop(i) {
  return global.shops[i];
}

function addShop(newShop) {
  global.shops.push(newShop);
}

function updateShop(i, shop) {
  global.shops[i] = shop;
}

function deleteShop(i) {
  global.shops.splice(i, 1);
}


module.exports = {
  addShop,
  createShop,
  deleteShop,
  getShop,
  getShops,
  updateShop,
};