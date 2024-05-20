async function get_post_office() {
  try {
    let pin_code = document.getElementById("pinCode").value;
    console.log(pin_code);
    console.log(typeof pin_code);

    let promise_data = await fetch(
      `https://api.postalpincode.in/pincode/${pin_code}`
    );

    let json_data = await promise_data.json();
    console.log(json_data);

    console.log(json_data[0].PostOffice.length);

    // console.log(json_data[0].PostOffice.Block);

    document.getElementById("cardContainer").innerHTML = "";

    for (let i = 0; i < json_data[0].PostOffice.length; i++) {
      const cardContainer = document.getElementById("cardContainer");

      const cardHtml = `
      <div class="card text-white bg-dark mb-3" style="max-width: 18rem;margin:10px">
        <div class="card-header">${json_data[0].PostOffice[i].Name}</div>
        <div class="card-body">
            <h5 class="card-title">${json_data[0].PostOffice[i].BranchType}</h5>
            <p class="card-text">Bloack: ${json_data[0].PostOffice[i].Block}<br/>
            
            Circle: ${json_data[0].PostOffice[i].Circle}<br/>
            Country: ${json_data[0].PostOffice[i].Country}<br/>
            Delivery Status: ${json_data[0].PostOffice[i].DeliveryStatus}<br/>
            District: ${json_data[0].PostOffice[i].District}<br/>
            Division: ${json_data[0].PostOffice[i].Division}<br/>
            
            Region: ${json_data[0].PostOffice[i].Region}<br/>
            State: ${json_data[0].PostOffice[i].State}<br/>
            </p>
        </div>
       </div>
        `;
      // Create a temporary div to hold the card HTML
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = cardHtml.trim();
      // Append the first child (the card) to the card container
      cardContainer.appendChild(tempDiv.firstChild);
    }
  } catch {
    console.log("Inside catch block");
  }
}
