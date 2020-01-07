var selectedRow = null;
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var charFormat = /^[a-zA-Z]*$/;

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
    }
}

function readFormData() {
    var formData = {};
    formData["ID"] = document.getElementById("ID").value;
    formData["Name"] = document.getElementById("sname").value;
    formData["Email"] = document.getElementById("email").value;
    formData["Class"] = document.getElementById("clas").value;
    formData["Year"] = document.getElementById("year").value;
    formData["City"] = document.getElementById("city").value;
    formData["Country"] = document.getElementById("country").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("studentList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.ID;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Name;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Email;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.Class;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.Year;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.City;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.Country;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = `<button onClick="onEdit(this)">Edit</button>
                       <button onClick="onDelete(this)">Delete</button>`;
}

function resetForm() {
     document.getElementById("ID").value = "";
     document.getElementById("sname").value= "";
     document.getElementById("email").value = "";
     document.getElementById("clas").value = "";
     document.getElementById("year").value ="";
     document.getElementById("city").value ="";
     document.getElementById("country").value ="";
     selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("ID").value = selectedRow.cells[0].innerHTML; ;
     document.getElementById("sname").value= selectedRow.cells[1].innerHTML;;
     document.getElementById("email").value = selectedRow.cells[2].innerHTML;;
     document.getElementById("clas").value = selectedRow.cells[3].innerHTML;;
     document.getElementById("year").value = selectedRow.cells[4].innerHTML;;
     document.getElementById("city").value = selectedRow.cells[5].innerHTML;;
     document.getElementById("country").value = selectedRow.cells[6].innerHTML;;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.ID;
    selectedRow.cells[1].innerHTML = formData.Name;
    selectedRow.cells[2].innerHTML = formData.Email;
    selectedRow.cells[3].innerHTML = formData.Class;
    selectedRow.cells[4].innerHTML = formData.Year;
    selectedRow.cells[5].innerHTML = formData.City;
    selectedRow.cells[6].innerHTML = formData.Country;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("studentList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    
    if ((document.getElementById("ID").value != "") &&(document.getElementById("sname").value != "") &&(document.getElementById("email").value != "") &&(document.getElementById("clas").value != "") &&(document.getElementById("year").value != "") &&(document.getElementById("city").value != "") &&(document.getElementById("country").value != "")){
        
            if (!(document.getElementById("sname").value.match(charFormat))) {
                alert("Invalid, name should contain only alphabets");
                return false;
            }
            if(!(document.getElementById("email").value.match(mailformat)))
            {
                alert("You have entered an invalid email address!");
                return false;
            }
            if (!(document.getElementById("clas").value.match(charFormat))) {
                alert("Invalid, class should contain only alphabets");
                return false;
            }
            if (!(document.getElementById("city").value.match(charFormat))) {
                alert("Invalid, city should contain only alphabets");
                return false;
            }
            if (!(document.getElementById("country").value.match(charFormat))) {
                alert("Invalid, country should contain only alphabets");
                return false;
            }
        return true;
    }
    else {
        alert("Please add data");
        return false;
    }
    
}