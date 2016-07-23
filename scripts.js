function putfields() {
    var eml = 'hso'; eml += 'lta'; eml += 'nim'; eml += '@gm'; eml += 'ail'; eml += '.c'; eml += 'om'
	var aeml= ' <a hr'; aeml += 'ef="m'; aeml += 'ail'; aeml += 'to:'; aeml += eml; aeml += '">'; aeml += eml; aeml += '</a> '
    
	document.getElementById("topbar").innerHTML = '\
		<div class="site-name">\
			<a href="index.html">\
			درباره سازه ها ...\
			</a>\
		</div>\
		<nav role="navigation" class="nav-menu">\
			<a href="index.html" class="nav-link">\
				خانه\
			</a>\
		</nav>\
		<nav role="navigation" class="nav-menu">\
			<a href="about.html" class="nav-link">\
				درباره\
			</a>\
		</nav>\
';
	
	document.getElementById("sidebar").innerHTML = '\
		<h2>\
		<h2>\
			نوشته ها\
		</h2>\
		<p><a href="structuralsystems.html">\
			روش های نوین طراحی لرزه ای\
		</a></p>\
		<p><a href="steelvsconcrete.html">\
			سازه فولادی یا بتنی؟\
		</a>\
		<p><a href="about.html">\
			درباره این وب سایت\
		</a></p>\
';
	
	document.getElementById("mainfooter").innerHTML = '\
		<p>\
این وب سایت توسط حمید سلطانی محمدی تهیه گردیده است.\
<br>\
برای تماس با نگارنده می توانید به آدرس پست الکترونیکی\
' + aeml + '\
مکاتبه فرمایید.\
<br>\
استفاده از مطالب این وب سایت آزاد است.\
 نگارنده تمام توان و دانش خود را در تهیه مطالب این سایت به کار گرفته است ولی تحت هیچ شرایطی در برابر مسائل حاصل از استفاده از مطالب این وب سایت مسئول نیست.\
		</p>\
';
	
	document.getElementById("sidefooter").innerHTML = '\
		<a href="#header" class="footer-link">\
			بازگشت به بالا\
		</a> <br> \
		<a href="index.html">\
			خانه\
		</a> - \
		<a href="about.html">\
			درباره\
		</a>\
';

}
