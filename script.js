function onFormsubmit() {
    var formdata = readFromdata();

    insertNewRecord(formdata);
    resetForm();
}

function readFromdata() {
    var formdata = {};
    formdata["id"] = document.getElementById("id").value;
    formdata["name"] = document.getElementById("name").value;
    formdata["email"] = document.getElementById("email").value;
    formdata["address"] = document.getElementById("address").value;
    return formdata;
}

function insertNewRecord(data) {

    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];

    var newRow = table.insertRow(table.legnth);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.id;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.name;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.email;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.address;
    cell1 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;





}

function resetForm() {

    document.getElementById("id").value = "";
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("address").value = "";
    selectedRow = null;


}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("id").value = selectedRow.cells[0].innerHTML;
    document.getElementById("name").value = selectedRow.cells[1].innerHTML;
    document.getElementById("email").value = selectedRow.cells[2].innerHTML;
    document.getElementById("address").value = selectedRow.cells[3].innerHTML;

}