function getLorem(p) {
    let ipsum = fetch(`https://loripsum.net/api/${p}/short/headers`,{mode:"no-cors"})
    .then(function(response) {
        
      return response.text();
    }).then(function(data) {
       
        console.log (data);
      return data;
    });
    return ipsum;
  }
    async function displayInfo() {
     let paras = parseInt(document.getElementById('paras').value);
     console.log ("Paras "+paras);
         
    const wordinfo = await getLorem(paras);
        console.log (wordinfo);
       document.getElementById('lorem').innerHTML = "hi" + wordinfo +paras;
  
  } 