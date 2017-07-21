var Table = function (ids) {
  if (!ids) {
    alert('No Environment!');
    return;
  }
  this.per_page = 5;
  this.key = 'test';
  this.page = 1;
  this.ids = ids;
  this.storage = new Storage(this.key);
  this.render = new Render(this.ids);
  this.totalPages = function () {
    return Math.ceil(this.storage.get().length / this.per_page);
  };
  this.table = function () {
    var min = ((this.page - 1)) * this.per_page;
    var max = this.page * this.per_page;
    var table = this.storage.get().length >= this.per_page ? this.storage.get().slice(min, max) : this.storage.get();
    this.render.renderTable(table);
  };
  this.pagination = function () {
    if (this.page < 1) {
      this.page = 1;
    }
    if (this.page > this.totalPages()) {
      this.page = this.totalPages();
    }
    if (this.page == 1) {
      this.render.disablePrev();
    } else {
      this.render.enablePrev();
    }
    if (this.page == this.totalPages()) {
      this.render.disableNext();
    } else {
      this.render.enableNext();
    }
    this.render.renderTotal(this.page, this.totalPages(), this.storage.get().length);
  };
  this.display = function () {
    this.table();
    this.pagination();
  };
  this.next = function () {
    if (this.page < this.totalPages()) {
      this.page++;
      this.display();
    }
  };
  this.prev = function () {
    if (this.page > 1) {
      this.page--;
      this.display();
    }
  };
  this.addItem = function () {
    this.storage.add({
      index: (this.storage.get().length + 1),
      name: Lipsum.random()
    });
    this.display();
  };
  this.remove = function () {
    this.storage.remove();
    this.display();
  };
  this.dispathClickEvent = function (id, refMethod) {
    self = this;
    this.render.event(id, 'click', function () {
      self[refMethod]();
    });
  }
  this.defaultEvents = function () {
    this.dispathClickEvent(this.ids.next, 'next');
    this.dispathClickEvent(this.ids.prev, 'prev');
    this.dispathClickEvent(this.ids.add, 'addItem');
    this.dispathClickEvent(this.ids.remove, 'remove');
  };
  this.display();
  this.defaultEvents();
};