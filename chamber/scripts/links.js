function displayLinks(weeksData) {
    const linksContainer = document.getElementById('activity-links');
    
    if (!weeksData) {
        console.error('Weeks data is undefined.');
        return;
    }

    // Iterate over each week
    Object.entries(weeksData).forEach(([weekName, weekLinks]) => {
        const weekElement = document.createElement('div');
        weekElement.textContent = weekName;

        const linksList = document.createElement('ul');
        
        // Iterate over each link in the week
        weekLinks.forEach(link => {
            const listItem = document.createElement('li');
            const anchor = document.createElement('a');
            anchor.href = baseURL + link.link;
            anchor.textContent = link.name;
            listItem.appendChild(anchor);
            linksList.appendChild(listItem);
        });

        weekElement.appendChild(linksList);
        linksContainer.appendChild(weekElement);
    });
}
