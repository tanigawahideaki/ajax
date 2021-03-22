<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>チャット</title>
    </head>
    <body>
        <h1>チャット作れるかな？</h1>
        <div id="chat"></div>

        <form method="POST">
            <input type="text" name="name" id="name" value="" placeholder="名前">
            <input type="text" name="message" id="message" value="" placeholder="メッセージ">
            <input type="button" id="click" value="送信">
        </form>

        <script src="js/jquery-3.5.1.min.js"></script>
        <script src="js/chat.js"></script>
    </body>
</html>
