//eCigaretts, oECigaretts, fluid, tobacco, parts

import findChilds from "./findChilds.js";

const categoryFind = (allData, categoryName) => {
  let findedProducts = [];
  //Поды
  if (categoryName === "eCigaretts") {
    allData.STROKI.forEach((group) => {
      if (group.NOMENKLATURA === "SIGARETY ELEKTRONNYE") {
        const childs = findChilds(
          group.STROKI.find((el) => el.NOMENKLATURA === "DEVAYSY")
        );
        findedProducts = [...childs];
      }
    });
  }
  //Одноразки
  if (categoryName === "oECigaretts") {
    allData.STROKI.forEach((group) => {
      if (group.NOMENKLATURA === "ODNORAZOVYE EL. SIGARETY") {
        const childs = findChilds(
          group.STROKI.find((el) => el.NOMENKLATURA === "MARKIROVANNYE ESDN")
        );
        findedProducts = [...childs];
      }
    });
  }
  //ЖИЖЫ
  if (categoryName === "fluid") {
    allData.STROKI.forEach((group) => {
      if (group.NOMENKLATURA === "SIGARETY ELEKTRONNYE") {
        findChilds(group.STROKI.find((el) => el.NOMENKLATURA === "DEVAYSY"));
        findedProducts = [...childs];
      }
    });
  }
  //SNUS
  if (categoryName === "tobacco") {
    allData.STROKI.forEach((group) => {
      if (group.NOMENKLATURA === "SIGARETY ELEKTRONNYE") {
        findChilds(group.STROKI.find((el) => el.NOMENKLATURA === "DEVAYSY"));
        findedProducts = [...childs];
      }
    });
  }
  //details
  if (categoryName === "parts") {
    allData.STROKI.forEach((group) => {
      if (group.NOMENKLATURA === "SIGARETY ELEKTRONNYE") {
        findChilds(group.STROKI.find((el) => el.NOMENKLATURA === "DEVAYSY"));
        findedProducts = [...childs];
      }
    });
  }

  return findedProducts;
};

export { categoryFind };
