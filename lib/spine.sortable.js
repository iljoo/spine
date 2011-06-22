Spine.Model.Sortable = {
  sortBy: function(){ return "id"; },

  compareBy: function(property) {
    return function(a, b) {
      return a[property].toString().localeCompare(b[property].toString());
    };
  },

  recordsValues: function(){
    var result = [];
    for (var key in this.records)
      result.push(this.records[key]);
    var comparator = this.sortBy(),
    sorter = typeof(comparator) === "function" ?
      comparator : this.compareBy(comparator);
    return result.sort(sorter);
  }
};


