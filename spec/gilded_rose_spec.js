describe("An Aged Brie's", function() {
  var aged_brie_name = 'Aged Brie';

  describe("quality", function() {
    it("should increase every day", function() {
      initial_quality = 10;
      var new_brie = new Item(aged_brie_name, 0, initial_quality);
      items = [new_brie];

      update_quality();

      expect(initial_quality).toBeLessThan(new_brie.quality);
    });

    it("should not increase above 50", function() {
      var new_brie = new Item(aged_brie_name, 0, 50);
      items = [new_brie];

      update_quality();

      expect(new_brie.quality).toEqual(50);
    });

    it("should not decrease after the sell-in date", function() {
      var quality = 10;
      var new_brie = new Item(aged_brie_name, -1, quality);

      items = [new_brie];
      update_quality();

      expect(new_brie.quality).toBeGreaterThan(quality);
    });
  });
});
