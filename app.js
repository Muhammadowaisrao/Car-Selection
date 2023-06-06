var cars = {

    honda: {
        civic: {
            name: "Civic",
            price: "RS-85,00,000",
            city: "Karachi",
            img: "./Honda/civic.jpg",
            brand: "HONDA"
        },
        brv: {
            name: "BRV",
            price: "RS-64,00,000",
            city: "Karachi",
            img: "./Honda/BRV.jpg",
            brand: "HONDA"
        },
        crv: {
            name: "CRV",
            price: "RS-58,00,000",
            city: "Karachi",
            img: "./Honda/CR-V.jpg",
            brand: "HONDA"
        },
        fit: {
            name: "Fit",
            price: "RS-62,00,000",
            city: "Karachi",
            img: "./Honda/fit.jpg",
            brand: "HONDA"
        },
        city: {
            name: "City",
            price: "RS-73,00,000",
            city: "Karachi",
            img: "./Honda/city.jpg",
            brand: "HONDA"
        },
        vezel: {
            name: "Vezel",
            price: "RS-82,00,000",
            city: "Karachi",
            img: "./Honda/vezel.jpg",
            brand: "HONDA"
        },
        accord: {
            name: "Accord",
            price: "RS-70,00,000",
            city: "Karachi",
            img: "./Honda/accord.jpg",
            brand: "HONDA"
        },
    },
    kia: {
        carnival: {
            name: "Carnival",
            price: "RS-86,00,000",
            city: "Karachi",
            img: "./KIA/carnival.jpg",
            brand: "KIA"
        },
        srento: {
            name: "Sarento",
            price: "RS-58,00,000",
            city: "Karachi",
            img: "./KIA/Sorento.jpg",
            brand: "KIA"
        },
        stonic: {
            name: "Stonic",
            price: "RS-93,00,000",
            city: "Karachi",
            img: "./KIA/stonic.jpg",
            brand: "KIA"
        },
        picanto: {
            name: "Picanto",
            price: "RS-52,00,000",
            city: "Karachi",
            img: "./KIA/Picanto.png",
            brand: "KIA"
        },
        sportage: {
            name: "Sportage",
            price: "RS-2,52,00,000",
            city: "Karachi",
            img: "./KIA/Sportage.png",
            brand: "KIA"
        },
    },
    mistubishi: {
        eclips: {
            name: "Eclips",
            price: "RS-75,00,000",
            city: "Karachi",
            img: "./Mistubishi/eclipse-cross.webp",
            brand: "MISTUBISHI"
        },
        mirag: {
            name: "Mirag",
            price: "RS-55,00,000",
            city: "Karachi",
            img: "./Mistubishi/Mirage.webp",
            brand: "MISTUBISHI"
        },
        ots: {
            name: "OTS",
            price: "RS-65,00,000",
            city: "Karachi",
            img: "./Mistubishi/Ots.webp",
            brand: "MISTUBISHI"
        },
        outlander: {
            name: "Outlander",
            price: "RS-85,00,000",
            city: "Karachi",
            img: "./Mistubishi/outlander.webp",
            brand: "MISTUBISHI"
        },
    },
    suzuki: {
        alto: {
            name: "Alto",
            price: "RS-28,00,000",
            city: "Karachi",
            img: "./suzuki/alto.jpg",
            brand: "SUZUKI"
        },
        bolan: {
            name: "Bolan",
            price: "RS-21,00,000",
            city: "Karachi",
            img: "./suzuki/bolan.jpg",
            brand: "SUZUKI"
        },
        cultus: {
            name: "Cultus",
            price: "RS-46,00,000",
            city: "Karachi",
            img: "./suzuki/cultus.jpg",
            brand: "SUZUKI"
        },
        every: {
            name: "Every",
            price: "RS-50,00,000",
            city: "Karachi",
            img: "./suzuki/EVERY.jpg",
            brand: "SUZUKI"
        },
        ravi: {
            name: "Ravi",
            price: "RS-19,00,000",
            city: "Karachi",
            img: "./suzuki/Ravi.png",
            brand: "SUZUKI"
        },
        swift: {
            name: "Swift",
            price: "RS-56,00,000",
            city: "Karachi",
            img: "./suzuki/Swift.png",
            brand: "SUZUKI"
        },
        wagonR: {
            name: "WagonR",
            price: "RS-48,00,000",
            city: "Karachi",
            img: "./suzuki/WagonR.jpg",
            brand: "SUZUKI"
        },
    },
    toyota: {
        camry: {
            name: "Camry",
            price: "RS-95,00,000",
            city: "Karachi",
            img: "./Toyota/Camry.jpg",
            brand: "TOYOTA"
        },
        corolla: {
            name: "Corolla",
            price: "RS-87,00,000",
            city: "Karachi",
            img: "./Toyota/Corolla.png",
            brand: "TOYOTA"
        },
        fortuner: {
            name: "Fortuner",
            price: "RS-3,85,00,000",
            city: "Karachi",
            img: "./Toyota/Fortuner.png",
            brand: "TOYOTA"
        },
        hiace: {
            name: "Hiace",
            price: "RS-85,00,000",
            city: "Karachi",
            img: "./Toyota/hiace-cover.jpg",
            brand: "TOYOTA"
        },
        land_cruiser: {
            name: "Land Cruiser",
            price: "RS-5,87,00,000",
            city: "Karachi",
            img: "./Toyota/Land_Cruiser.png",
            brand: "TOYOTA"
        },
        prado: {
            name: "Prado",
            price: "RS-6,85,00,000",
            city: "Karachi",
            img: "./Toyota/prado.jpg",
            brand: "TOYOTA"
        },
        revo: {
            name: "Revo",
            price: "RS-1,85,00,000",
            city: "Karachi",
            img: "./Toyota/Revo.png",
            brand: "TOYOTA"
        },
        rush: {
            name: "Rush",
            price: "RS-67,00,000",
            city: "Karachi",
            img: "./Toyota/rush.jpg",
            brand: "TOYOTA"
        },
        yaris: {
            name: "Yaris",
            price: "RS-85,00,000",
            city: "Karachi",
            img: "./Toyota/Yaris.jpg",
            brand: "TOYOTA"
        },
    }
}
var content = document.getElementById("content");
function allItems() {
    content.innerHTML = "";
    for (var brand in cars) {
        for (var modles in cars[brand]) {
            content.innerHTML +=
                `<div class="item col-sm-8 col-md-6 col-lg-2 mt-3 mb-sm-0">
    <div class="card">
      <div class="card-body">
        <img src="${cars[brand][modles].img}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${cars[brand][modles].name}</h5>
          <p class="card-text model price">${cars[brand][modles].price}</p>
          <p class="card-text model">${cars[brand][modles].city}</p>
          <p class="card-text model">${cars[brand][modles].brand}</p>
        </div>
        </div>
        </div>
        </div>`
        console.log(modles)
        }
    }
}
allItems();
function selected(brand) {
    content.innerHTML = "";
    for (var modles in cars[brand]) {
        content.innerHTML +=
            `<div class="item col-sm-8 col-md-6 col-lg-2 mt-3 mb-sm-0">
    <div class="card">
      <div class="card-body">
        <img src="${cars[brand][modles].img}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${cars[brand][modles].name}</h5>
          <p class="card-text model price">${cars[brand][modles].price}</p>
          <p class="card-text model">${cars[brand][modles].city}</p>
          <p class="card-text model">${cars[brand][modles].brand}</p>
        </div>
        </div>
        </div><br>
        </div>`
    }
}
function searchcar() {
    var searchItem = document.getElementById("searchInput").value.toLowerCase();
    content.innerHTML = "";
    for (var brand in cars) {
        for (var modles in cars[brand]) {
            if (cars[brand][modles].name.toLowerCase().includes(searchItem)) {
                content.innerHTML += `<div class="item col-sm-8 col-md-6 col-lg-2 mt-3 mb-sm-0">
    <div class="card search-card">
      <div class="card-body">
        <img src="${cars[brand][modles].img}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${cars[brand][modles].name}</h5>
          <p class="card-text model price">${cars[brand][modles].price}</p>
          <p class="card-text model">${cars[brand][modles].city}</p>
          <p class="card-text model">${cars[brand][modles].brand}</p>
          </div>
        </div>
        </div>
        <br><br>
        </div>`;

            }
        }
    }
}


