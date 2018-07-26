$(document).ready(function(){
     var count=0;
     var user1="";
     var user2="";
     var c="";
		$(".start").click(function(){
			user1=$(".user1").val();
			user2=$(".user2").val();
			if(user1.length!=0 && user2.length!=0)
			{
				$(".user-form").hide(1000);
				$(".table").show(2000);
				$(".pname").text(user1);
			}
			else
			{
				alert("Please Enter The Gamers Name");
			}

		});
		$(".d1").click(function(){
			var v1=$(".d1").text();
			if(v1.length==0)
			{
				if(count%2==0)
				{
				    $(".d1").text("X");
				    $(".pname").text(user2);
				}
			    else
			    {
			    	$(".d1").text("O");
			    	$(".pname").text(user1);
			    }
				count++;
				check("d1");
			}
		});
		$(".d2").click(function(){
			var v1=$(".d2").text();
			if(v1.length==0)
			{
				if(count%2==0)
				{
				    $(".d2").text("X");
				    $(".pname").text(user2);
				}
			    else
			    {
			    	$(".d2").text("O");
			    	$(".pname").text(user1);
			    }
				count++;
				check("d2");	
			}
		});
		$(".d3").click(function(){
			var v1=$(".d3").text();
			if(v1.length==0)
			{
				if(count%2==0)
				{
				    $(".d3").text("X");
				    $(".pname").text(user2);
				}
			    else
			    {
			    	$(".d3").text("O");
			    	$(".pname").text(user1);
			    }
				count++;
				check("d3");	
			}
		});
		$(".d4").click(function(){
			var v1=$(".d4").text();
			if(v1.length==0)
			{
				if(count%2==0)
				{
				    $(".d4").text("X");
				    $(".pname").text(user2);
				}
			    else
			    {
			    	$(".d4").text("O");
			    	$(".pname").text(user1);
			    }
				count++;
				check("d4");	
			}
		});
		$(".d5").click(function(){
			var v1=$(".d5").text();
			if(v1.length==0)
			{
				if(count%2==0)
				{
				    $(".d5").text("X");
				    $(".pname").text(user2);
				}
			    else
			    {
			    	$(".d5").text("O");
			    	$(".pname").text(user1);
			    }
				count++;
				check("d5");	
			}
		});
		$(".d6").click(function(){
			var v1=$(".d6").text();
			if(v1.length==0)
			{
				if(count%2==0)
				{
				    $(".d6").text("X");
				    $(".pname").text(user2);
				}
			    else
			    {
			    	$(".d6").text("O");
			    	$(".pname").text(user1);
			    }
				count++;
				check("d6");	
			}
		});
		$(".d7").click(function(){
			var v1=$(".d7").text();
			if(v1.length==0)
			{
				if(count%2==0)
				{
				    $(".d7").text("X");
				    $(".pname").text(user2);
				}
			    else
			    {
			    	$(".d7").text("O");
			    	$(".pname").text(user1);
			    }
				count++;
				check("d7");	
			}
		});
		$(".d8").click(function(){
			var v1=$(".d8").text();
			if(v1.length==0)
			{
				if(count%2==0)
				{
				    $(".d8").text("X");
				    $(".pname").text(user2);
				}
			    else
			    {
			    	$(".d8").text("O");
			    	$(".pname").text(user1);
			    }
				count++;
				check("d8");	
			}
		});
	     $(".d9").click(function(){
			var v1=$(".d9").text();
			if(v1.length==0)
			{
				if(count%2==0)
				{
				    $(".d9").text("X");
				    $(".pname").text(user2);
				}
			    else
			    {
			    	$(".d9").text("O");
			    	$(".pname").text(user1);
			    }
				count++;	
				check("d9");
			}
		});
	     function check(c){
               if(c=="d1")
               {
               	var v1=$(".d1").text();
               	var v2=$(".d2").text();
               	var v3=$(".d3").text();
               	var v4=$(".d4").text();
               	var v5=$(".d5").text();
               	var v6=$(".d6").text();
               	var v7=$(".d7").text();
               	var v9=$(".d9").text();
               	if(v1="X"&&v2=="X"&&v3=="X")
               	{
                   $(".table").hide();
                   $(".win").text("''wow... "+user1+"    successfully''");
               	}
               	else if(v1="X"&&v4=="X"&&v7=="X")
               	{
               		$(".win").text("''wow... "+user1+"   successfully''");
               		$(".table").hide();
               	}
               	else if(v1="X"&&v5=="X"&&v9=="X")
               	{
               		$(".win").text("''wow... "+user1+"     successfully''");
               		$(".table").hide();
               	}
               	if(v1="O"&&v2=="O"&&v3=="O")
               	{
                  $(".win").text("''wow... "+user2+"       successfully''");
                   $(".table").hide();
               	}
               	else if(v1="O"&&v4=="O"&&v7=="O")
               	{
               		$(".win").text("''wow... "+user2+"     successfully''");
               		$(".table").hide();
               	}
               	else if(v1="O"&&v5=="O"&&v9=="O")
               	{
               		$(".win").text("''wow... "+user2+"        successfully''");
               		$(".table").hide();
               	}

               }
               if(c=="d2")
               {
               	var v1=$(".d1").text();
               	var v2=$(".d2").text();
               	var v3=$(".d3").text();
               	var v5=$(".d5").text();
               	var v8=$(".d8").text();
               	if(v1="X"&&v2=="X"&&v3=="X")
               	{
                   $(".win").text("''wow... "+user1+"           successfully''");
                   $(".table").hide();
               	}
               	else if(v5="X"&&v2=="X"&&v8=="X")
               	{
                   $(".win").text("''wow... "+user1+"           successfully''");
                   $(".table").hide();
               	}
               	if(v1="O"&&v2=="O"&&v3=="O")
               	{
                   $(".win").text("''wow... "+user2+"          successfully''");
                   $(".table").hide();
               	}
               	else if(v5="O"&&v2=="O"&&v8=="O")
               	{
                   $(".win").text("''wow... "+user2+"          successfully''");
                   $(".table").hide();
               	}
               }
                if(c=="d3")
               {
               	var v1=$(".d1").text();
               	var v2=$(".d2").text();
               	var v3=$(".d3").text();
               	var v5=$(".d5").text();
               	var v6=$(".d6").text();
               	var v7=$(".d7").text();
               	var v9=$(".d9").text();
               	if(v1=="X"&&v2=="X"&&v3=="X")
               	{
                   $(".win").text("''wow... "+user1+"        successfully''");
                   $(".table").hide();
               	}
               	else if(v1=="X"&&v6=="X"&&v9=="X")
               	{
               		$(".win").text("''wow... "+user1+"       successfully''");
               		$(".table").hide();
               	}
               	else if(v1=="X"&&v5=="X"&&v7=="X")
               	{
               		$(".win").text("''wow... "+user1+"         successfully''");
               		$(".table").hide();
               	}
               	if(v1=="O"&&v2=="O"&&v3=="O")
               	{
                   $(".win").text("''wow... "+user2+"         successfully''");
                   $(".table").hide();
               	}
               	else if(v1=="O"&&v6=="O"&&v9=="O")
               	{
               		$(".win").text("''wow... "+user2+"        successfully''");
               		$(".table").hide();
               	}
               	else if(v1=="O"&&v5=="O"&&v7=="O")
               	{
               		$(".win").text("''wow... "+user2+"       successfully''");
               		$(".table").hide();
               	}

               }
                if(c=="d4")
               {
               	var v1=$(".d1").text();
               	var v4=$(".d4").text();
               	var v5=$(".d5").text();
               	var v6=$(".d6").text();
               	var v7=$(".d7").text();
               	if(v4=="X"&&v5=="X"&&v6=="X")
               	{
                   $(".win").text("''wow... "+user1+"         successfully''");
                   $(".table").hide();
               	}
               	else if(v1=="X"&&v4=="X"&&v7=="X")
               	{
                   $(".win").text("''wow... "+user1+"        successfully''");
                   $(".table").hide();
               	}
               	if(v4=="O"&&v5=="O"&&v6=="O")
               	{
                   $(".win").text("''wow... "+user2+"       successfully''");
                   $(".table").hide();
               	}
               	else if(v1=="O"&&v4=="O"&&v7=="O")
               	{
                   $(".win").text("''wow... "+user2+"       successfully''");
                   $(".table").hide();
               	}
               }
               if(c=="d5")
               {
               	var v2=$(".d2").text();
               	var v3=$(".d3").text();
               	var v4=$(".d4").text();
               	var v5=$(".d5").text();
               	var v6=$(".d6").text();
               	var v7=$(".d7").text();
               	var v8=$(".d8").text();
               	if(v4=="X"&&v5=="X"&&v6=="X")
               	{
                   $(".win").text("''wow... "+user1+"        successfully''");
                   $(".table").hide();
               	}
               	else if(v2=="X"&&v5=="X"&&v8=="X")
               	{
               		$(".win").text("''wow... "+user1+"       successfully''");
               		$(".table").hide();
               	}
               	else if(v1=="X"&&v5=="X"&&v9=="X")
               	{
               		$(".win").text("''wow... "+user1+"       successfully''");
               		$(".table").hide();
               	}
               	 else if(v3=="X"&&v5=="X"&&v7=="X")
               	{
               		$(".win").text("''wow... "+user1+"       successfully''");
               		$(".table").hide();
               	}
               	if(v4=="O"&&v5=="O"&&v6=="O")
               	{
                   $(".win").text("''wow... "+user2+"        successfully''");
                   $(".table").hide();
               	}
               	else if(v2=="O"&&v5=="O"&&v8=="O")
               	{
               		$(".win").text("''wow... "+user2+"       successfully''");
               		$(".table").hide();
               	}
               	else if(v1=="O"&&v5=="O"&&v9=="O")
               	{
               		$(".win").text("''wow... "+user2+"      successfully''");
               		$(".table").hide();
               	}
               	 else if(v3=="O"&&v5=="O"&&v7=="O")
               	{
               		$(".win").text("''wow... "+user2+"     successfully''");
               		$(".table").hide();
               	}

               }
                if(c=="d6")
               {
               	var v3=$(".d3").text();
               	var v3=$(".d4").text();
               	var v3=$(".d5").text();
               	var v3=$(".d6").text();
               	var v3=$(".d9").text();
               	 if(v4=="X"&&v5=="X"&&v6=="X")
               	{
                   $(".win").text("''wow... "+user1+"      successfully''");
                   $(".table").hide();
               	}
               	else if(v3=="X"&&v6=="X"&&v9=="X")
               	{
                   $(".win").text("''wow... "+user1+"      successfully''");
                   $(".table").hide();
               	}
               	if(v4=="O"&&v5=="O"&&v6=="O")
               	{
                   $(".win").text("''wow... "+user2+"      successfully''");
                   $(".table").hide();
               	}
               	else if(v3=="O"&&v6=="O"&&v9=="O")
               	{
                   $(".win").text("''wow... "+user2+"      successfully''");
                   $(".table").hide();
               	}
               }
                if(c=="d7")
               {
               	var v1=$(".d1").text();
               	var v3=$(".d3").text();
               	var v4=$(".d4").text();
               	var v5=$(".d5").text();
               	var v7=$(".d7").text();
               	var v8=$(".d8").text();
               	var v9=$(".d9").text();
               	if(v7=="X"&&v8=="X"&&v9=="X")
               	{
                   $(".win").text("''wow... "+user1+"      successfully''");
                   $(".table").hide();
               	}
               	else if(v1=="X"&&v4=="X"&&v7=="X")
               	{
               		$(".win").text("''wow... "+user1+"     successfully''");
               		$(".table").hide();
               	}
               	else if(v7=="X"&&v5=="X"&&v3=="X")
               	{
               		$(".win").text("''wow... "+user1+"     successfully''");
               		$(".table").hide();
               	}
               	if(v7=="O"&&v8=="O"&&v9=="O")
               	{
                  $(".win").text("''wow... "+user2+"      successfully''");
                   $(".table").hide();
               	}
               	else if(v1=="O"&&v4=="O"&&v7=="O")
               	{
               		$(".win").text("''wow... "+user2+"    successfully''");
               		$(".table").hide();
               	}
               	else if(v7=="O"&&v5=="O"&&v3=="O")
               	{
               		$(".win").text("''wow... "+user2+"   successfully''");
               		$(".table").hide();
               	}

               }
               if(c=="d8")
               {
               	var v2=$(".d2").text();
               	var v5=$(".d5").text();
               	var v7=$(".d7").text();
               	var v8=$(".d8").text();
               	var v9=$(".d9").text();
               	if(v7=="X"&&v8=="X"&&v9=="X")
               	{
                   $(".win").text("''wow... "+user1+"   successfully''");
                   $(".table").hide();
               	}
               	else if(v5=="X"&&v2=="X"&&v8=="X")
               	{
                   $(".win").text("''wow... "+user1+"  successfully''");
                   $(".table").hide();
               	}
               	if(v7=="O"&&v8=="O"&&v9=="O")
               	{
                  $(".win").text("''wow... "+user2+"   successfully''");
                   $(".table").hide();
               	}
               	else if(v5=="O"&&v2=="O"&&v8=="O")
               	{
                   $(".win").text("''wow... "+user2+"   successfully''");
                   $(".table").hide();
               	}
               }
               if(c=="d9")
               {
               	var v1=$(".d1").text();
               	var v3=$(".d3").text();
               	var v5=$(".d5").text();
               	var v6=$(".d6").text();
               	var v7=$(".d7").text();
               	var v8=$(".d8").text();
               	var v9=$(".d9").text();
               	if(v7=="X"&&v8=="X"&&v9=="X")
               	{
                  $(".win").text("''wow... "+user1+"    successfully''");
                   $(".table").hide();
               	}
               	else if(v3=="X"&&v6=="X"&&v9=="X")
               	{
               		$(".win").text("''wow... "+user1+"  successfully''");
               		$(".table").hide();
               	}
               	else if(v1=="X"&&v5=="X"&&v9=="X")
               	{
               		$(".win").text("''wow... "+user1+"   successfully''");
               		$(".table").hide();
               	}
               	if(v7=="O"&&v8=="O"&&v9=="O")
               	{
                   $(".win").text("''wow... "+user2+"  successfully''");
                   $(".table").hide();
               	}
               	else if(v3=="O"&&v6=="O"&&v9=="O")
               	{
               		$(".win").text("''wow... "+user2+"   successfully''");
               		$(".table").hide();
               	}
               	else if(v1=="O"&&v5=="O"&&v9=="O")
               	{
               		$(".win").text("''wow... "+user2+"  successfully''");
               		$(".table").hide();
               	}

               }
	     }
	     	$(".RETRY").click(function(){

	          	location.reload();
	          });
	});