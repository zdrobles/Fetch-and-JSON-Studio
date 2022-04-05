window.addEventListener("load", () => {
    fetch('https://handlers.education.launchcode.org/static/astronauts.json').then(response => {
        response.json().then(json => {
            const container = document.getElementById('container');
            const header = document.getElementById('header');

            json.sort((b, a) => (a.hoursInSpace > b.hoursInSpace) ? 1 : ((b.hoursInSpace > a.hoursInSpace) ? -1 : 0))

            header.innerHTML += `: ${json.length}`;

            for (const astro of json) {
                container.innerHTML += `
            <div class="astronaut">
                <div class="bio">
                    <h3>${astro.firstName, astro.lastName}</h3>
                    <ul>
                        <li>Hours in space: ${astro.hoursInSpace}</li>
                        <li class="${astro.active}">Active: ${astro.active}</li>
                        <li>Skills: ${astro.skills.join(', ')}</li>
                    </ul>
                </div>
                <img class="avatar" src="${astro.picture}">                 
            </div>
            `;
            }//end for of
        });//end of response.json.then
    });//end of fetch.then
});//end window Load