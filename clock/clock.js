setInterval(run,1000);

let second=document.querySelector('.seconds');
let minute=document.querySelector('.minute');
let hour=document.querySelector('.hour');

function run()
{
	let date = new Date();

	let secondratio=date.getSeconds()/60;
	let minuteratio=(secondratio+date.getMinutes())/60;
	let hourratio=(minuteratio+date.getHours())/12;

	clockrotate(second,secondratio);
	clockrotate(minute,minuteratio);
	clockrotate(hour,hourratio);
}

function clockrotate(classname,ratio)
{
	classname.style.setProperty('--rotation',ratio*360);
}