$(function(){
    $('#click').click(function(){
        if($('#name').val() != "" && $('#message').val() != ""){
            $.ajax({
                url:"process.php",
                type:"POST",
                dataType:"text",
                data:{
                    name:$('#name').val(),
                    message:$('#message').val()
                },
                success: function(data){
                    alert('success'),
                    console.log(data)
                }
            });
        }else{
            alert('失敗');
        }
    });  
});
