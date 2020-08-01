module.exports = { msgTemplate};

function msgTemplate(data) {
    return "<html><body><h1>Hi, Mohit</h1><br/><p>Follwing user is trying to contact you</p><br/><p> Name: "+data.name+"</p> <p>Email: "+data.email+"</p> <p>Phone No: "+data.phone+"</p> <p>Subject: "+data.subject+"</p> <p>Message: "+data.message+"</p></body></html>";
}


