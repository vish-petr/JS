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

createWhiteList(['vish@.ru', 'eyrbg@.com', 'dfjhgndl@.ru', '564rgew4@.com', 'rthbfd@.ru', 'sewt6787@.ru'], ['eyrbg@.com', '564rgew4@.com']);

export default { createWhiteList };