<!DOCTYPE html>
<html>
  <head>
    <title>Project Plouf</title>
    <script src="https://code.jquery.com/jquery-3.1.1.js" integrity="sha256-16cdPddA6VdVInumRGo6IbivbERE8p7CQR3HzTBuELA=" crossorigin="anonymous"></script>
    <script src="./assets/libs/Phaser.js"></script>

    <!--the actual game-->
    <?php
      $files = scandir("./js/states/");
      foreach($files as $key => $value)
        if(substr($value, 0, 1) != ".")
          echo "<script src='js/states/$value'></script>";
    ?>

    <script src="js/Game.js"></script>
  </head>
  <body>
    <div class="gameCanvas"></div>
  </body>
</html>
