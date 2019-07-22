<?php $cur = 'team'; ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <title>Team | White Magnet Software Private Limited</title>
    <?php include('head.php') ?>
    <link rel="stylesheet" type="text/css" href="./css/fancybox.css" media="screen, projection" />
    <script src="./js/jquery-fancybox.min.js" type="text/javascript"></script>
    <script type="text/javascript">
      jQuery(document).ready(function(){ jQuery('.profile-popup').fancybox({ 'titlePosition' : 'inside', 'transitionIn' : 'elastic', 'transitionOut' : 'none' }); });
    </script>
  </head>
  <body>
    <div id="wrapper">
      <div id="team-bg" class="round">
        <?php include('left.php') ?>
        <div class="section-mid">
          <h2 class="neosans">Team</h2>
          <div id="team-content">
            <div class="member first">
              <a class="profile-popup" href="#kulbir" title="Kulbir Saini"><img src="./images/team/kulbir.png" class="avatar" alt="" /></a>
              <p class="member-name">Kulbir Saini</p>
              <div class="invisible">
                <p class="member-profile" id="kulbir"><a href="http://saini.co.in/" target="_blank">Kulbir Saini</a>, White Magnet founder, is an entrepreneur based in Hyderabad, India. He dropped out of masters program at <a href="http://iiit.ac.in/" rel="nofollow" target="_blank">IIIT, Hyderabad</a> where he had completed his bachelor's degree in Computer Science earlier. He acquired vast experience in managing IT infrastructure as a Student System Administrator during his stay at university. During his graduation, he conceptualized <a href="http://cachevideos.com/" target="_blank">Videocache</a> and moulded it into a usable product which is now a popular choice among ISPs and universities worldwide to cache videos from various video portals. To share his skills, acquired over the years, from working on Videocache, he wrote a book <a href="https://www.packtpub.com/networking-and-servers/squid-proxy-server-31-beginners-guide" rel="nofollow" target="_blank">Squid Proxy Server 3.1: Beginner's Guide</a>. For several years, he worked as an independent freelancer working on various web/server technologies. Before getting started with White Magnet, he worked at <a href="http://crypsis.net/" rel="nofollow" target="_blank">Crypsis Technologies Pvt Ltd</a> (a Ruby on Rails startup) where he worked as a core team member undertaking end to end development of RoR applications.</p>
              </div>
            </div><!--member-->

            <div class="member">
              <a class="profile-popup" href="#sambhav" title="Sambhav Jain"><img src="./images/team/sambhav.png" class="avatar" alt="" /></a>
              <p class="member-name">Sambhav Jain</p>
              <div class="invisible">
                <p class="member-profile" id="sambhav">Sambhav is specialized in developing large scale software solutions. His astounding programming skill and firm grip on acclaimed platforms has earned him leadership in variety of projects on software development, integration and maintenance. In past, he has worked on developing expert systems for the US Department of Labor. He has a passionate interest in developing software solutions involving artificial intelligence, data mining and machine learning. He has given technical talks on developing intelligent software and has also lectured courses on topics in Artificial Intelligence.</p>
              </div>
            </div><!--member-->

            <div class="member last">
              <a class="profile-popup" href="#mahaveer" title="Mahaveer Singh Deora"><img src="./images/team/mahaveer.png" class="avatar" alt="" /></a>
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
    <?php include('footer.php'); ?>
  </body>
</html>
