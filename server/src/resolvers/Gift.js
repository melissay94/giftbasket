async function users(gift) {
  const giftUsers = await gift.getUsers();

  if (giftUsers) {
    return giftUsers;
  } else {
    throw new Error("No users found for this gift.");
  }
}

async function baskets(gift) {
  const giftBaskets =  gift.getBaskets();

  if(giftBaskets) {
    return giftBaskets;
  } else {
    throw new Error("No baskets found for this gift");
  }
}

module.exports = {
  users,
  baskets,
}