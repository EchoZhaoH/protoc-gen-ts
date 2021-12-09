function camelCase(name) {
  if (!name || typeof name !== 'string') {
    return name;
  }
  return name.replace(/(\_[a-zA-Z]{1})/g, (m, p) => {
    return p.split('_').filter(Boolean)[0].toUpperCase()
  });
}

module.exports = {
  camelCase
};
