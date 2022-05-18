module.exports = function myloader(content) {
  console.log('myloader 동작');
  return content.replace('console.log(', 'alert(');
};
