<style>
    .dt-body-center{
        text-align: center;
    }
    
    #container {
        margin-top: 50px;
    }


</style>

<html>
    <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha256-4+XzXVhsDmqanXGHaHvgh1gMQKX40OUvDEBTu8JcmNs=" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    </head>

    <body>
        <div class="container" id="container">
            <h3>Employees</h3>
            <br>
            <table id="employee-table" class="table table-striped dt-body-center" style="width:100%">
                <thead>
                    <tr>
                        <th>Emp Number</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                        <th>Birth Date</th>
                        <th>Title</th>
                        <th>Hire Date</th>
                        <th>Salary</th>
                        <th>Edit</th>
                    </tr>
                </thead>
            </table>
        </div>
    </body>
</html>

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha256-4+XzXVhsDmqanXGHaHvgh1gMQKX40OUvDEBTu8JcmNs=" crossorigin="anonymous"></script>
<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/dt/jq-3.3.1/dt-1.10.23/datatables.min.css" />
<script type="text/javascript" src="https://cdn.datatables.net/v/dt/jq-3.3.1/dt-1.10.23/datatables.min.js"></script>

<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.23/css/jquery.dataTables.css">
<script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.10.23/js/jquery.dataTables.js"></script>
<script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>


<script type="text/Javascript">
    $(document).ready(function() {
        const url = 'edit_emp.php';
        $('#employee-table').DataTable({
            "stripeClasses": [],
            "columnDefs": [
                { "width": "13%", "targets": 0 }
            ],
            "processing": true,
            "serverSide": true,
            "ajax": "./emp_query.php",
            "columns": [
                { "data": "emp_no" },
                { "data": "first_name" },
                { "data": "last_name" },
                { "data": "gender" },
                { "data": "birth_date" },
                { "data": "title" },
                { "data": "hire_date" },
                { "data": "salary" },
                {
                    "orderable": false,
                    "data": "emp_no",
                    "createdCell": function (td, cellData, rowData, row, col) {
                        $(td).text('');
                        var button = $(`<a href=${url}/${cellData}><i class='icon fas fa-edit' id='${cellData}'></i>`);
                        $(td).append(button);
                    },
                    "defaultContent": ""
                },
            ],
            "order": [[0, 'asc']]
        });
    });

</script>