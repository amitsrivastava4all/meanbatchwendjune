window.addEventListener("load",init);
// var a = "<li>Hello</li>";
function init(){
   
    var products = productOperations.read();
    for(let product of products){
        printProduct(product);
    }
    //  ul.innerHTML = a;
}
function printProduct(product){
    var ul = document.getElementById('products');
    var li = document.createElement("li");
    li.appendChild(createImage(product.url));
    li.appendChild(createSpan(product.name,product.price));
    //li.innerText = product.name + " "+ product.price;
    ul.appendChild(li);
}
function createImage(url){
    var img= document.createElement('img');
    img.src = url;
    img.className = 'size';
    return img;
}
function createSpan(name, price){
    var span = document.createElement('span');
    span.innerText = name + " "+price;
    return span;
}
