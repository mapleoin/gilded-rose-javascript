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

describe("A Conjured Item's", function() {
  var item_name = "Conjured";

  describe("quality", function() {
    it("should decrease by 2 every day", function() {
      var initial_quality = 10;

      var new_conjured = new Item(item_name, 10, initial_quality);
      items = [new_conjured];

      update_quality();

      expect(new_conjured.quality).toEqual(10 -2);
    });

    it("should not go negative", function() {
      var initial_quality = 0;
      var past_sell_in = -1;

      var new_conjured = new Item(item_name, past_sell_in, initial_quality);
      items = [new_conjured];

      update_quality();

      expect(new_conjured.quality).toEqual(initial_quality);
    });
  });

  describe("sell_in", function() {
    it("should decrease by 1 when positive", function() {
      var initial_sell_in = 1;

      var new_conjured = new Item(item_name, initial_sell_in, 10);
      items = [new_conjured];

      update_quality();

      expect(new_conjured.sell_in).toEqual(initial_sell_in - 1);
    });

    it("should decrease by 1 when negative", function() {
      var initial_sell_in = -1;

      var new_conjured = new Item(item_name, initial_sell_in, 10);
      items = [new_conjured];

      update_quality();

      expect(new_conjured.sell_in).toEqual(initial_sell_in - 1);
    });
  });
});
