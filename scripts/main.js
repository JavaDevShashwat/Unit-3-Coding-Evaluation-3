submit = () => {
    console.log("clicked");
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let amount = document.getElementById("amount").value;

    class person{
        constructor(n,e,ad,a){
            this.name = n;
            this.email = e;
            this.address = ad;
            this.wallet = a;
        }
    }

    let person1 = new person(name, email, address, amount);
    console.log(person1);

    localStorage.setItem("user", JSON.stringify(person1));

    document.getElementById("name").value = null;
    document.getElementById("email").value = null;
    document.getElementById("address").value = null;
    document.getElementById("amount").value = null;
}