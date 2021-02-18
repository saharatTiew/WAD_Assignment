<?php
require_once("config.php");

$uri = $_SERVER['REQUEST_URI'];
$uriSplit = explode('/', $uri);
$emp_no = end($uriSplit);

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "SELECT * FROM employees WHERE emp_no = {$emp_no} LIMIT 1";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    $data = array();

    while ($row = mysqli_fetch_assoc($result)) { 
        $data[] = $row;
    } 
}


if (isset($_POST['cmd']) && $_POST['cmd'] == 'add') {
    // edit employee
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $gender = $_POST['gender'];

    $birth_date = $_POST['birth_date'];
    $hire_date = $_POST['hire_date'];
    
    // $birth_date_temp = $_POST['birth_date'];
    // echo $birth_date_temp;
    // $old_birth_date = explode('/', $birth_date_temp); 
    // $birth_date = $old_birth_date[2].'-'.$old_birth_date[1].'-'.$old_birth_date[0];

    // $hire_date_temp = $_POST['hire_date'];
    // $old_hire_date = explode('/', $hire_date_temp); 
    // $hire_date = $old_hire_date[2].'-'.$old_hire_date[1].'-'.$old_hire_date[0];

    $salary = $_POST['salary'];
    $title = $_POST['title'];
    
    if(!is_numeric($salary)) {
        echo "Error : Salary is not a number<br/>";
    }

    // VALUES ('$emp_no','$birth_date','$first_name','$last_name','$gender','$hire_date')

    $sql_update = "UPDATE employees
                   SET birth_date = '$birth_date', first_name = '$first_name', last_name = '$last_name',
                       gender = '$gender', hire_date = '$hire_date', salary = '$salary', title = '$title'
                   WHERE emp_no = '$emp_no'";

    // $sql_update = "UPDATE employees
    // SET , first_name = '$first_name', last_name = '$last_name',
    //     gender = '$gender', hire_date = '$hire_date', salary = '$salary', title = '$title
    // WHERE emp_no = '$emp_no'";

    if ($conn->query($sql_update) === TRUE) {
        echo "Success<br/>";
    } else {
      echo "Error: " . $sql_update . "<br>" . $conn->error;
    }
    
  }
  
?>
<h3>Edit Employee</h3>
<form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST">
    <input type="hidden" name="cmd" value="add" />
    <table>
        <tr>
            <th>Title</th>
            <td><input type="text" name="title" value="<?php echo $data[0]['title']; ?>"></td>
        </tr>
        <tr>
            <th>First Name</th>
            <td><input type="text" name="first_name" value="<?php echo $data[0]['first_name']; ?>"></td>
        </tr>
        <tr>
            <th>Last Name</th>
            <td><input type="text" name="last_name" value="<?php echo $data[0]['last_name']; ?>"></td>
        </tr>
        <tr>
            <th>Birth Date</th>
            <td><input type="date" name="birth_date" value="<?php echo $data[0]['birth_date']; ?>"></td>
        </tr>
        <tr>
            <th>Hire Date</th>
            <td><input type="date" name="hire_date" value="<?php echo $data[0]['hire_date']; ?>"></td>
        </tr>
        <tr>
            <th>Gender</th>
            <td>
                <input type="radio" name="gender" value="M" <?php echo ($data[0]['gender'] == 'M' ? 'checked' : '');?>>Male<br />
                <input type="radio" name="gender" value="F" <?php echo ($data[0]['gender'] == 'F' ? 'checked' : '');?>>Female
            </td>
        </tr>
        <tr>
            <th>Salary</th>
            <td><input type="text" name="salary" value="<?php echo $data[0]['salary']; ?>"></td>
        </tr>
    </table>
    <input type="submit" value="Create" />
</form>