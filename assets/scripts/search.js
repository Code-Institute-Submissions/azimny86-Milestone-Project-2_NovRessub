function fetchGyms(event) {
    var search = $('#search').val();
    if(!search) {
        $('#search').html(`<h2>Please enter a Gym</h2>`);
        return;
    }
    $('#search').html(
        `<div id="loader">
            <img src="assets/images/Bean-Eater.gif" alt="loading..." />
        </div>`
    );
}