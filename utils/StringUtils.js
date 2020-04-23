function isEmpty (obj) {
  if (obj == null || obj == "") {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  isEmpty: isEmpty
}