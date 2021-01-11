<?php

include "dbFunctions.php";

// SQL query returns multiple database records.
if (isset($_GET['id'])) {
    $id = $_GET['id'];

    $response = array();
    $query = "SELECT * FROM statistics order by id=$id";
    $result = mysqli_query($link, $query);

    $response = mysqli_fetch_assoc($result);

    mysqli_close($link);

    echo json_encode($response);
}
?>