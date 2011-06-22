describe("Model.Sortable", function(){
  var Asset;

  beforeEach(function(){
    Asset = Spine.Model.setup("Asset", ["name"]);
    Asset.extend(Spine.Model.Sortable);
  });

  describe("when sorting with default comparer ['id']", function() {
    it("it should sort by id by default", function(){
      var first = Asset.create({id: 3, name: "Asset P"});
      var second = Asset.create({id: 2, name: "Asset B"});
      var third = Asset.create({id: 1, name: "Asset M"});
      expect(Asset.all()).toEqual([third, second, first]);
    });

    it("it should return first/last correctly", function(){
      var first = Asset.create({id: 3, name: "Asset P"});
      var second = Asset.create({id: 2, name: "Asset B"});
      var third = Asset.create({id: 1, name: "Asset M"});
      expect(Asset.first().id).toEqual(third.id);
      expect(Asset.last().id).toEqual(first.id);
    });
  });

  describe("when sorting with custom comparer", function() {

    beforeEach(function() {
      Asset.extend({sortBy: function(){
        return "name";
      }});
    });

    it("it should sort by specified property", function(){
      var first = Asset.create({name: "Asset P"});
      var second = Asset.create({name: "Asset B"});
      var third = Asset.create({name: "Asset M"});
      expect(Asset.first().name).toEqual(second.name);
      expect(Asset.last().name).toEqual(first.name);
    });

    it("it should return first/last correctly", function(){
      var first = Asset.create({id: 3, name: "Asset P"});
      var second = Asset.create({id: 2, name: "Asset B"});
      var third = Asset.create({id: 1, name: "Asset M"});
      expect(Asset.first().id).toEqual(second.id);
      expect(Asset.last().id).toEqual(first.id);
    });
  });

});
