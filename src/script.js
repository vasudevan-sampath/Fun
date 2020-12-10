var i = 1;
var j = 0;
var maxj = 1;
function createImg2()
{
		var y = document.createElement("td");
		var z = document.createElement("img");
		y.appendChild(z);
		y.id = "x";

	  	var c = document.getElementById("images");
	  	c.appendChild(y);
	  	z.id = "img2";
	  	z.style ="height:250px;object-fit:cover;";
}

function createImg3()
{
		var y = document.createElement("td");
		var z = document.createElement("img");
		y.appendChild(z);
		y.id = "xx";

	  	var c = document.getElementById("images");
	  	c.appendChild(y);
	  	z.id = "img3";
	  	z.style ="height:250px;object-fit:cover;";
}


function validate()
{

	document.getElementById("Answer").value = document.getElementById("Answer").value.toUpperCase();
	// if(document.getElementById("Answer").value == vasu[i-1]) 
	// {	
		document.getElementById("out").innerHTML = "CORRECT ANSWER!!!";
	  	i++;
	  	document.getElementById("sub").style.display = "none";
	  	document.getElementById("next").style.display = "block";
	//  }
	// else
	// {   
	// 	document.getElementById("out").innerHTML = "Wrong Answer. Try Again!!!!";
	// 	document.getElementById("Answer").value ="";
	// 	document.getElementById("Answer").focus();
	//  }
}

function nextqn()
{
	document.getElementById("Answer").value ="";
	document.getElementById("next").style.display = "none";
  	document.getElementById("sub").style.display  = "block";
	document.getElementById("out").innerHTML = "";
	document.getElementById("Answer").focus();
	j = 1;
	document.getElementById("i").style.display = "block"; 
	switch(i)
	{ 
	  case  1:  document.getElementById("img1").src = "src/ironman.jpg";
	  			maxj = 1;
	  		  	document.getElementById("i").style.display = "none"; 
				break;
	  case 2:  	document.getElementById("img1").src = "src/tom.jpg";
	  			maxj = 2;
	  			// createImg2();
	  			// document.getElementById("img2").src = "src/cruise.jpg";
	  		  	break;
	  case 3: 	document.getElementById("x").remove();
	  			document.getElementById("img1").src = "src/am.jpg";
	  			maxj = 3;
	  			// createImg2();
	  			// document.getElementById("img2").src = "src/ban.png";
	  			// createImg3();
	  			// document.getElementById("img3").src = "src/knee.jpg";
	  		  	break;
  	  case 4:  	document.getElementById("x").remove();
	  			document.getElementById("xx").remove();
	  			document.getElementById("img1").src = "src/dho.jpg"; 
	  			maxj = 2;
  	  			//createImg2();
	  			// document.getElementById("img2").src = "src/knee.jpg";
	  		  	break;
   	  case 5:  	document.getElementById("x").remove();
	  			document.getElementById("img1").src = "src/am.jpg";
	  			maxj = 3;
	  			// createImg2();
	  			// document.getElementById("img2").src = "src/bed.jpg";
	  			// createImg3();
	  			// document.getElementById("img3").src = "src/car.jpg";
	  			break;
	  case 6:  	document.getElementById("x").remove();
	  			document.getElementById("xx").remove();
	  			document.getElementById("img1").src = "src/we.jpg";
	  			maxj = 3;
	  			// createImg2();
	  			// document.getElementById("img2").src = "src/wake.jpg";
	  			// createImg3();
	  			// document.getElementById("img3").src = "src/anand.jpg";// document.getElementById("Answer").placeholder = "home";
	  		  	break;
	  case 7:   document.getElementById("x").remove();
	  			document.getElementById("xx").remove();
	  			document.getElementById("img1").src = "src/moon.jpg";
	  			maxj = 2;
	  			// createImg2();
	  			// document.getElementById("img2").src = "src/chawla.jpg";
	  		  	break;
	  case 8:   document.getElementById("x").remove();
	  			document.getElementById("img1").src = "src/mohan.jpg";
	  			maxj = 2;
	  		 	//createImg2();
	  			// document.getElementById("img2").src = "src/germany.png";
	  		  	break;
	  case 9:  	document.getElementById("x").remove();
	  			document.getElementById("img1").src = "src/ram.jpg";
	  			maxj = 3;
	  			// createImg2();
	  			// document.getElementById("img2").src = "src/anu.jpg";
	  			// createImg3();
	  			// document.getElementById("img3").src = "src/jam.jpg";
	  		  	break; 
	  case 10:  document.getElementById("x").remove();
	  			document.getElementById("xx").remove();
	  			document.getElementById("img1").src = "src/tag.jpg";
	  			maxj =2;
	  			// createImg2();
	  			// document.getElementById("img2").src = "src/ore.jpg";
	  		  	break; 
  	  case 11:  document.getElementById("x").remove();
	  			document.getElementById("img1").src = "src/lakshmi.jpg";
	  			maxj = 3;
	  			// createImg2();
	  			// document.getElementById("img2").src = "src/mi.png";
	  			// createImg3();
	  			// document.getElementById("img3").src = "src/tal.jpg";
	  			break;
	  case 12:  thankyoupage();
	            break; 
      default:  break;
	  		  }
}

