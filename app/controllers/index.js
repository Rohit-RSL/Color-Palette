import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
export default class IndexController extends Controller {
  value = '';
  name = '';
  @tracked isRemoving = false;
  @tracked isHere = false;
  @tracked colorData = [];

  @action
  save() {
    var value = this.value;
    var name = this.name;
    var isHere = value != '' || name != '';
    this.colorData = [...this.colorData,{ value: value, name: name, isHere: isHere }];
    console.log(this.colorData);
  };

  @action
  remove(value) {
      this.colorData = this.colorData.filter((color)=>color.value != value )
        console.log(value);
}
}
