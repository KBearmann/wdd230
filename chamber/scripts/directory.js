const CompaniesElement = document.querySelector("#companies");
const memberUrl = "data/members.json";
const gridBtn = document.querySelector("#gridBtn");
const listBtn = document.querySelector("#listBtn");

async function getCompanies() {
    const response = await fetch(memberUrl);
    const data = await response.json();
    displayCompanies(data.members);
}

function displayCompanies(data) {
    const activeBtn = document.querySelector(".active");
    const companiesElement = document.querySelector("#companies"); 
    companiesElement.innerHTML = ""; 
    if (activeBtn.id === "gridBtn") {
        companiesElement.classList.remove("list");
        companiesElement.classList.add("grid");
        const spotlightCompanies = data.filter(company => company.membership === "Silver" || company.membership === "Gold");
        shuffleArray(spotlightCompanies);
        spotlightCompanies.slice(0, 3).forEach((company, index) => { 
            const companyCard = createCompanyCard(company, index);
            companiesElement.appendChild(companyCard);
        });
    } else {
        companiesElement.classList.add("list");
        companiesElement.classList.remove("grid");
        const filteredCompanies = data.filter(company => company.membership === "Silver" || company.membership === "Gold");
        filteredCompanies.forEach((company) => { 
            const companyInfo = createCompanyInfo(company);
            companiesElement.appendChild(companyInfo);
        });
    }
}

function createCompanyCard(company, index) {
    const companyCard = document.createElement("div");
    companyCard.classList.add("company-card");
    companyCard.innerHTML = `
        <div class="company-logo">
            <img src="${company.logo}" alt="${company.name}">
        </div>
        <div class="company-info">
            <h3>${company.name}</h3>
            <p>${company.address}</p>
            <a href="https://${company.website}">${company.website}</a>
            <p>${company.phone}</p>
            <p>${company.membership}</p>
        </div>
    `;
    return companyCard;
}

function createCompanyInfo(company) {
    const companyInfo = document.createElement("div");
    companyInfo.classList.add("company-info");
    companyInfo.innerHTML = `
        <h3>${company.name}</h3>
        <p>${company.address}</p>
        <a href="https://${company.website}">${company.website}</a>
        <p>${company.phone}</p>
        <p>${company.membership}</p>
    `;
    return companyInfo;
}

// shuffle array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Event Listeners
gridBtn.addEventListener("click", () => {
    CompaniesElement.innerHTML = "";
    listBtn.classList.remove("active");
    gridBtn.classList.add("active");
    getCompanies();
});

listBtn.addEventListener("click", () => {
    CompaniesElement.innerHTML = "";
    gridBtn.classList.remove("active");
    listBtn.classList.add("active");
    getCompanies();
});

// Initial call to fetch and display companies
getCompanies();
