if (window.XMLHttpRequest) {
	xmlhttp = new XMLHttpRequest();
}
else
{
	xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}

xmlhttp.open ("GET", "phrase_of_surprise.xml", false);
xmlhttp.send();
xmlDoc=xmlhttp.responseXML;

document.write("<table> <tr> <th>RU</th> <th>EN</th></tr>");
var x=xmlDoc.getElementsByTagName ("PHRASE");
for (i=0;i<x.length;i++) {
	document.write("<tr><td>");
	document.write(x[i].getElementsByTagName("RU")[0].childNodes[0].nodeValue);
	document.write("</td><td>");
	document.write(x[i].getElementsByTagName("EN")[0].childNodes[0].nodeValue);
	document.write("</td></tr>");
}

document.write("</table");