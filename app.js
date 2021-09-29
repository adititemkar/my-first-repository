var list = document.querySelector('url')

console.log(list)


var arr = ['GO TO GYM', 'COOK OATMEAL', 'EAT']

for (var i = 0; i < arr.length; i++) {
    var element = document.createElement('li')
    var textnode = document.createTextNode(arr[i])
    console.log(textnode)
}