getData = async () =>{
    try{
        let url = "https://masai-vouchers-api.herokuapp.com/api/vouchers";
        let res = await fetch(url);
        let data = await res.json();
        // console.log(data[0].vouchers);
        return data[0].vouchers;
    }
    catch(error){
        console.log(error)
    }
    
}
var wallet = JSON.parse(localStorage.getItem("user"));

var amountInWallet = wallet.wallet;
console.log(amountInWallet)

var walletAmount = document.getElementById("wallet_balance");
walletAmount.innerText = `Wallet Balance: ${amountInWallet}`;

append = async () =>{
    let couponData = await getData();
    // console.log(couponData);

    let container = document.getElementById("voucher_list")

    couponData.forEach((elem) => {

        // console.log(elem)
        let div = document.createElement("div");
        div.setAttribute("class", "voucher");

        let image = document.createElement("img");
        image.src = elem.image;

        let name = document.createElement("h3");
        name.innerText = elem.name;

        let price = document.createElement("p");
        price.innerText = elem.price;

        let button = document.createElement("button");
        button.innerText = "Buy"
        button.onclick = () =>{
            added(elem.image, elem.name, elem.price);
        };

        div.append(image, name, price, button);
        container.append(div);
    });
}

append();

let purchaseArray = JSON.parse(localStorage.getItem("purchase")) ||[]

added = (i,n,p)=>{
    // console.log("added")
    
    // console.log(amountInWallet);

    if(amountInWallet >= p){
        alert("Hurray! purchase successful");

        class purchase{
            constructor(i,n,p){
                this.image = i;
                this.name = n;
                this.price = p;
            }
        }

        let perchase = new purchase(i, n, p);

        purchaseArray.push(perchase);

        localStorage.setItem("purchase", JSON.stringify(purchaseArray));
        
        wallet = JSON.parse(localStorage.getItem("user"));
        let newAmount = wallet.wallet - p;
        walletAmount.innerText = `Wallet Balance: ${newAmount}`;

        class person{
        constructor(n,e,ad,a){
            this.name = n;
            this.email = e;
            this.address = ad;
            this.wallet = a;
        }
    }

    let person1 = new person(wallet.name, wallet.email, wallet.address, newAmount);
    // console.log(person1);

    localStorage.setItem("user", JSON.stringify(person1));
    walletAmount.innerText = `Wallet Balance: ${newAmount}`;
    }
    else{
        alert("Sorry! insufficient balance")
    }
}