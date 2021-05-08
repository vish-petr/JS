function createWhiteList(commonList, blackList) {

  let whiteList = [];
  for (let i = 0; i < commonList.length; ++i) {
    if (blackList.includes(commonList[i])) {
      continue;
    } else {
      whiteList.push(commonList[i]);
    }
  }
  console.log(whiteList);
  return whiteList;
}

createWhiteList(['1', '2', '3', '4', '5', '6', '7', '8', '9'], ['3', '5', '8']);

export default { createWhiteList };