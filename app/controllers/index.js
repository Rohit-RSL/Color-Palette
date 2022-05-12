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
    this.colorData.push({
      value: value,
      name: name,
      isHere: isHere
    });
    console.log(this.colorData);
  };
  
  @action
  remove() {
    this.isRemoving = true;
    console.log('im in remove ');
  }
}
