//eCigaretts, oECigaretts, fluid, tobacco

export default (allData, categoryName) => {
  let eCigaretts = [];
  let oECigaretts = [];
  let fluid = [];
  let tobacco = [];

  const findChilds = (el) => {
    if (el.ETOGRUPPA === "NET") {
      eCigaretts.push(
        `${el.NOMENKLATURA}. В наличии: ${el.VNALICHIIOSTATOK} Шт.`
      );
      return;
    }
    el.STROKI.forEach((stroka) => {
      findChilds(stroka);
    });
  };

  if (categoryName === "eCigaretts") {
    allData.STROKI.forEach((group) => {
      if (group.NOMENKLATURA === "SIGARETY ELEKTRONNYE") {
        findChilds(group.STROKI.find((el) => el.NOMENKLATURA === "DEVAYSY"));
      }
    });
    return eCigaretts;
  }

  if (categoryName === "oECigaretts") {
    allData.STROKI.forEach((group) => {
      if (group.NOMENKLATURA === "SIGARETY ELEKTRONNYE") {
        findChilds(group.STROKI.find((el) => el.NOMENKLATURA === "DEVAYSY"));
      }
    });
    return eCigaretts;
  }

  if (categoryName === "fluid") {
    allData.STROKI.forEach((group) => {
      if (group.NOMENKLATURA === "SIGARETY ELEKTRONNYE") {
        findChilds(group.STROKI.find((el) => el.NOMENKLATURA === "DEVAYSY"));
      }
    });
    return eCigaretts;
  }
  
  if (categoryName === "tobacco") {
    allData.STROKI.forEach((group) => {
      if (group.NOMENKLATURA === "SIGARETY ELEKTRONNYE") {
        findChilds(group.STROKI.find((el) => el.NOMENKLATURA === "DEVAYSY"));
      }
    });
    return eCigaretts;
  }
};
