
// var a = 10;
// var b = 20;
// var c = 30;
// document.write(a);
// alert(c);
// 
// console.log(b)
// document.write("&emsp;welcome to javascript<br>");
// document.write("The a value is ",a);

// var name = 'jdp';
// name = '<br>mahaveer<br>';
// document.write(name);

// var name = 'abc';
// document.write(name.length+"<br>");
// name  += 'maha';
// document.write(name.length+"<br>");

// var name = 'charan, ';
// name += 'nag ,';
// name += ' mahaveer';
// document.write(name+"<br>");

// var f = 10.34;
// document.write(typeof(f)+"<br>");

// var m = 'mahaveer<br>'
// document.write(typeof(m)+"<br>");

// var arr =['mahaveer',56, true];
// document.write(arr);

// task
// var arr = ['charan',57,56,34,108];
// document.write(arr[2]+"<br>"+arr[3] );

// object
var Trainees =[{
	'name':'Mahaveer',
	'rollno': '21255-EC-056',
	'college':'AEC',
	'branch':'ECE',
},
{
	'name':'charan',
	'rollno': '21255-EC-34',
	'college':'AEC',
	'branch':'ECE',
}]

document.write(Trainees[0].name+"<br>");
document.write(Trainees[0].rollno+"<br>");
document.write(Trainees[0].college+"<br>");
document.write(Trainees[0].branch+"<br>");
console.log(Trainees);
console.log(Trainees[0].name);
console.log(Trainees[1].name);

for (var i=0; i<Trainees.length; i++) {
	document.write("<br>" + Trainees[i].name +"<br>" +Trainees[i].rollno +"<br>" +Trainees[i].college +"<br>" +Trainees[i].branch +"<br>");
	Trainees[i]

}
for (var i=0;i<Trainees.length;i++)
{  
   // document.write(+"<br>");
      for (var key in Trainees[i])
      {
        document.write(Trainees[i][key] +"<br>")
      }
       document.write( "<br>")
    }
    