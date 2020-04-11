async function user(basket) {
  return await basket.getUser();
}

async function gifts(basket) {
  const gifts = await basket.getGifts();
  console.log(gifts);
  return gifts;
}

module.exports = {
  user,
  gifts,
}