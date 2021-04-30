const search = document.getElementById('search');
const matchList = document.getElementById('match-list');

//Search gyms.json and filter
const searchGym = async searchText => {
    const res = await fetch('../assets/Json/gyms.json');
    const gyms = await res.json();

    //Get matche to text input
    let matches = gyms.filter( gym => {
        const regex = new RegExp(`^${searchText}` , 'gi');
        return gym.name.match(regex) || gym.town.match(regex);
    });
    if(searchText.length === 0) {
        matches = [];
        matchList.innerHTML = '';
    }
    outputHtml(matches);

};

//Show results in HTML
const outputHtml = matches => {
    if(matches.length > 0) {
        const html = matches.map(match => `
        <div class="list-group searchList">
        <h3 class="text-dark">${match.name} </h3>
        <h3 class="text-dark">${match.address}</h3>
        <a href="${match.website} class="card-link p-3" target="_blank">Gym Website</a>
        <hr>
    `
    )
    .join('');
    matchList.innerHTML = html;
}
}
    
search.addEventListener('input' , () => searchGym(search.value));



// window alert with information about COVID-19 restrictions 
window.alert ("Due to a Level 5 restriction by the Irish government, all of trainings has been suspended");
