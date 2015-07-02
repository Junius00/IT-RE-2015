$(document).ready(function() {
	//functions and variables
	var examsNext = $("#scr1") ;
	var subjects = {
		"English":{
			'chartdata':[
				{
					"exam":"MYCT",
					"percentage":100,
					'done':true
				}
			]
		},
		"Physics":{
			'chartdata':[
				{
					"exam":"MYCT",
					"percentage":100,
					'done':true
				}
			]
		}
	};
	
	function chartDraw(framediv,title,chartData,chartdiv) {
		$(framediv).append("<p class='emphasis'>"+title+"</p>");
		$(framediv).append("<div class='graph' id='"+chartdiv+"'></div>");
		var arr = [title];
		var graphdef = {
			categories:[title],
			dataset:{}
		};
		graphdef.dataset[title] = [];
		var config = {
			graph:{
				orientation:'Vertical',
				bgcolor:'#0E161F',
				custompalette:["#FFFFFF"]
			},
			meta:{
				position:"#"+title,
				hlabel:'Examination Name',
				vlabel:'Percentage'
			},
			dimension:{
				width:parseInt($(".graph").css("width").split("px")[0])-200,
				height:parseInt($(".graph").css("height").split("px")[0])-120,
			},
			margin:{
				top:20,
				bottom:100,
				left:100,
				right:100
			},
			caption:{
				fontsize:20,
				strokecolor:"#FFFFFF"
			},
			legend:{
				position:'right'
			},
			frame:{
				bgcolor:'#0E161F'
			},
			axis:{
				strokecolor:"#FFFFFF"
			},
			label:{
				strokecolor:"#FF0000"
			},
			bar:{
				strokecolor:"#FFFFFF",
				textcolor:"#FFFFFF"
			}
		};
		console.log($(".graph").css("width").split("px")[0]);
		for (var i = 0;i<chartData.length;i++)
		{
			if (chartData[i]['done'])
			{
				graphdef['dataset'][title].push({name:chartData[i]["exam"],value:chartData[i]["percentage"]});
			}
		}
		var chart = uv.chart('Bar',graphdef,config);
	}
	
	function subjectRead (subjects){
		$("#scr2").html("");
		$("#main").html("");
		examsNext.html("");
		if (subjects.length == 0)
		{
			$("#main").append("<p class='emphasis'>No subjects yet!</p><p>Go to 'Manage Exams' to add a new subject.");
			examsNext.append("<p class='emphasis'>No subjects yet!</p><p>Go to 'Manage Exams' to add a new subject.");
		}
		else
		{
			$.each(subjects,function (key,value)
			{
				$("#main").append("<p class='emphasis'>"+key+"</p><p><b>Current: </b>"+subjects[key]["gpa"]+",<b> Goal: </b>"+subjects[key]["goal"]+"</p>");
				chartDraw("#scr2",key,subjects[key]["chartdata"],key);
				examsNext.append("<p class='emphasis'>"+key+"</p>")
				var count = 0;
				for (var a = 0;a<subjects[key]["chartdata"].length;a++)
				{
					if (subjects[key]["chartdata"][a]["done"] == false)
					{
						examsNext.append("<p><b>"+subjects[key]["chartdata"][a]["exam"]+"</b>, "+subjects[key]["chartdata"][a]["weight"]+"% of final grade");
						count++;
					}
				}
				if (count == 0)
				{
					examsNext.append("<p><b>None</b></p>")
				}
			});
		}
	};
	//main start up
	/*var xmlhttp = new XMLHttpRequest();
	var url = "dashboard/overview";
	
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var subjects = JSON.parse(xmlhttp.responseText);
			subjectRead(subjects);
		}
	}
	xmlhttp.open("POST", url, true);
	xmlhttp.send();*/
	subjectRead(subjects);
	$("#main").css("z-index","1");
	$("#main").css("opacity","1");
	iA = ["#scr1","#scr2","#scr3","#scr4","#main"];
	iL = ["#hl1","#hl2","#hl3","#hl4","#ml"];
	
	$("#ml").click(function () {
		subjectRead(subjects);
		$("#main").css("z-index","1");
		$("#main").css("opacity","1");
		$("#ml").css("color","white");
		for (var i = 3;i>=0;i--) {
			$(iA[i]).css("z-index","0");
			$(iA[i]).css("opacity","0");
			$(iL[i]).css("color","#626A72");
		}
	});
	
	$("#hl1").click(function () {
		subjectRead(subjects);
		$("#scr1").css("z-index","1");
		$("#scr1").css("opacity","1");
		$("#hl1").css("color","white");
		for (var i = 1;i<5;i++) {
			$(iA[i]).css("z-index","0");
			$(iA[i]).css("opacity","0");
			$(iL[i]).css("color","#626A72");
		}
	});
	
	$("#hl2").click(function () {
		subjectRead(subjects);
		$("#scr2").css("z-index","1");
		$("#scr2").css("opacity","1");
		$("#hl2").css("color","white");
		for (var i = 2;i<5;i++) {
			$(iA[i]).css("z-index","0");
			$(iA[i]).css("opacity","0");
			$(iL[i]).css("color","#626A72");
		}
		$("#scr1").css("z-index","0");
		$("#scr1").css("opacity","0");
		$("#hl1").css("color","#626A72");
	});
	
	$("#hl3").click(function () {
		subjectRead(subjects);
		$("#scr3").css("z-index","1");
		$("#scr3").css("opacity","1");
		$("#hl3").css("color","white");
		for (var i = 1;i>-1;i--) {
			$(iA[i]).css("z-index","0");
			$(iA[i]).css("opacity","0");
			$(iL[i]).css("color","#626A72");
		}
		$("#scr4").css("z-index","0");
		$("#scr4").css("opacity","0");
		$("#hl4").css("color","#626A72");
		$("#main").css("z-index","0");
		$("#main").css("opacity","0");
		$("#ml").css("color","#626A72");
	});
	
	$("#hl4").click(function () {
		subjectRead(subjects);
		$("#scr4").css("z-index","1");
		$("#scr4").css("opacity","1");
		$("#hl4").css("color","white");
		for (var i = 2;i>-1;i--) {
			$(iA[i]).css("z-index","0");
			$(iA[i]).css("opacity","0");
			$(iL[i]).css("color","#626A72");
		}
		$("#main").css("z-index","0");
		$("#main").css("opacity","0");
		$("#ml").css("color","#626A72");
	});
	
	$("#scr3Submit").click(function () {
		var subject = $("#examSubject").val();
		var name = $("#examName").val();
		var percent = $("#examPercent").val();
		var count = 0;
		var err = false;
		var errAlert = "";
		$.each(subjects,function(key,value)
		{
			if (subject == key){
				count--;
			}
			else count++;	
		});
		if (count == subjects.length&&$("#newSub").prop("checked")==false)
		{
			errAlert += "Subject not found in list.\n";
			err = true;	
		}
		if (isNaN(percent)||percent == '')
		{
			errAlert += "Percentage entered is not a number or no percentage entered.\n";
			err = true;	
		}
		$("#examSubject").val('');
		$("#examName").val('');
		$("#examPercent").val('');
		if (err == false)
		{
			var exam = {"subject":subject,"exam":name,"percentage":percent};
			alert("Response recorded: For subject "+exam["subject"]+", examination name is "+exam["exam"]+" with a percentage of the final grade of "+exam["percentage"]+"%");
			if ($("#newSub").prop("checked"))
			{
				subjects[subject] = {"gpa":"0","goal":"0","chartdata":[{"exam":name,"weight":percent,"done":false}]};
			}
			else
			{
				subjects[subject]["chartdata"].push({"exam":name,"weight":percent,"done":false});
			}
		}
		else alert(errAlert);
		$('#newSub').prop('checked', false);
	});
	
	$("#recSubmit").click(function () {
		var subject = $("#recSubject").val();
		var name = $("#recName").val();
		var mark = parseInt($("#recMark").val());
		var total = parseInt($("#recTotal").val());
		var percent = mark/total*100;
		var count = 0;
		var err = false;
		var errAlert = "";
		$.each(subjects,function(key,value)
		{
			if (subject == key){
				count--;
			}
			else count++;	
		});
		if (count == subjects.length)
		{
			errAlert += "Subject not found in list.\n";
			err = true;	
		}
		if (isNaN(mark)||isNaN(total)||mark == ''||total == '')
		{
			errAlert += "Numbers entered are not numbers or no numbers entered.\n";
			err = true;	
		}
		$("#recSubject").val('');
		$("#recName").val('');
		$("#recMark").val('');
		$("#recTotal").val('');
		if (err == false)
		{
		
			for (var i = 0;i < subjects[subject]["chartdata"].length;i++)
			{
				if (subjects[subject]["chartdata"][i]["exam"] == name)
				{
					subjects[subject]["chartdata"][i]["percentage"] = percent;
					subjects[subject]["chartdata"][i]["done"] = true;
				}
			}
			alert("Response recorded: For subject "+subject+", examination name is "+name+" with a mark of "+mark+" out of "+total+".");
		}
		else alert(errAlert);
	});
	
	$("#scr4Submit").click(function () {
		var validGpa = ["0.8","1.2","1.6","2.0","2.4","2.8","3.2","3.6","4.0"];
		var subject = $("#goalSubject").val();
		var gpa = $("#goalGpa").val();
		var count = 0;
		var err = false;
		var errAlert = "";
		var subjectIndex = 0;
		$.each(subjects,function(key,value)
		{
			if (subject == key){
				count--;
			}
			else count++;	
		});
		if (count == subjects.length)
		{
			errAlert += "Subject not found in list.\n";
			err = true;	
		}
		if (isNaN(gpa)||gpa == ''||$.inArray(gpa,validGpa)<0)
		{
			errAlert += "GPA entered is not valid or no GPA entered.\n";
			err = true;	
		}
		$("#goalSubject").val('');
		$("#goalGpa").val('');
		if (err == false)
		{
			var goal = {"subject":subject,"goal":gpa};
			alert("Response recorded: For subject "+goal["subject"]+", goal GPA is "+goal["goal"]);
			subjects[subject]["goal"] = gpa;
		}
		else alert(errAlert);
	});
	$(window).unload(function () {
		//XML send
	});
});