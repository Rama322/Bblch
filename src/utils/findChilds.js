export default (stroki) => {
  const findedChilds = [];

  const recursiveFindChilds = (el) => {
    if (el.ETOGRUPPA === 'NET') {
      findedChilds.push(
        `${el.NOMENKLATURA}. В наличии: ${el.VNALICHIIOSTATOK} Шт.`,
      );
      return;
    }
    el.STROKI.forEach((stroka) => {
      recursiveFindChilds(stroka);
    });
  };
  recursiveFindChilds(stroki);

  return findedChilds;
};
