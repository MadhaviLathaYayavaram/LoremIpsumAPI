
function temp(){

//var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
 var   targetUrl = 'https://loripsum.net/api/10/short/headers';
fetch(targetUrl, {mode:"no-cors"})
  .then(blob => blob.json())
  .then(data => {
    data = JSON.parse(JSON.stringify(data));
    self.WebGL2RenderingContext(data);
    console.table(data);
    document.querySelector("pre").innerHTML = JSON.stringify(data, null, 2);
    return data;
  })
  .catch(e => {
  
    console.log(e);
    return e;
  });
}

async function displayInfo() {
    let paras = parseInt(document.getElementById('paras').value);
    console.log ("Paras "+paras);
        
   const wordinfo = temp();
       console.log (wordinfo);
      document.getElementById('lorem').innerHTML = "hi" + wordinfo +paras;
 
 } 