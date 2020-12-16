const db=firebase.firestore();
const db_player=firebase.firestore();
const table=document.querySelector('#tbresult');
const table_player=document.querySelector('#tbresult_player');
var numrow = 1
var numrowPlayer = 1
var img = new Image();
// db.collection('Users').get().then((snapshot)=>{
// db.collection('Users').where('score','>','400').get().then((snapshot)=>{
db.collection('Users').orderBy('score','desc').limit(30).get().then((snapshot)=>{
  snapshot.forEach(doc=>{
		console.log(doc.data());
		showData(doc);
	});
});
	
$.getJSON('https://ipapi.co/json/', function(data) {
	db_player.collection('Users').where('ip','==',data.ip).get().then((snapshot)=>{
	snapshot.forEach(doc=>{
		console.log(doc.data());				
		showDataPlayer(doc);
		});
	});
});	
	
function showData(doc){
	var row=table.insertRow(-1);
	var cell1=row.insertCell(0);
	var cell2=row.insertCell(1);
	var cell3=row.insertCell(2);
	var cell4=row.insertCell(3);
	var cell5=row.insertCell(4);
	var cell6=row.insertCell(5);

	cell1.innerHTML=numrow++

	if(numrow==2){
		img.src='img/1.png'
		cell1.innerHTML='<img src="'+img.src+'" />';
	}
	if(numrow==3){
		img.src='img/2.png'
		cell1.innerHTML='<img src="'+img.src+'" />';
	}
	if(numrow==4){
		img.src='img/3.png'
		cell1.innerHTML='<img src="'+img.src+'" />';
	}

	cell2.innerHTML=doc.data().ip;
	cell3.innerHTML=doc.data().country;
	cell4.innerHTML=doc.data().score;
	let sec = doc.data().time;
	cell5.innerHTML=sec
	cell6.innerHTML=new Date(doc.data().dati.seconds*1000);	
}
function showDataPlayer(doc){
	var row=table_player.insertRow(-1);
	var cell1=row.insertCell(0);
	var cell2=row.insertCell(1);
	var cell3=row.insertCell(2);
	var cell4=row.insertCell(3);
	var cell5=row.insertCell(4);
	var cell6=row.insertCell(5);
	
	cell1.innerHTML=numrowPlayer++
	cell2.innerHTML=doc.data().ip;
	cell3.innerHTML=doc.data().country;
	cell4.innerHTML=doc.data().score;
	let sec = doc.data().time;
	cell5.innerHTML=sec
	cell6.innerHTML=new Date(doc.data().dati.seconds*1000);
}
