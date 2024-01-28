export const getLinesData = async () => {
  const data = require('./db/data.json');
  //   throw new Error('An error ocurred while getting the lines data!');

  return data;
};
