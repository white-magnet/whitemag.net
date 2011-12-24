<?php $cur = 'products'; ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Products | White Magnet Software Private Limited</title>
    <meta name="description" content="White Magnet Software Private Limited is a privately held company operating from Hyderabad, India. We provide bandwidth/network optimization services to Internet Service Providers, Companies and Universities/Schools around the world." />
    <meta name="keywords" content="White Magnet, White Magnet Software, Videocache, Cache Videos, Proxy Server, Video Acceleration, Video Proxy, Squid Server, Squid Consultancy, Squid Support, Squid" />
    <link rel="stylesheet" href="./css/style.css" type="text/css" media="screen, projection" />
    <script type="text/javascript" src='js/script.min.js'></script>
    <script type="text/javascript">
      $script(['js/cufon-yui-neosans.js'], function() { Cufon.replace('h1'); Cufon.replace('h2'); Cufon.replace('#menu a', {hover:true} ); });
    </script>
  </head>
  <body>
    <div id="wrapper">
      <div id="product-bg" class="round">
        <?php include('left.php') ?>
        <div class="section-mid">
          <h2>Our Products</h2>
          <a id="videocache" class="right" href="http://cachevideos.com/" target="_blank"></a>
          <p><strong>Videocache</strong> is a <a href="http://www.squid-cache.org/" target="_blank" rel="nofollow" class="link">Squid</a> URL rewriter plugin for bandwidth optimization while browsing famous video sharing websites like Youtube, Metacafe etc. It helps you save bandwidth when a particular video is requested more than once from the same network.</p>
          <p>Squid can't cache the videos served dynamically. Videocache fits into squid to help it cache the videos. The cached videos are stored on your proxy server's local storage. These cached videos can be served to your clients at a faster speed saving your upstream bandwidth.</p>
        </div><!--section-mid-->
        <?php include('right.php') ?>
      </div><!--product-bg-->
    </div><!--wrapper-->
  </body>
</html>
