var Render = function (ids) {
  this.table = document.getElementById(ids.table);
  this.next = document.getElementById(ids.next);
  this.previous = document.getElementById(ids.prev);
  this.total = document.getElementById(ids.total);
  this.templateTable = document.getElementById(ids.templateTable);
  this.templateTotal = document.getElementById(ids.templateTotal);

  this.renderTemplate = function (templatehtml, data) {
    return Handlebars.compile(templatehtml)({
      data: data
    })
  };

  this.renderTable = function (data) {
    this.table.innerHTML = "";
    this.table.innerHTML += this.renderTemplate(this.templateTable.innerHTML, data);
  };
  this.renderTotal = function (page, totalPages, total) {
    this.total.innerHTML = this.renderTemplate(this.templateTotal.innerHTML, {
      page: page,
      totalPages: totalPages,
      total: total
    });
  };
  this.enableNext = function () {
    this.next.disabled = false;
  };
  this.disableNext = function () {
    this.next.disabled = true;
  };
  this.enablePrev = function () {
    this.previous.disabled = false;
  };
  this.disablePrev = function () {
    this.previous.disabled = true;
  };
  this.event = function(id, event, method) {
    document.getElementById(id).addEventListener(event, method);
  }
};