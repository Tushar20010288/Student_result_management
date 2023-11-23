var selectedRow = null

// Form Submit Function
function onFormSubmit() {
    // check validity
    if (validate()) {
        // store user data
        var formData = readFormData();
        // check empty row
        if (selectedRow == null)
        {
            // Insert New User Record
            insertNewRecord(formData);
        }
        else
        {
            // Update New User Record
            updateRecord(formData);
        }
        // Reset Input Values
        resetForm();
    }
}
// Get Values From Form
function readFormData() {
    var formData = {};
    // Get Values From  Input
    formData["userName"] = document.getElementById("userName").value;
    formData["rollNo"] = document.getElementById("rollNo").value;
    formData["Course"] = document.getElementById("Course").value;
    formData["tsub"] = document.getElementById("tsub").value;
    formData["Attendance"] = document.getElementById("Attendance").value;
    formData["Marks"] = document.getElementById("Marks").value;
    // return Form Data
    return formData;
}
// Insert New User Record
function insertNewRecord(data) {
    var table = document.getElementById("stdlist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.userName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.rollNo;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Course;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.tsub;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.Attendance;
    cell5 = newRow.insertCell(5);
    cell5.innerHTML = data.Marks;
    cell5 = newRow.insertCell(6);
    cell5.innerHTML = `<a onClick="onEdit(this)">Edit</a>
    <a onClick="onDelete(this)">Delete</a>`;
}
// Reset Function
function resetForm() {
    document.getElementById("userName").value = "";
    document.getElementById("rollNo").value = "";
    document.getElementById("Course").value = "";
    document.getElementById("tsub").value = "";
    document.getElementById("Attendance").value = "";
    document.getElementById("Marks").value = "";
    selectedRow = null;
}
// Edit Function
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("userName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("rollNo").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Course").value = selectedRow.cells[2].innerHTML;
    document.getElementById("tsub").value = selectedRow.cells[3].innerHTML;
    document.getElementById("Attendance").value = selectedRow.cells[4].innerHTML;
    document.getElementById("Marks").value = selectedRow.cells[5].innerHTML;
}
// Update Record
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.userName;
    selectedRow.cells[1].innerHTML = formData.rollNo;
    selectedRow.cells[2].innerHTML = formData.Course;
    selectedRow.cells[3].innerHTML = formData.tsub;
    selectedRow.cells[4].innerHTML = formData.Attendance;
    selectedRow.cells[5].innerHTML = formData.Marks;
}
// Delete Function
function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("stdlist").deleteRow(row.rowIndex);
        resetForm();
    }
}
// Check User validation
function validate() {
    isValid = true;
    // userName validation
    if (document.getElementById("userName").value == "") {
        isValid = false;
        document.getElementById("userNamevalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("userNamevalidationError").classList.contains("hide"))
        {
            document.getElementById("userNamevalidationError").classList.add("hide");
        }
    }
    // Roll No validation
    if (document.getElementById("rollNo").value == "") {
        isValid = false;
        document.getElementById("rollNovalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("rollNovalidationError").classList.contains("hide"))
        {
            document.getElementById("rollNovalidationError").classList.add("hide");
        }
    }
    // Std class validation
    if (document.getElementById("Course").value == "") {
        isValid = false;
        document.getElementById("CoursevalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("CoursevalidationError").classList.contains("hide"))
        {
            document.getElementById("CoursevalidationError").classList.add("hide");
        }
    }
    // Tsub validation
    if (document.getElementById("tsub").value == "") {
        isValid = false;
        document.getElementById("tsubvalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("tsubvalidationError").classList.contains("hide"))
        {
            document.getElementById("tsubvalidationError").classList.add("hide");
        }
    }
    // Attendance validation
    if (document.getElementById("Attendance").value == "") {
        isValid = false;
        document.getElementById("AttendancevalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("AttendancevalidationError").classList.contains("hide"))
        {
            document.getElementById("AttendancevalidationError").classList.add("hide");
        }
    }
    // Marks validation
    if (document.getElementById("Marks").value == "") {
        isValid = false;
        document.getElementById("MarksvalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("MarksvalidationError").classList.contains("hide"))
        {
            document.getElementById("MarksvalidationError").classList.add("hide");
        }
    }
    return isValid;
    var table = document.getElementById("table"),
            maxVal;

        for (var i = 1; i < table.rows.length; i++) {
            // if its the first row get th value
            if (i === 1) {
                maxVal = table.rows[i].cells[2].innerHTML;
            }
            // test the values
            else if (maxVal < table.rows[i].cells[2].innerHTML) {
                maxVal = table.rows[i].cells[2].innerHTML;
            }
        }
        // display the max val
        document.getElementById("val").innerHTML = "Maximum Marks = " + maxval;
        console.log(maxval);

}