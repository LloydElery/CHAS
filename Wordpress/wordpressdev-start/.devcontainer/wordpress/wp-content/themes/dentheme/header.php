<html>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<title><?php bloginfo('name'); ?><?php wp_title( '|', true, 'left' ); ?></title>
	<link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>">
	<?php wp_head();  ?>	
</head>
<body>
	<div align="center">
		<div id="inner">
			<header>
			<a href="<?php echo home_url( '/' ); ?>" title="<?php echo bloginfo('name'); ?>" rel="home">
				<h1><?php bloginfo( 'name' ); ?></h1>
			</a>
			</header>
	