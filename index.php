<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8"/>
		<link rel="stylesheet" href="bootstrap/css/bootstrap.css"/>
		<link href='http://fonts.googleapis.com/css?family=Capriola|Damion' rel='stylesheet' type='text/css'>
		<link rel="stylesheet" href="css/font-awesome.css"/>
		<link rel="stylesheet" href="css/styles.css"/>
		
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
	</head>
	<body>
		<div class="body-wrapper">
			<ul id="nav-bar" class="nav nav-pills-simple">
				<li href="#about" class="tab-link"><a href="#"><i class="icon-info-sign"></i></a></li>
				<li href="#submitted-post" class="tab-link"><a><i class="icon-heart"></i></a></li>
				<li href="#but-form" class="tab-link active">
					<a><i class="icon-pencil"></i></a>
				</li>
				<li class="clear"></li>
			</ul>
		
			<form class="well active" id="but-form">
				<span class="emp">I love you,</span>
				<span id="but" class="emp">but</span>
				<textarea id="reason" placeholder="why is there still a but?"></textarea>
				<a id="post" href="#submitted-post" class="btn btn-primary btn-large tab-link" style="margin-top:40px;margin-left:20px">Post</a>
				<div class="clear"></div>
			</form>
			
			<div id="submitted-post" class="well">
				<a href="#another-post" class="random-post tab-link"><i class="icon-random"></i></a>
				<span class="emp" style="margin-bottom:20px">I love you, but you don't love me.</span> 
				<ul id="post-actions" class="nav nav-pills-simple">
					<li><a><i class="icon-heart"></i> Like (5)</a></li>
					<li><a><i class="icon-share"></i> Share</a></li>
					<li><a><i class="icon-comment"></i> Comment</a></li>
					<li class="clear"></li>
				</ul>
			</div>
			
			<div id="another-post" class="well">
				<a href="#submitted-post" class="random-post tab-link"><i class="icon-random"></i></a>
				<span class="emp" style="margin-bottom:20px">I love you, but you are not there when I needed you the most.</span> 
				<ul id="post-actions" class="nav nav-pills-simple">
					<li><a><i class="icon-heart"></i> Like (12)</a></li>
					<li><a><i class="icon-share"></i> Share</a></li>
					<li><a><i class="icon-comment"></i> Comment</a></li>
					<li class="clear"></li>
				</ul>
			</div>
			
			<div id="about" class="well">
				Sometimes words can be so absolute, black and white. But reality never is. Here, say what you didn't think you could say, and share with others with the same secret.
			</div>
		</div>
	</body>

	<script>
	$(".tab-link").click(function() {
		$id = $(this).attr("href");
		$(".well.active").fadeOut(function() {
			$(this).removeClass("active");
			$($id).addClass("active").fadeIn();
			$("#nav-bar li.active").removeClass("active");
			$("#nav-bar li[href='"+$id+"']").addClass("active");
		});
	});
	</script>
</html>
