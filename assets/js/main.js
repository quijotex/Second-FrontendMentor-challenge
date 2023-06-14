//Catch ID in order to print json file in the html
const dynamicResults = document.querySelector("#section2__results")

//Get data.json file
async function getResults(){
    try {
        const response = await fetch('./data.json');
        const infoResults = await response.json();
       printResults(infoResults);
    } catch (error) {
        console.log(error)
    }
}

//Render json file to html
function printResults(infoResults){
    let html = '';
    for(let result of infoResults) {
        html += `
          <div class="div__container">
            <div class="div__category">
                  <img src="${result.icon}" alt="Icon_img">
                  <h3>${result.category}</h3>
              </div>
              <div class="div2__category">
                  <span>${result.score}</span>
                  <span class="div2__span">/ 100</span>
            </div>
          </div>
        `
    }
   dynamicResults.innerHTML = html;
}
getResults();


