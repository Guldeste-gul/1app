let data = [
  {
    id: 1,
    img: "https://neal.fun/spend/images/big-mac.jpg",
    title: "Big Mac",
    price: 2,
  },
  {
    id: 2,
    img: "https://neal.fun/spend/images/starbucks.jpg",
    title: "Starbucks Coffee",
    price: 5,
  },
  {
    id: 3,
    img: "https://neal.fun/spend/images/iphone.jpg",
    title: "iPhone 14",
    price: 799,
  },
  {
    id: 4,
    img: "https://neal.fun/spend/images/tv.jpg",
    title: "Smart TV",
    price: 1200,
  },
  {
    id: 5,
    img: "https://neal.fun/spend/images/airbnb.jpg",
    title: "Airbnb Stay (1 Night)",
    price: 150,
  },
  {
    id: 6,
    img: "https://neal.fun/spend/images/tesla.jpg",
    title: "Tesla Model 3",
    price: 49990,
  },
  {
    id: 7,
    img: "https://neal.fun/spend/images/gas.jpg",
    title: "Gas (1 Gallon)",
    price: 4,
  },
  {
    id: 8,
    img: "https://neal.fun/spend/images/sushi.jpg",
    title: "Sushi Dinner",
    price: 60,
  },
  {
    id: 9,
    img: "https://neal.fun/spend/images/diamond.jpg",
    title: "Diamond Ring",
    price: 5000,
  },
  {
    id: 10,
    img: "https://neal.fun/spend/images/boat.jpg",
    title: "Luxury Yacht",
    price: 5000000,
  },
  {
    id: 11,
    img: "https://neal.fun/spend/images/diamond-ring.jpg",
    title: "Diamond Ring",
    price: 5000,
  },
  {
    id: 12,
    img: "https://neal.fun/spend/images/watch.jpg",
    title: "Rolex Watch",
    price: 8000,
  },
  {
    id: 13,
    img: "https://neal.fun/spend/images/private-jet.jpg",
    title: "Private Jet",
    price: 30000000,
  },
  {
    id: 14,
    img: "https://neal.fun/spend/images/vacation.jpg",
    title: "Luxury Vacation",
    price: 10000,
  },
  {
    id: 15,
    img: "https://neal.fun/spend/images/ferrari.jpg",
    title: "Ferrari F8",
    price: 275000,
  },
  {
    id: 16,
    img: "https://neal.fun/spend/images/porsche.jpg",
    title: "Porsche 911",
    price: 100000,
  },
  {
    id: 17,
    img: "https://neal.fun/spend/images/mansion.jpg",
    title: "Mansion",
    price: 3000000,
  },
  {
    id: 18,
    img: "https://neal.fun/spend/images/art.jpg",
    title: "Art Collection",
    price: 500000,
  },
  {
    id: 19,
    img: "https://neal.fun/spend/images/expensive-wine.jpg",
    title: "Expensive Wine",
    price: 500,
  },
  {
    id: 20,
    img: "https://neal.fun/spend/images/rare-book.jpg",
    title: "Rare Book",
    price: 1500,
  },
  {
    id: 21,
    img: "https://neal.fun/spend/images/vintage-car.jpg",
    title: "Vintage Car",
    price: 200000,
  },
  {
    id: 22,
    img: "https://neal.fun/spend/images/space-tour.jpg",
    title: "Space Tour",
    price: 25000000,
  },
  {
    id: 23,
    img: "https://neal.fun/spend/images/smartwatch.jpg",
    title: "Smartwatch",
    price: 400,
  },
  {
    id: 24,
    img: "https://neal.fun/spend/images/collectibles.jpg",
    title: "Collectibles",
    price: 20000,
  },
  {
    id: 25,
    img: "https://neal.fun/spend/images/gold-bar.jpg",
    title: "Gold Bar",
    price: 60000,
  },
  {
    id: 26,
    img: "https://neal.fun/spend/images/restaurant.jpg",
    title: "High-End Restaurant Meal",
    price: 300,
  },
  {
    id: 27,
    img: "https://neal.fun/spend/images/bag.jpg",
    title: "Designer Handbag",
    price: 3500,
  },
  {
    id: 28,
    img: "https://neal.fun/spend/images/smartphone.jpg",
    title: "Latest Smartphone",
    price: 1000,
  },
  {
    id: 29,
    img: "https://neal.fun/spend/images/skyscraper.jpg",
    title: "Skyscraper Office Space (1 Month)",
    price: 50000,
  },
  {
    id: 30,
    img: "https://neal.fun/spend/images/penthouse.jpg",
    title: "Penthouse Apartment",
    price: 1500000,
  },
];

let row = document.querySelector(".row");

let totalPrice = document.querySelector(".total-price");

let moneyCount = document.querySelector(".money-count");

let totalTitle = document.querySelector(".total-title");

let totalMenu = document.querySelector(".total-menu");
let totalBlock=document.querySelector('.total')
let total = 0;

let money = 1000000000;

moneyCount.textContent = money;

const setRow = () => {
  data.forEach((item, idx) => {
    row.innerHTML += `
             <div class="col">
                <img class="col-img" src="${item.img}" alt="">
                <h2 class="col-title">${item.title}</h2>
                <p class="col-money">$ ${item.price}</p>
                <div class="col-end">
                    <button data-id="${item.id}" class="col-sell">Sell</button>
                    <input readonly data-title="${item.title}" data-price="${item.price}" data-id="${item.id}" type="text" class="col-field" placeholder="0">
                    <button data-id="${item.id}" class="col-buy">Buy</button>
                </div>
            </div>
        `;
  });

  let img = document.querySelectorAll(".col-img");

  Array.from(img).forEach((item) => {
    item.onerror = () => {
      item.setAttribute(
        "src",
        "https://as1.ftcdn.net/v2/jpg/00/95/83/46/1000_F_95834632_CL4kevuB3WZLoX72MB52KTLJqx4qhvQj.jpg"
      );
    };
  });

  let buyBtns = document.querySelectorAll(".col-buy");
  let sellBtns = document.querySelectorAll(".col-sell");
  let fields = document.querySelectorAll(".col-field");

  const setTotalMenu = () => {
    totalMenu.innerHTML = ``;
    Array.from(fields).forEach((item) => {
      if (item.value > 0) {
        totalMenu.innerHTML += `
            <li class="total-item">
            <span>${item.dataset.title}</span>
            <span>${item.value}</span>
      </li>
            `;
      }
    });
  };

  setTotalMenu();

  const setTotal = () => {
    total = Array.from(fields).reduce((acc, rec) => {
      return acc + +rec.value * +rec.dataset.price;
    }, 0);

    moneyCount.textContent = money - total;
    totalPrice.textContent = total;
    setTotalMenu();
    if (total > 0){
      totalBlock.style.display='block'
    }else{
      totalBlock.style.display='none'
    }
  };
  setTotal();



  Array.from(buyBtns).forEach((item, idx) => {
    item.addEventListener("click", () => {
      if (money - total < +fields[idx].dataset.price) {
        alert("У вас недостаточно средств");
      } else {
        fields[idx].value = +fields[idx].value + 1;
        setTotal();
      }
    });
  });

  Array.from(sellBtns).forEach((item, idx) => {
    item.addEventListener("click", () => {
      if (fields[idx].value > 0) {
        fields[idx].value = +fields[idx].value - 1;
        setTotal();
      }
    });
  });
};

setRow();
