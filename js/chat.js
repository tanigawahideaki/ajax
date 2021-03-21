$(function(){
    $('#click').click(function(){
        if($('#name').val() != "" && $('#message').val() != ""){
            $.ajax({
                url:"process.php",
                type:"POST",
                dataType:"json",
                data:{id:'HELLO'}
            });
            //console.log($('#name').val());
        }else{
            alert('失敗');
        }
    });  
});
