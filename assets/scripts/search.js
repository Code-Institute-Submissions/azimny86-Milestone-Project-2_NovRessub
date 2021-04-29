const search = document.getElementById('search');
const matchList = document.getElementById('match-list')

const searchGym = async searchText => {
    const res = await fetch('../assets/Json/gyms.json');
    const gyms = await res.json();

    //
    let matches = gyms.filter(gym => {
        const regex = new RegExp(`^${searchText}` , 'gi');
        return gym.name.match(regex) || gym.town.match(regex) ;
    });
    if(searchText === 0) {
        matches = [];
        matchList.innerHTML = '';
    }
    outputHtml(matches);
};

const outputHtml = matches => {
    if(matches.length > 0) {
        const html = matches.map(match => `
            <div class="card card-body mb-1">
            <h3 class="text-warning">${match.name} (${match.town})</h3>
            <br>
            <h3 class="text-warning">${match.address}</h3>
            <span><a href="${match.website}>${match.website}</a></span>
        `
        )
        .join('');
        matchList.innerHTML = html;
    }
}

search.addEventListener('input' , () => searchGym(search.value));
