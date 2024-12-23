const searchBtn = document.getElementById('searchBtn');
const countryDropdown = document.getElementById("country");
const cityDropdown = document.getElementById("city");
const date = document.getElementById('date');
const resultCity = document.getElementById('result-city');
const resultCountry = document.getElementById('result-country')


// Today Date

let today = new Date();
let options = { 
    weekday: 'long',   // Full name of the weekday (e.g., "Tuesday")
    month: 'long',     // Full name of the month (e.g., "December")
    day: 'numeric',    // Numeric day (e.g., 17)
    year: 'numeric'    // Full year (e.g., 2024)
};

let formattedDate = today.toLocaleDateString('en-US', options);
console.log(formattedDate);


searchBtn.addEventListener('click', () => {
    document.querySelector('.result').style.visibility = "visible";
    let city = cityDropdown.value;
    let country = countryDropdown.value;
    console.log(country)
    console.log(city)
    getPrayerTimesByCity(city, country);
    date.innerText = formattedDate;
    resultCity.innerText = city;
    let currentCountry = country;
    switch (currentCountry) {
        case "SA":
            currentCountry = "Saudi Arabia";
            break;
        case "TR":
            currentCountry = "Turkey";
            break;
        case "MA":
            currentCountry = "Morocco";
            break;
        case "DZ":
            currentCountry = "Algeria";
            break;
        case "BH":
            currentCountry = "Bahrain";
            break;
        case "KM":
            currentCountry = "Comoros";
            break;
        case "DJ":
            currentCountry = "Djibouti";
            break;
        case "EG":
            currentCountry = "Egypt";
            break;
        case "IQ":
            currentCountry = "Iraq";
            break;
        case "JO":
            currentCountry = "Jordan";
            break;
        case "KW":
            currentCountry = "Kuwait";
            break;
        case "LB":
            currentCountry = "Lebanon";
            break;
        case "LY":
            currentCountry = "Libya";
            break;
        case "MR":
            currentCountry = "Mauritania";
            break;
        case "OM":
            currentCountry = "Oman";
            break;
        case "PS":
            currentCountry = "Palestine";
            break;
        case "SO":
            currentCountry = "Somalia";
            break;
        case "SD":
            currentCountry = "Sudan";
            break;
        case "SY":
            currentCountry = "Syria";
            break;
        case "TN":
            currentCountry = "Tunisia";
            break;
        case "AE":
            currentCountry = "United Arab Emirates";
            break;
        case "YE":
            currentCountry = "Yemen";
            break;
        default:
            currentCountry = "Unknown Country";
            break;
    }
    
    resultCountry.innerText = currentCountry;

})


