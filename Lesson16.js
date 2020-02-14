sendDataUserG.onclick = function GetDataUser() {
    var userData = {
        lastName: document.getElementById("userLastNameG").value,
        name: document.getElementById("userNameG").value,
        age: document.getElementById("userAgeG").value,
        address: document.getElementById("userAddressG").value
    };

    for (var k in userData) {
        userData[k] = userData[k] + ' ValidatedByGET';
        //userData[k]+ = ' ValidatedByGET';
    };

    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/userGet?lastName = ' + userData.lastName + '&name = ' + userData.name + '&age = ' + userData.age + '&address = ' + userData.address);

    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send();
}

sendDataUser.onclick = function postDataUser() {
    var userData = {
        lastName: document.getElementById("userLastName").value,
        name: document.getElementById("userName").value,
        age: document.getElementById("userAge").value,
        address: document.getElementById("userAddress").value
    };

    for (var k in userData) {
        userData[k] = userData[k] + ' ValidatedByPOST';
        //userData[k]+ = ' ValidatedByGET';
    };

    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/userPost');

    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(userData));
}

userAgeG.onblur = function () {
    if (this.value > 100 || this.value < 1) {
        this.value = 'ввести вік від 1 до 100';
        userAgeG.focus();
    } else {
        // this.classList.remove('error');
        userAddressG.focus();
    }
}

userAge.onblur = function () {
    if (this.value > 100 || this.value < 1) {
        this.value = 'ввести вік від 1 до 100';
        userAge.focus();
    } else {
        // this.classList.remove('error');
        userAddress.focus();
    }
}
