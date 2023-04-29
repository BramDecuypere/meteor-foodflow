import React from "react";
import { shallow } from "enzyme";
import assert from "assert";
import { getIngredientLabel } from "./get-ingredient-label";
import { Meteor } from "meteor/meteor";

// describe('TodoItem', () => {
//   it('should render', () => {
//     const todo = Factory.build('todo', { text: 'testing', checked: false });
//     const item = shallow(<TodoItem todo={todo} />);
//     chai.assert(item.hasClass('list-item'));
//     chai.assert(!item.hasClass('checked'));
//     chai.assert.equal(item.find('.editing').length, 0);
//     chai.assert.equal(item.find('input[type="text"]').prop('defaultValue'), 'testing');
//   });
// });

if (Meteor.isClient) {
  describe("get-ingredient-label", () => {
    it("should get the ingredient label with the correct value", () => {
      const name = "test-name";
      const amount = 2;
      const metric = "test";
      const element = getIngredientLabel(
        { name, amount, metric, departments: [] },
        true
      );
      const item = shallow(element);
      assert.equal(item.find("span"), 1);
    });
  });
}
