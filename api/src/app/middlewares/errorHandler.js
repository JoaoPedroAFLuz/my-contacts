module.exports = (error, request, response, next) => {
  console.log('##### Error Handler #####');
  console.error(error);
  response.sendStatus(500);
};
