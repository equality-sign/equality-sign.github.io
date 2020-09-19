import $ from 'jquery'
import './css/1.css'

$(function() {

    $('li:odd').css('backgroundColor', 'red')
    $('li:even').css('backgroundColor', 'blue')
})

class Person {
    static info = 'aaa'
}
console.log(Person.info);