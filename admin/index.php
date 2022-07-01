<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Login | Password</title>
    <link href="./../assets/themes/sbadmin2/css/bootstrap.min.css" rel="stylesheet">
    <style>
        @import url("https://fonts.googleapis.com/css?family=Roboto");
        @import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css");
        body {
            background-color: #1a8fb4;
            font-family: 'Roboto', sans-serif;
            font-size: 14px;
        }
        .owl {
            margin: auto;
            width: 211px;
            height: 108px;
            /* background-image: url("https://dash.readme.io/img/owl-login.png"); */
            background-image: url("./../assets/images/admin/owl-login.png");
            position: relative;
        }
        .owl .hand {
            width: 34px;
            height: 34px;
            border-radius: 40px;
            background-color: #472d20;
            transform: scaleY(0.6);
            position: absolute;
            left: 14px;
            bottom: -8px;
            transition: 0.3s ease-out;
        }
        .owl .hand.password {
            transform: translateX(42px) translateY(-15px) scale(0.7);
        }
        .owl .hand.hand-r {
            left: 170px;
        }
        .owl .hand.hand-r.password {
            transform: translateX(-42px) translateY(-15px) scale(0.7);
        }
        .owl .arms {
            position: absolute;
            top: 58px;
            height: 41px;
            width: 100%;
            overflow: hidden;
        }
        .owl .arms .arm {
            width: 40px;
            height: 65px;
            /*background-image: url("https://dash.readme.io/img/owl-login-arm.png");*/
            background-image: url("./../assets/images/admin/owl-login-arm.png");
            position: absolute;
            left: 20px;
            top: 40px;
            transition: 0.3s ease-out;
        }
        .owl .arms .arm.password {
            transform: translateX(40px) translateY(-40px);
        }
        .owl .arms .arm.arm-r {
            left: 158px;
            transform: scaleX(-1);
        }
        .owl .arms .arm.arm-r.password {
            transform: translateX(-40px) translateY(-40px) scaleX(-1);
        }
        .form {
            margin: auto;
            margin-top: -9px;
            padding: 30px;
            background-color: #fff;
            width: 250px;
        }
        .form .control {
            margin-bottom: 10px;
            position: relative;
        }
        .form .control label {
            position: absolute;
            font-size: 16px;
            top: 11px;
            left: 9px;
            color: rgba(0,0,0,0.3);
        }
        .form .control input {
            padding: 9px 6px 9px 30px;
            border-radius: 4px;
            border: 1px solid #ccc;
            font-size: 14px;
            width:100%;
        }
        .btn-info {
            width:100%;
            text-align:center;
        }
        .imagen{
            text-align:center;
            margin:0px auto;
            width:100px;
        }
        p{
            text-align:center;
            color:#ffffff;
            dispay:block;
        }
        p span{
            color:#0a0d0e;
        }
    </style>
</head>
<body>
<div class="container-fluid">
    <div class="row">
        <div class="col-lg-12 col-sm-12 col-md-12 col-xs-12">
            <?php //echo form_open('admin/Admin/login', 'class="form-signin" role="form"') ; ?>
            <div class="owl">
                <div class="hand"></div>
                <div class="hand hand-r"></div>
                <div class="arms">
                    <div class="arm"></div>
                    <div class="arm arm-r"></div>
                </div>
            </div>
            <div class="form">
                <div class="control">
                    <?php //echo form_label('', 'username',array('class' => 'fa fa-envelope'));?>
                    <!--<label class="form-control" class="fa fa-envelope" for="Usuario">Usuario</label>-->
                    <div class="controls">
                        <?php //echo form_input($username);?>
                        <input type="email" name="usr_email" class="form-control" style="width:90%;" placeholder="Usuario" required autofocus>
                        <?php //echo form_error('username'); ?>
                    </div>
                </div>

                <div class="control">
                    <?php // echo form_label('', 'password',array('class' => 'fa fa-asterisk')); ?>
                    <!-- <label for="">Password</label> -->
                    <div class="controls">
                        <?php //echo form_input($password);?>
                        <input type="password" name="usr_password" class="form-control" style="width:90%;" placeholder="Password" required>
                        <?php //echo form_error('password'); ?>
                    </div>
                </div>

                <div class="control">
                    <!-- Contextual button for informational alert messages -->
                    <button type="submit" class="btn btn-info">LOGIN</button>
                </div>

            </div>
            <br>
            <!--
            <img class="imagen" width="5%" src="http://gestor.emexsdigital.com/assets/img/logo-emexs-blanco.svg">
            -->
            </form>
        </div>
    </div>
</div>

<!-- Core Scripts - Include with every page -->
<script src="./../assets/themes/sbadmin2/js/jquery-1.10.2.js"></script>
<script src="./../assets/themes/sbadmin2/js/bootstrap.min.js"></script>
<script src="./../assets/themes/sbadmin2/js/plugins/metisMenu/jquery.metisMenu.js"></script>
<!-- SB Admin Scripts - Include with every page -->
<script src="./../assets/themes/sbadmin2/js/sb-admin.js"></script>

<script>
    $(document).ready(function(){
        var windowHeight = $(".container-fluid").height() / 2;
        var screenHeight = $(window).height() / 2;
        var screenWidth  =  $(window).width() / 2;
        var totalSpace   = screenHeight - windowHeight;
        var imagenWidth  = $(".imagen").width() / 2 + 15;
        var spaceImage   = screenWidth - imagenWidth;

        $( window ).resize(function() {
            windowHeight = $(".container-fluid").height() / 2;
            screenHeight = $(window).height() / 2;
            screenWidth  =  $(window).width() / 2;
            totalSpace   = screenHeight - windowHeight;
            imagenWidth  = $(".imagen").width() / 2 + 15;
            spaceImage   = screenWidth - imagenWidth;
            posicionar();
        });
        function posicionar(){
            $(".container-fluid").css("margin-top",totalSpace+"px");
            $(".imagen").css("margin-left",spaceImage+"px");
        }

        posicionar();

        $('input[type="password"]').on('focus', function() {
            $('*').addClass('password');
        });

        $('input[type="password"]').on('focusout', function() {
            $('*').removeClass('password');
        });
    });
</script>

</body>
</html>
