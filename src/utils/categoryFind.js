//eCigaretts, oECigaretts, fluid, tobacco, parts

import findChilds from './findChilds.js';

const categoryFind = (allData, categoryName) => {
  switch (categoryName) {
    case 'eCigaretts':
      return findECigaretts(allData);
    case 'oECigaretts':
      return findOECigaretts(allData);
    case 'alkaline':
      return findAlkaline(allData);
    case 'salt':
      return findSalt(allData);
    case 'nonNicotine':
      return findNonNicotine(allData);
    case 'dIY':
      return finddIY(allData);
    case 'tobacco':
      return findTobacco(allData);
    case 'parts':
      return findParts(allData);
  }
};

const findECigaretts = (allData) => {
  let finded = [];
  allData.STROKI.forEach((group) => {
    if (group.NOMENKLATURA === 'SIGARETY ELEKTRONNYE') {
      const childs = findChilds(
        group.STROKI.find((el) => el.NOMENKLATURA === 'DEVAYSY'),
      );
      console.log(childs);
      finded = [...finded, ...childs];
    }
  });
  return finded;
};

const findOECigaretts = (allData) => {
  let finded = [];
  allData.STROKI.forEach((group) => {
    if (group.NOMENKLATURA === 'ODNORAZOVYE EL. SIGARETY') {
      const childs = findChilds(
        group.STROKI.find((el) => el.NOMENKLATURA === 'MARKIROVANNYE ESDN'),
      );
      finded = [...finded, ...childs];
    }
  });
  return finded;
};

const findAlkaline = (allData) => {
  let finded = [];
  allData.STROKI.forEach((group) => {
    if (group.NOMENKLATURA === 'SIGARETY ELEKTRONNYE') {
      const fluid = group.STROKI.find((el) => el.NOMENKLATURA === 'ZHIDKOSTI');
      const markFluid = fluid.STROKI.find(
        (el) => el.NOMENKLATURA === '7. MARKIROVANNAYA ZHIDKOST',
      );
      const alkalineFluid = markFluid.STROKI.find(
        (el) => el.NOMENKLATURA === 'ZHIDKOSTI CLASSIC ESDN',
      );
      const ioFluidPods = markFluid.STROKI.find(
        (el) => el.NOMENKLATURA === 'DLYA EGO I POD (50/50 VG/PG) ESDN',
      );
      const childs = findChilds(alkalineFluid);
      const ioChilds = findChilds(ioFluidPods);
      finded = [...finded, ...childs, ...ioChilds];
    }
  });
  return finded;
};

const findSalt = (allData) => {
  let finded = [];
  allData.STROKI.forEach((group) => {
    if (group.NOMENKLATURA === 'SIGARETY ELEKTRONNYE') {
      const fluid = group.STROKI.find((el) => el.NOMENKLATURA === 'ZHIDKOSTI');
      const markFluid = fluid.STROKI.find(
        (el) => el.NOMENKLATURA === '7. MARKIROVANNAYA ZHIDKOST',
      );
      const saltFluid = markFluid.STROKI.find(
        (el) => el.NOMENKLATURA === 'SALT ESDN',
      );
      const childs = findChilds(saltFluid);
      finded = [...finded, ...childs];
    }
  });
  return finded;
};

const findNonNicotine = (allData) => {
  let finded = [];
  allData.STROKI.forEach((group) => {
    if (group.NOMENKLATURA === 'SIGARETY ELEKTRONNYE') {
      const fluid = group.STROKI.find((el) => el.NOMENKLATURA === 'ZHIDKOSTI');
      const markFluid = fluid.STROKI.find(
        (el) => el.NOMENKLATURA === '7. MARKIROVANNAYA ZHIDKOST',
      );
      const nonNicotineFluid = markFluid.STROKI.find(
        (el) => el.NOMENKLATURA === 'BEZ NIKOTINA ESDN',
      );
      const childs = findChilds(nonNicotineFluid);
      finded = [...finded, ...childs];
    }
  });
  return finded;
};

const finddIY = (allData) => {
  let finded = [];
  allData.STROKI.forEach((group) => {
    if (group.NOMENKLATURA === 'SIGARETY ELEKTRONNYE') {
      const fluid = group.STROKI.find((el) => el.NOMENKLATURA === 'SAMOZAMES');
      const dIYFluid = fluid.STROKI.find((el) => el.NOMENKLATURA === 'NIKOTIN');
      const childs = findChilds(dIYFluid);
      finded = [...finded, ...childs];
    }
  });
  return finded;
};

const findTobacco = (allData) => {
  let finded = [];
  allData.STROKI.forEach((group) => {
    if (group.NOMENKLATURA === 'KALYANY') {
      const snus = group.STROKI.find(
        (el) => el.NOMENKLATURA === 'ZHEVATELNYY TABAK (MARKIROVKA)',
      );
      const childs = findChilds(snus);
      finded = [...finded, ...childs];
    }
  });
  return finded;
};

const findParts = (allData) => {
  let finded = [];
  allData.STROKI.forEach((group) => {
    if (group.NOMENKLATURA === 'SIGARETY ELEKTRONNYE') {
      const parts = group.STROKI.find(
        (el) => el.NOMENKLATURA === 'KOMPLEKTUYUSHCHIE',
      );
      const childs = findChilds(parts);
      finded = [...finded, ...childs];
    }
  });
  return finded;
};

export { categoryFind };
