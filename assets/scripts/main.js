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
        <div class="card card-body mb-1">
        <h3 class="text-warning">${match.name} (${match.town})</h3>
        <h3 class="text-warning">${match.address}</h3>
        <p><a href="${match.website}>${match.website}</a></p>
    `
    )
    .join('');
    matchList.innerHTML = html;
}
}
    
search.addEventListener('input' , () => searchGym(search.value));