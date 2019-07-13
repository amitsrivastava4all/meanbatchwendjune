const productOperations = {
    products:[],
    read(){
          // BackEnd  
          for(let i = 1; i<=10; i++){
              let product = new Product(i ,"Apple"+i, 1000*i, "Apple Phone", "apple.com");
            this.products.push(product);
          }
          console.log('All Products are ',this.products);
          return this.products;
    },
    add(){

    },
    remove(){

    },
    search(){

    },
    update(){

    },
    sort(){

    }
}