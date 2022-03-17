
const capitalizeHeaders = (text: string): string => {
  const result = text.replace(/([A-Z])/g, ' $1');
  const finalResult = result.charAt(0).toUpperCase() + result.slice(1);

  return finalResult;
};

const destruct = (obj: { [x: string]: any; }, keys: any[]) =>
  keys.reduce((a, c) => ({ ...a, [c]: obj[c] }), {});

const serachByMultipleConditions = (filterBy:string[], data: any[]) => {
  filterBy = filterBy.filter(Boolean);
  if (filterBy.length === 0 || filterBy === null || filterBy === undefined) {
    return data;
  }
  const result:any[] = data.filter(function (obj) {
    return filterBy.some(function (query) {
      return JSON.stringify(obj).toLowerCase().includes(query.toLowerCase());
    });
  });
  return result;
};
const Helpers = {
  capitalizeHeaders,
  destruct,
  serachByMultipleConditions
};
export default Helpers;
