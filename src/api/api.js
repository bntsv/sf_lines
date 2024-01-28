export const getLinesData = async () => {
  const data = require('./db/data.json');
  //   throw new Error('An error ocurred while getting the lines data!');

  return data;
};

export const getLineData = async (line) => {
  const data = require('./db/data.json');
  //   throw new Error('An error ocurred while getting the line data!');
  const foundLine = data.find((l) => l.line === line);

  return foundLine ? foundLine : null;
};
