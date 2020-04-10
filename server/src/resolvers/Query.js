async function currentUser(root, args, { currentUser, models }) {
  return models.user.findOne({
    where: {
      id: currentUser.userId
    }
  });
}

async function basket(root, { id }, { models }) {
  return models.basket.findOne({
    where: {
      id: id
    }
  });
}

async function gifts(root, args, { currentUser, models }) {
  const gifts = await models.gift.findAll();

  if (gifts.length > 0) {
    gifts = gifts.filter(item => {
      return item.user.userId !== currentUser.userId && item.isPublic;
    });
  }

  return gifts;
}

module.exports = {
  currentUser,
  basket,
  gifts
}