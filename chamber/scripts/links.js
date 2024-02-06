const baseURL = "https://kbearmann.github.io/wdd230/";
const linksURL = "https://kbearmann.github.io/wdd230/data/links.json";

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        displayLinks(data.weeks);
    } catch (error) {
        console.log('Error fetching links data:', error);
    }
}

function displayLinks(weeks) {
    const linksContainer = document.getElementById('activity-links');
    weeks.forEach(week => {
        const weekElement = document.createElement('div');
        weekElement.textContent = week.week;

        const linksList = document.createElement('ul');
        week.links.forEach(link => {
            const listItem = document.createElement('li');
            const anchor = document.createElement('a');
            anchor.href = baseURL + link.url;
            anchor.textContent = link.title;
            listItem.appendChild(anchor);
            linksList.appendChild(listItem);
        });

        weekElement.appendChild(linksList);
        linksContainer.appendChild(weekElement);
    });
}

getLinks();
