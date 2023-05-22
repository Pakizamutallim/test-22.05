fetch('https://6469bba8183682d614455b66.mockapi.io/:endpoint', {
    method: "POST", 
    headers: {
      "Content-Type": "application/json",
    },
    body: {
        name: document.querySelector(".name").value,
        image: document.querySelector(".image").value,
        price: document.querySelector(".price").value,
        info: document.querySelector(".info").value,
        status: document.querySelector(".name").value 
    }
  })




// .then(resp => resp.json())
// .then(res => console.log(res))