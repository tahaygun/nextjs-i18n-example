export const getText = (path, locale) => {
  return (t) => {
    const h = require(`./${locale}/${path}.json`);
    return h?.[t] ?? t;
  };
};
