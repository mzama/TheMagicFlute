function makeTemplate(_title, _description, _type) {
    let _template = `
    <div class="drink-listing ${_type}">
        <div class="drink-listing-line"></div>
        <div class="drink-listing-content">
            <h3 class="drink-title">${_title}</h3>
            <div class="drink-description">
                ${_description}
            </div>
        </div>
    </div>    
    `;
    return _template;
}

document.addEventListener("DOMContentLoaded", function() {   
   document.querySelector("#gin-list").innerHTML += makeTemplate("Negroni", "Gin, Campari, Soda", "gin"); 
});