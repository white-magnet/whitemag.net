<?php $cur = 'team'; ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Team | White Magnet Software Private Limited</title>
    <meta name="description" content="White Magnet Software Private Limited is a privately held company operating from Hyderabad, India. We provide bandwidth/network optimization services to Internet Service Providers, Companies and Universities/Schools around the world." />
    <meta name="keywords" content="White Magnet, White Magnet Software, Videocache, Cache Videos, Proxy Server, Video Acceleration, Video Proxy, Squid Server, Squid Consultancy, Squid Support, Squid" />
    <link rel="stylesheet" href="./css/style.css" type="text/css" media="screen, projection" />
    <link rel="stylesheet" type="text/css" href="./css/lightbox.css" media="screen, projection" />
    <!--[if IE 6]><link rel="stylesheet" type="text/css" href="./css/lightbox.ie6.css" /><![endif]-->
    <script type="text/javascript" src='js/script.min.js'></script>
    <script type="text/javascript">
      $script(['js/cufon-yui-neosans.js'], function() { Cufon.replace('h1'); Cufon.replace('h2'); Cufon.replace('#menu a', {hover:true} ); });
    </script>
    <script type="text/javascript">
      $script(['js/jquery-lightbox.min.js'], function() { jQuery(document).ready(function(){ jQuery('.lightbox').lightbox(); }); });
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
              <a href="images/team/team.png" class="lightbox" title="This is a sample text"><img src="images/team/team.png" class="avatar" alt="" /></a>
              <p class="member-name">Kulbir Saini</p>
            </div>
            <div class="clear"></div>
          </div>
        </div><!--section-mid-->
        <?php include('right.php') ?>
      </div><!--product-bg-->
    </div><!--wrapper-->
  </body>
</html>
