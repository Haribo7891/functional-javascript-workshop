function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(index1 => goodUsers.some(index2 => index1.id === index2.id))
  };
}

module.exports = checkUsersValid