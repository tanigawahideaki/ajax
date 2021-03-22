<?php

    if(isset($_POST['name'])){
        echo $_POST['name'];
        echo $_POST['message'];
    }else{
        echo '値が送られてきていません';
    }
?>