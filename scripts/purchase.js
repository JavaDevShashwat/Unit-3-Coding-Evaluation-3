var purchased = JSON.parse(localStorage.getItem("purchase"));
console.log(purchased);

var forbalance = JSON.parse(localStorage.getItem("user"));

    var purchaseVouchers = document.getElementById("purchased_vouchers");

    var amountInWallet = document.getElementById("balance");
    amountInWallet.innerText = `Wallet Balance : ${forbalance.wallet}`;


    purchased.forEach((elem) => {
        let div = document.createElement("div");
        div.setAttribute("class", "voucher");

        let image = document.createElement("img");
        image.src = elem.image;

        let name = document.createElement("h3");
        name.innerText = elem.name;

        let price = document.createElement("p");
        price.innerText = elem.price;

        div.append(image, name, price);
        purchaseVouchers.append(div)
    });

