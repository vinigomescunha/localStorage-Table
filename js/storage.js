var Storage = function (key) {
  this.key = key;
  this.get = function () {
    var item = eval(localStorage.getItem(this.key));
    return item && Array.isArray(item) ? item : [];
  };
  this.set = function (v) {
    localStorage.setItem(this.key, JSON.stringify(v));
  };
  this.add = function (v) {
    var items = this.get();
    items.push(v);
    localStorage.setItem(this.key, JSON.stringify(items));
  };
  this.remove = function () {
    localStorage.removeItem(this.key);
  };
};