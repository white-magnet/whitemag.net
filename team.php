<?php $cur = 'team'; ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <title>Team | White Magnet Software Private Limited</title>
    <?php include('head.php') ?>
    <link rel="stylesheet" type="text/css" href="./css/fancybox.css" media="screen, projection" />
    <script type="text/javascript">
      $script(['js/jquery-fancybox.min.js'], function() { jQuery(document).ready(function(){ jQuery('.profile-popup').fancybox({ 'titlePosition' : 'inside', 'transitionIn' : 'elastic', 'transitionOut' : 'none' }); }); });
    </script>
  </head>
  <body>
    <div id="wrapper">
      <div id="team-bg" class="round">
        <?php include('left.php') ?>
        <div class="section-mid">
          <h2 class="neosans">Team</h2>
          <div id="team-content">
            <div class="member">
              <a class="profile-popup" href="#kulbir" title="Kulbir Saini"><img src="images/team/kulbir.png" class="avatar" alt="" /></a>
              <p class="member-name">Kulbir Saini</p>
              <div class="invisible">
                <p class="member-profile" id="kulbir">White Magnet Software Pvt Ltd.</p>
              </div>
            </div><!--member-->

            <div class="member">
              <a class="profile-popup" href="#sambhav" title="Sambhav Jain"><img src="images/team/sambhav.png" class="avatar" alt="" /></a>
              <p class="member-name">Sambhav Jain</p>
              <div class="invisible">
                <p class="member-profile" id="sambhav">Sambhav is specialized in developing large scale software solutions. His astounding programming skill and firm grip on acclaimed platforms has earned him leadership in variety of projects on software development, integration and maintenance. In past, he has worked on developing expert systems for the US Department of Labor. He has a passionate interest in developing software solutions involving artificial intelligence, data mining and machine learning. He has given technical talks on developing intelligent software and has also lectured courses on topics in Artificial Intelligence.</p>
              </div>
            </div><!--member-->

            <div class="member">
              <a class="profile-popup" href="#mahaveer" title="Mahaveer Singh Deora"><img src="images/team/mahaveer.png" class="avatar" alt="" /></a>
              <p class="member-name">Mahaveer Singh Deora</p>
              <div class="invisible">
                <p class="member-profile" id="mahaveer">Veer holds a MS degree in Computer Science. His area of expertise include advance algorithms, software optimization and performance enhancement. His research interest include financial algorithms which are vividly used in automated trading and trading strategies software. His work has been recognized and published at reputed international conferences. He is widely applauded for his ability of breaking down and devising solution for open ended industrial problems. He has been designing and delivering quality software for more than three years now.</p>
              </div>
            </div><!--member-->
          </div><!--team-content-->
        </div><!--section-mid-->
        <?php include('right.php') ?>
      </div><!--product-bg-->
    </div><!--wrapper-->
  </body>
</html>
