function putfields() {
    var eml = 'hso'; eml += 'lta'; eml += 'nim'; eml += '@gm'; eml += 'ail'; eml += '.c'; eml += 'om'
	var aeml= ' <a hr'; aeml += 'ef="m'; aeml += 'ail'; aeml += 'to:'; aeml += eml; aeml += '">'; aeml += eml; aeml += '</a> '
    
	document.getElementById("topbar").innerHTML = '\
<div class="sidesection">\
	<h1><a href="index.html">\
		درباره سازه ها ... \
	</a></h2>\
	<br>\
	<div class="sideinfo">\
		<br>\
		<h2>\
			نوشته ها\
		</h2>\
		<p><a href="isolation.html">\
			جداسازی پایه\
		</a></p>\
		<p><a href="outrigger.html">\
			سیستم برون بند\
		</a></p>\
		<p><a href="brbf.html">\
			مهاربندهای کمانش تاب\
		</a></p>\
		<p><a href="ebf.html">\
			مهاربندهای واگرا (برون محور)\
		</a></p>\
		<p><a href="structuralsystems.html">\
			روش های نوین طراحی لرزه ای\
		</a></p>\
		<p><a href="steelvsconcrete.html">\
			سازه فولادی یا بتنی؟\
		</a></p>\
		<p><a href="about.html">\
			درباره این وب سایت\
		</a></p><br>\
		<p>\
نگارنده: حمید سلطانی محمدی \
		<br>\
آدرس ایمیل:\
 ' + aeml + ' \
		</p>\
	</div>\
</div>\
\
';

}
