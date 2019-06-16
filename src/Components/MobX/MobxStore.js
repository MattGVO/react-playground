import { observable, action, computed } from 'mobx'

export default class Store {
    @observable _price = 0;

    @computed get withTax(){
        return this._price * .7
    }

}