// Data for countries and cities
const countryCityMap = {
    // USA: ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"],
    // Canada: ["Toronto", "Vancouver", "Montreal", "Calgary", "Ottawa"],
    // Australia: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide"],
    SA: [
        "Riyadh", "Jeddah", "Mecca", "Medina", "Dammam", "Khobar", "Tabuk", "Buraidah", "Khamis Mushait", "Abha",
        "Hofuf", "Hail", "Najran", "Jubail", "Al-Kharj", "Qatif", "Yanbu", "Al Bahah", "Sakakah", "Arar", "Jazan",
        "Al Qunfudhah", "Taif", "Al Ula", "Rabigh", "Ras Tanura", "Dhahran", "Al Khafji", "Al Lith", "Al Wajh", "Duba",
        "Al Mubarraz", "Baljurashi", "Turaif", "Al Bukayriyah", "Al Rass", "Wadi Al Dawasir", "Al Zulfi", "Unaizah", "Al Bada",
        "Sharurah", "Al Namas", "Thuwal", "Afif", "Al Jouf", "Al Duwadimi", "Al Majma'ah", "Al Qurayyat", "Al Shafa", "Al Artaweeiyah"
    ],
    TR: [
        "Istanbul", "Ankara", "Izmir", "Bursa", "Antalya", "Adana", "Konya", "Gaziantep", "Mersin", "Kayseri", "Eskisehir",
        "Samsun", "Diyarbakir", "Trabzon", "Manisa", "Denizli", "Kocaeli", "Balikesir", "Sakarya", "Kahramanmaras", "Hatay",
        "Elazig", "Sanliurfa", "Aydin", "Tekirdag", "Bolu", "Rize", "Çorum", "Mardin", "Afyonkarahisar", "Çanakkale", "Kastamonu",
        "Artvin", "Zonguldak", "Nevsehir", "Muğla", "Sivas", "Niğde", "Ordu", "Aksaray", "Bingöl", "Kırıkkale", "Osmaniye",
        "Tunceli", "Kilis", "Yozgat", "Giresun", "Tokat", "Burdur", "Uşak", "Kütahya", "Van", "Batman", "Şırnak", "Bitlis",
        "Ağrı", "Karaman", "Muş", "Isparta", "Kırşehir", "Hakkari", "Bingöl", "Çorum", "Yalova"
    ],
    QA: [
        "Doha", "Al Rayyan", "Al Wakrah", "Al Khor", "Umm Salal", "Al Daayen", "Al Shamal", "Al Zubara", "Mesaieed",
        "Al Khobar", "Al-Jasra", "Al-Sailiya", "Ras Laffan", "Abu Samra", "Fuwairit", "Al Mashaf", "Al Wukair", "Ruwais"
    ],
    DZ: [
        "Algiers", "Oran", "Constantine", "Annaba", "Blida", "Batna", "Sétif", "Djelfa", "Biskra", "Tlemcen",
        "Tiaret", "Béjaïa", "Skikda", "Tizi Ouzou", "Mostaganem", "Ouargla", "Mascara", "Guelma", "Sidi Bel Abbès", "Chlef"
    ],
    BH: [
        "Manama", "Riffa", "Muharraq", "Hamad Town", "A'ali", "Isa Town", "Sitra", "Budaiya", "Jidhafs", "Zallaq"
    ],
    KM: [
        "Moroni", "Mutsamudu", "Fomboni", "Domoni", "Ouani", "Tsembehou", "Mbéni", "Nkourani", "Iconi", "Sima"
    ],
    DJ: [
        "Djibouti", "Ali Sabieh", "Tadjoura", "Dikhil", "Obock", "Arta", "Holhol", "Loyada"
    ],
    EG: [
        "Cairo", "Alexandria", "Giza", "Shubra El Kheima", "Port Said", "Suez", "Luxor", "Aswan", "Tanta", "Ismailia",
        "Faiyum", "Zagazig", "Asyut", "Mansoura", "Damietta", "Hurghada", "Sharm El-Sheikh", "Minya", "Beni Suef", "Qena"
    ],
    IQ: [
        "Baghdad", "Basra", "Mosul", "Erbil", "Sulaymaniyah", "Kirkuk", "Najaf", "Karbala", "Diwaniyah", "Nasiriyah",
        "Amara", "Ramadi", "Fallujah", "Tikrit", "Samawah", "Dohuk", "Baqubah", "Hilla", "Kut", "Samarra"
    ],
    JO: [
        "Amman", "Zarqa", "Irbid", "Russeifa", "Aqaba", "Mafraq", "Salt", "Madaba", "Jerash", "Tafilah"
    ],
    KW: [
        "Kuwait City", "Salmiya", "Hawalli", "Farwaniya", "Ahmadi", "Jahra", "Mubarak Al-Kabeer", "Sabah Al-Salem", "Al-Fintas", "Mangaf"
    ],
    LB: [
        "Beirut", "Tripoli", "Sidon", "Tyre", "Zahle", "Jounieh", "Baabda", "Aley", "Batroun", "Byblos"
    ],
    LY: [
        "Tripoli", "Benghazi", "Misrata", "Bayda", "Zliten", "Zawiya", "Tobruk", "Derna", "Khoms", "Ajdabiya"
    ],
    MR: [
        "Nouakchott", "Nouadhibou", "Kaédi", "Zouérat", "Rosso", "Atar", "Kiffa", "Néma", "Tidjikja", "Boutilimit"
    ],
    MA: [
        "Casablanca", "Rabat", "Fes", "Marrakesh", "Tangier", "Agadir", "Meknes", "Oujda", "Kenitra", "Tetouan"
    ],
    OM: [
        "Muscat", "Salalah", "Sohar", "Nizwa", "Sur", "Barka", "Ibri", "Rustaq", "Ibra", "Khasab"
    ],
    PS: [
        "Gaza", "Ramallah", "Hebron", "Nablus", "Bethlehem", "Jericho", "Jenin", "Rafah", "Tulkarm", "Qalqilya"
    ],
    SO: [
        "Mogadishu", "Hargeisa", "Bosaso", "Kismayo", "Baidoa", "Beledweyne", "Berbera", "Galkayo", "Garowe", "Jowhar"
    ],
    SD: [
        "Khartoum", "Omdurman", "Port Sudan", "Nyala", "El-Obeid", "Kassala", "Al-Gadarif", "Kosti", "Wad Madani", "Atbara"
    ],
    SY: [
        "Damascus", "Aleppo", "Homs", "Hama", "Latakia", "Tartus", "Deir ez-Zor", "Raqqa", "Hasakah", "Daraa"
    ],
    TN: [
        "Tunis", "Sfax", "Sousse", "Ettadhamen", "Kairouan", "Gabes", "Bizerte", "Ariana", "Monastir", "Medenine"
    ],
    AE: [
        "Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Fujairah", "Ras Al Khaimah", "Umm Al Quwain", "Al Ain", "Khor Fakkan", "Kalba"
    ],
    YE: [
        "Sana'a", "Aden", "Taiz", "Hodeidah", "Ibb", "Dhamar", "Al-Mukalla", "Zinjibar", "Amran", "Sayun"
    ]
};

// Function to update cities based on selected country
function updateCities() {

    // Clear previous options
    cityDropdown.innerHTML = '<option value="">--Select a City--</option>';

    // Get selected country
    const selectedCountry = countryDropdown.value;

    // Populate city dropdown if a country is selected
    if (selectedCountry && countryCityMap[selectedCountry]) {
        countryCityMap[selectedCountry].forEach(city => {
            const option = document.createElement("option");
            option.value = city;
            option.textContent = city;
            cityDropdown.appendChild(option);
        });
    }
}


function getPrayerTimesByCity(city, country) {
    // const axios = require('axios');
    let url = `https://api.aladhan.com/v1/timingsByCity?date=18-12-2024&city=${city}&country=${country}&method=4`
    axios.get(url)
    .then((response) => {
        // handle success
        const prayerTimes = response.data.data.timings
        console.log(prayerTimes);
        document.getElementById('fajr-time').innerText = prayerTimes["Fajr"];
        document.getElementById('sunrise-time').innerText = prayerTimes["Sunrise"];
        document.getElementById('dhuhr-time').innerText = prayerTimes["Dhuhr"];
        document.getElementById('asr-time').innerText = prayerTimes["Asr"];
        document.getElementById('maghrib-time').innerText = prayerTimes["Maghrib"];
        document.getElementById('isha-time').innerText = prayerTimes["Isha"];

        const hijriDate = response.data.data.date.hijri;
        let hijriDateFormatted = `${hijriDate.weekday.ar} ${hijriDate.month.ar} , ${hijriDate.year}`;;
        console.log(hijriDateFormatted);
        document.getElementById('hijri-date').innerText = hijriDateFormatted;
    })

}