var vasu=[1,2,3,4,5,6,7,8,9,10,11,12];
//var vasu =["SACHIN DANIEL OOMMEN","SHALINI","LAKSHMI PATHY S N","NIHARIKA SINHA","CINDY SALAZAR","ANUBHAV APURVA","AJIT MARUTHI KARALE","DEEPAK MAHENDRAKER","ILAVALUTHY MAHENDRAN","ASHOK VISWANATHAN","VASUDEVAN SAMPATH","VASUDEVAN SAMPATH"];   

function thankyoupage()
{
	document.getElementById("h").style.display = "none";
	document.getElementById("k").style.display = "none";
    document.getElementById("c").innerHTML = "Thank you ALL <br /> <br /> Have a Nice Day!!!";
    document.getElementById("c").style = "margin-top:200px;font-size:40px;";
}
function nextclue()
{
	if(j == 1) 
	{ 
		createImg2();
		switch(i)
		{
			case 2: document.getElementById("img2").src = "src/cruise.jpg";
					break;
			case 3: document.getElementById("img2").src = "src/ban.png";
					break;
			case 4: document.getElementById("img2").src = "src/knee.jpg";
					break;
			case 5: document.getElementById("img2").src = "src/bed.jpg";
					break;
			case 6: document.getElementById("img2").src = "src/wake.jpg";
					break;
			case 7: document.getElementById("img2").src = "src/chawla.jpg";
					break;
			case 8: document.getElementById("img2").src = "src/germany.png";
					break;
			case 9: document.getElementById("img2").src = "src/anu.jpg";
					break;
			case 10: document.getElementById("img2").src = "src/ore.jpg";
					break;
			case 11: document.getElementById("img2").src = "src/mi.png";
					break;

			default: break;

		}
	}
	else if(j == 2) 
	{
		createImg3();
		switch(i)
		{
			case 3: document.getElementById("img3").src = "src/knee.jpg";
					break;
			case 5: document.getElementById("img3").src = "src/car.jpg";
					break;
			case 6: document.getElementById("img3").src = "src/anand.jpg";
					break;
			case 9: document.getElementById("img3").src = "src/jam.jpg";
					break;
			case 11: document.getElementById("img3").src = "src/tal.jpg";
					break;
			default: break;
		}
	} 
	if(j == 1)
	{
		switch(i)
		{
			case 2:
			case 4:
			case 7:
			case 8:
			case 10: document.getElementById("i").style.display = "none";
					 break;
			default: break;
		}
	}
	else if(j==2)
	{
		switch(i)
		{
			case 3:
			case 5:
			case 6:
			case 9:
			case 11: document.getElementById("i").style.display = "none";
					 break;
			default: break;
		}
	}
	j++;
}

function hint()
{
	switch(i)
	{
		case 1: break;
		case 2: break;
		case 3: break;
		case 4: break;
		case 5: break;
		case 6: break;
		case 7: break;
		case 8: break;
		case 9: break;
		case 10: break;
		case 11: break;
	}
}

function page1()
{
	document.getElementById("c").style.display = "block";
	document.getElementById("h").style.display = "none";
	document.getElementById("k").style.display = "none";
    document.getElementById("i").style.display = "block";
	document.getElementById("j").style.display = "block";
	nextqn();
}
