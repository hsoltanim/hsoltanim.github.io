function putfields() {
    var eml = 'hso'; eml += 'lta'; eml += 'nim'; eml += '@gm'; eml += 'ail'; eml += '.c'; eml += 'om'
	var aeml= ' <a hr'; aeml += 'ef="m'; aeml += 'ail'; aeml += 'to:'; aeml += eml; aeml += '">'; aeml += eml; aeml += '</a> '
    
	document.getElementById("topbar").innerHTML = '\
<div class="bit-100">\
	<a href="#" class="nav-title">\
		درباره سازه ها ... \
	</a>\
	<a href="index.html" class="nav-link">\
		خانه\
	</a>\
	<a href="about.html" class="nav-link">\
		درباره\
	</a>\
	<br>\
</div>\
';
	
	document.getElementById("sidebar").innerHTML = '\
	<div class="bit-25">\
		<h2>\
		<h2>\
			نوشته ها\
		</h2>\
		<p><a href="brbf.html">\
			مهاربندهای کمانش تاب\
		</a></p><hr>\
		<p><a href="structuralsystems.html">\
			روش های نوین طراحی لرزه ای\
		</a></p><hr>\
		<p><a href="steelvsconcrete.html">\
			سازه فولادی یا بتنی؟\
		</a></p><hr>\
		<p><a href="about.html">\
			درباره این وب سایت\
		</a></p><hr>\
	</div>\
';
	
	document.getElementById("botbar").innerHTML = '\
<footer class="footer">\
	<div class="bit-75">\
		<p>\
این وب سایت توسط حمید سلطانی محمدی تهیه گردیده است.\
<br>\
برای تماس با نگارنده می توانید به آدرس پست الکترونیکی\
 ' + aeml + ' \
مکاتبه فرمایید.\
<br>\
استفاده از مطالب این وب سایت آزاد است.\
		</p>\
	</div>\
	<div class="bit-25">\
		<a href="#header" class="footer-link">\
			بازگشت به بالا\
		</a><br>\
		<a href="index.html">\
			خانه\
		</a> - \
		<a href="about.html">\
			درباره\
		</a>\
	</div>\
</footer>\
';

}
