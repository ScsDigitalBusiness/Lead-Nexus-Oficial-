const {getAllEmails} = require("../../src/models/LeadModel"); 
document.getElementById("today-count").innerHTML = await getAllEmails;
 document.getElementById("count-month").innerHTML = monthCount;

