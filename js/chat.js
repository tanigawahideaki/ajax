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
                    console.log(data),
                    $('#chat').html(data),
                    clearText()
                }
            });
        }else{
            alert('失敗');
        }
    });

    function clearText(){
        var textform = document.getElementById('name');
        var textform2 = document.getElementById('message');
        textform2.value = "";
        textform.value = "";
    }
});
