function displayCompanies(data) {
    const activeBtn = document.querySelector(".active");
    const companiesElement = document.querySelector("#companies"); 
    companiesElement.innerHTML = ""; 
    if (activeBtn.id === "gridBtn") {
        companiesElement.classList.remove("list");
        companiesElement.classList.add("grid");
        data.forEach((company, index) => { 
            const companyCard = document.createElement("div");
            companyCard.classList.add("company-card");
            companyCard.innerHTML = `
                <div class="company-logo">
                    <img src="images/member-${index + 1}.webp" alt="${company.name}">
                </div>
                <div class="company-info">
                    <h3>${company.name}</h3>
                    <p>${company.address}</p>
                    <a href="https://${company.website}">${company.website}</a>
                    <p>${company.phone}</p>
                    <p>${company.membership}</p>
                </div>
            `;
            companiesElement.appendChild(companyCard);
        });
    } else {
        companiesElement.classList.add("list");
        companiesElement.classList.remove("grid");
        data.forEach((company) => { 
            const companyInfo = document.createElement("div");
            companyInfo.classList.add("company-info");
            companyInfo.innerHTML = `
                <h3>${company.name}</h3>
                <p>${company.address}</p>
                <a href="https://${company.website}">${company.website}</a>
                <p>${company.phone}</p>
                <p>${company.membership}</p>
            `;
            companiesElement.appendChild(companyInfo);
        });
    }
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
