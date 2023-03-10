const cart = document.getElementById('cart');
const cartItems = document.querySelector('.cart-items');
const cartNumber = document.querySelector('.cart-number');
const notification = document.getElementById('container');
const cartTotal = document.getElementById('total-value');



const dataArray = [
    {
        name: 'album1',
        price: 12.99,
        img: './img/Album1.jpg'
    },
    {
        name: 'album2',
        price: 14.99,
        img: './img/Album2.jpg'
    },
    {
        name: 'album3',
        price: 9.99,
        img: './img/Album3.jpg'
    },
    {
        name: 'album4',
        price: 19.99,
        img: './img/Album4.jpg'
    },
    {
        name: 't-shirt',
        price: 19.99,
        img: './img/tshirt.jpg'
    },
    {
        name: 'coffee-cup',
        price: 6.99,
        img: './img/coffee.jpg'
    }
]


let cartArray = [];



function addToCart(event) {
    const btn = String(event.target.id);
    if (btn.includes('btn')) {
        const [album, ele] = btn.split(' ');
        const data = dataArray.find((data) => data.name === album);
        if (cartArray.includes(data)) {
            alert("Item already exist in cart")
        }
        else {
            cartArray.push(data);
            cartNumber.textContent = cartArray.length;
            notification.style.display = 'block';
            notification.innerHTML = `<span>Your Product : ${data.name} is added to cart</span>`
            let total = 0;
            cartArray.forEach((data) => total += data.price);
            cartTotal.textContent = `${total}`;
        }


        setTimeout(() => {
            notification.style.display = 'none';
        }, 3000)

    }
    cartItems.innerHTML = '';
    cartArray.forEach((data) => {
        const div = document.createElement('div');
        div.className = 'cart-row';
        div.innerHTML = `<span class='cart-item cart-column'>
            <img class='cart-img' src="${data.img}" alt="">
            <span>${data.name}</span>
        </span>
        <span class='cart-price cart-column'>${data.price}</span>
        <span class='cart-quantity cart-column'>
        <input type="text" value='1'>
        <button onclick={removeFromCart('${data.name}')}>REMOVE</button>
        </span>
        `;
        cartItems.appendChild(div);
    })
}



function removeFromCart(data) {
    let array = cartArray.filter((item) => item.name !== data)
    cartArray = [...array];
    cartNumber.textContent = cartArray.length;
    let total = 0;
    cartArray.forEach((data) => total += data.price);
    cartTotal.textContent = `${total}`;

}

function hideCart() {
    cart.style.display = 'none';
}

function showCart() {
    cart.style.display = 'block';
}

function purchaseCart(){
    if(cartArray.length===0){
        alert('Nothing to purchase')
    }
    else{
        let array = [];
        cartArray = [...array];
        cartTotal.innerText = 0;
        cartNumber.innerText = cartArray.length;
        alert('Items purchased successfully')
    }
}