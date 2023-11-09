function addNewWEField() {
    
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add('mt-4');
    newNode.setAttribute('rows', 4);
    newNode.setAttribute('placeholder', 'Enter Work Experience');

    let weOb = document.getElementById('we');
    let weAddButtonOb = document.getElementById('#weAddButton');

    weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField() {
    let workNode = document.createElement('textarea');
    workNode.classList.add('form-control');
    workNode.classList.add('aqField');
    workNode.classList.add('mt-4');
    workNode.setAttribute('rows', 2);
    workNode.setAttribute('placeholder', 'Enter Academic qualification');

    let aqOb = document.getElementById('aq');
    let qualificationBtn = document.getElementById('#weAddButton');

    aqOb.insertBefore(workNode, qualificationBtn);
}

// generating CV
function generateCV() {
    
    let nameField = document.getElementById('nameField').value;
    let nameT1 = document.getElementById('nameT1')
    nameT1.innerHTML = nameField;
    // name
    document.getElementById('nameT2').innerHTML = nameField;
    // contact
    document.getElementById('contactT').innerHTML = document.getElementById('contactField').value;
    // address
    document.getElementById('addressT').innerHTML = document.getElementById('addressField').value;
    // facebook
    document.getElementById('fbT').innerHTML = document.getElementById('fbField').value;
    // instagram
    document.getElementById('instaT').innerHTML = document.getElementById('instaField').value;
    // linkedin
    document.getElementById('linkT').innerHTML = document.getElementById('linkedField').value;
    // objective
    document.getElementById('objectiveT').innerHTML = document.getElementById('objectiveField').value;
    // work experience
    let wes = document.getElementsByClassName('weField');
    let str = ' ';
    for(let e of wes) {
        str = str+ `<li>${e.value}</li>`
    }
    document.getElementById('weT').innerHTML = str;
    // academic qualification
    let aqs = document.getElementsByClassName('aqField');
    let str1 = " ";
    for (let e of aqs) {
        str1 += `<li> ${e.value}</li>`;
    }
    document.getElementById('aqT').innerHTML = str1;

    // code for setting image
    // let file = document.getElementById('imgField').files[0];
    // console.log(file);
    // let reader = new FileReader();
    // reader.readAsDataURL(file);
    // console.log(reader.result);
    // // set the image to template
    // reader.onloadend = function ()  {
    //     document.getElementById('imgTemplate').scr = reader.result;
    // }

    // for display
    document.getElementById('cv-form').style.display = 'none';
    document.getElementById('cv-template').style.display = 'block';
}

// print CV
function printCV() {
    window.print();
}