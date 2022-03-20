import _ from 'lodash'
import CovidDataMediaGroup from './service/covid-data'
//const arr = [{age: 30, name: 'Moshe'}, {age: 30, name: 'Vasya'}, {age: 20, name:'Sara'}, {age: 20, name:'Rivka'}, {age: 20, name:'Sara'}];
//console.log(_.groupBy(arr, 'age'))
const dataProvider = new CovidDataMediaGroup();
dataProvider.getContinentCases().then(data => console.log(data))