module.exports = function(name) {
  return function(type) {
    return name + '/'+ type;
  };
};
