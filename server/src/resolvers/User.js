async function baskets(baskets) {
  return baskets.getBaskets();
}

async function gifts(gifts) {
  return gifts.getGifts();
}

module.exports = {
  baskets,
  gifts
}