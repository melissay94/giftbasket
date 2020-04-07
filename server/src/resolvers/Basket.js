async function user(user) {
  return user.getUser();
}

async function gifts(gifts) {
  return gifts.getGifts();
}

module.exports = {
  user,
  gifts
}