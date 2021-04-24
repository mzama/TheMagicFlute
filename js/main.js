function makeTemplate(_title, _description, _type) {
    let _template = `
    <div class="drink-listing ${type}>
        <h3 class="drink-title">${_title}</h3>
        <div class="drink-description">
            ${_description}
        </div>
    </div>    
    `;
    return _template;
}

document.addEventListener("DOMContentLoaded", function() {   
   console.log("Is this thing on?") 
});