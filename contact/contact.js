let contactArray = ["Rakesha McIntyre", "423-598-0351", "robinson.rakesha@gmail.com"]
contactArray[3] = "A new Item"
contactArray[4] = "rakeshamcintyre.us"

function addContent(array){
  console.log(array)
  $("#contact-array").append("<li>" + array + "</li>");
  }

  contactArray.forEach(addContect)
