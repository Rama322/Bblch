import allData from '../../Products.json' with { type: 'json' };
import findChilds from './findChilds.js';

export default (searchString) => {
  //TODO: делаем для перенвода транслита
  const finded = [];
  allData.STROKI.forEach((el) => {
    const childs = findChilds(el);
    childs.forEach((child) => {
      if (child.toLowerCase().includes(searchString.toLowerCase())) {
        finded.push(child);
      }
    });
  });

  return finded;
};
