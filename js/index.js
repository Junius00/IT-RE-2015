$(document).ready(function() {
	//functions and variables
	var examsNext = $("#scr1") ;
	var subjects = {};

	//to display upcoming exams and front page
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
	
	//main JSON object
	var url = "https://it-re-2015-techatin.c9.io/index/";
	var aurl = "https://it-re-2015-techatin.c9.io/add/";
	
	$.getJSON(url,null,function(data) {
		subjects = data;
		subjectRead(subjects);
	});
		
	//to draw chart
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
		for (var i = 0;i<chartData.length;i++)
		{
			if (chartData[i]['done'])
			{
				graphdef['dataset'][title].push({name:chartData[i]["exam"],value:chartData[i]["percentage"]});
			}
		}
		var chart = uv.chart('Bar',graphdef,config);
	}
	

	//main start up
	//loads JSON data and defaults screen to mainpage
	subjectRead(subjects);
	subjectRead(subjects);
	subjectRead(subjects);
	$("#main").css("z-index","1");
	$("#main").css("opacity","1");
	$("#ml").css("background-color","#8C6954");
	$("#ml").css("color","white");
	iA = ["#scr1","#scr2","#scr3","#scr4","#main"];
	iL = ["#hl1","#hl2","#hl3","#hl4","#ml"];
	
	//div click functions to switch windows

	$("#ml").click(function () {
		subjectRead(subjects);
		$("#main").css("z-index","1");
		$("#main").css("opacity","1");
		$("#ml").css("background-color","#8C6954");
		$("#ml").css("color","white");
		for (var a = 0;a < 5;a++)
			{
				if (iL[a]!='#ml')
				{
					$(iA[a]).css("z-index","0");
					$(iA[a]).css("opacity","0");
					$(iL[a]).css('background-color','#59323C');
					$(iL[a]).css("color","#F2EEB3");
				}
			}
	});
	
	$("#hl1").click(function () {
		subjectRead(subjects);
		$("#scr1").css("z-index","1");
		$("#scr1").css("opacity","1");
		$('#hl1').css('background-color','#8C6954');
		$("#hl1").css("color","white");
		for (var a = 0;a < 5;a++)
		{
			if (iL[a]!='#hl1')
			{
				$(iA[a]).css("z-index","0");
				$(iA[a]).css("opacity","0");
				$(iL[a]).css('background-color','#59323C');
				$(iL[a]).css("color","#F2EEB3");
			}
		}
	});
	
	$("#hl2").click(function () {
		subjectRead(subjects);
		$("#scr2").css("z-index","1");
		$("#scr2").css("opacity","1");
		$('#hl2').css('background-color','#8C6954');
		$("#hl2").css("color","white");
		for (var a = 0;a < 5;a++)
		{
			if (iL[a]!='#hl2')
			{
				$(iA[a]).css("z-index","0");
				$(iA[a]).css("opacity","0");
				$(iL[a]).css('background-color','#59323C');
				$(iL[a]).css("color","#F2EEB3");
			}
		}
	});
	
	$("#hl3").click(function () {
		subjectRead(subjects);
		$("#scr3").css("z-index","1");
		$("#scr3").css("opacity","1");
		$('#hl3').css('background-color','#8C6954');
		$("#hl3").css("color","white");
		for (var a = 0;a < 5;a++)
		{
			if (iL[a]!='#hl3')
			{
				$(iA[a]).css("z-index","0");
				$(iA[a]).css("opacity","0");
				$(iL[a]).css('background-color','#59323C');
				$(iL[a]).css("color","#F2EEB3");
			}
		}
	});
	
	$("#hl4").click(function () {
		subjectRead(subjects);
		$("#scr4").css("z-index","1");
		$("#scr4").css("opacity","1");
		$('#hl4').css('background-color','#8C6954');
		$("#hl4").css("color","white");
		for (var a = 0;a < 5;a++)
		{
			if (iL[a]!='#hl4')
			{
				$(iA[a]).css("z-index","0");
				$(iA[a]).css("opacity","0");
				$(iL[a]).css('background-color','#59323C');
				$(iL[a]).css("color","#F2EEB3");
			}
		}
	});
	
	//form collection for exam addition
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
				$.getJSON(aurl,{'requestType':'addExam','subject':subject,'exam':name,'percentage':0,'done':false,'weight':percent},null);
			}
			else
			{
				subjects[subject]["chartdata"].push({"exam":name,"weight":percent,"done":false});
				$.getJSON(aurl,{'requestType':'addExam','subject':subject,'exam':name,'percentage':0,'done':false,'weight':percent},null);
			}
		}
		else alert(errAlert);
		$('#newSub').prop('checked', false);
	});
	
	//form collection for exam score record
	$("#recSubmit").click(function () {
		var subject = $("#recSubject").val();
		var name = $("#recName").val();
		var mark = parseFloat($("#recMark").val());
		var total = parseFloat($("#recTotal").val());
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
					$.getJSON(aurl,{'requestType':'updateExam','subject':subject,'exam':name,'percentage':percent,'done':true,'weight':subjects[subject]['chartdata'][i]["weight"]},null);
				}
			}
			
			var weightTotal = 0;
			var percentTotal= 0;
			for (var i = 0;i < subjects[subject]["chartdata"].length;i++)
			{
				if (subjects[subject]['chartdata'][i]['done']) {
					weightTotal = weightTotal + subjects[subject]['chartdata'][i]["weight"];
					percentTotal = percentTotal + subjects[subject]['chartdata'][i]['percentage']*subjects[subject]['chartdata'][i]['weight'];
				}
			}
			
			var gpaTotal = percentTotal/weightTotal;
			alert(gpaTotal);
			if (gpaTotal >= 80)
			{
				subjects[subject]['gpa'] = '4.0';
			}
			else if (gpaTotal >= 70&&gpaTotal < 80)
			{
				subjects[subject]['gpa'] = '3.6';
			}
			else if (gpaTotal >= 65&&gpaTotal < 70)
			{
				subjects[subject]['gpa'] = '3.2';
			}
			else if (gpaTotal >= 60&&gpaTotal < 65)
			{
				subjects[subject]['gpa'] = '2.8';
			}
			else if (gpaTotal >= 55&&gpaTotal < 60)
			{
				subjects[subject]['gpa'] = '2.4';
			}
			else if (gpaTotal >= 50&&gpaTotal < 55)
			{
				subjects[subject]['gpa'] = '2.0';
			}
			else if (gpaTotal >= 45&&gpaTotal < 50)
			{
				subjects[subject]['gpa'] = '1.6';
			}
			else if (gpaTotal >= 40&&gpaTotal < 45)
			{
				subjects[subject]['gpa'] = '1.2';
			}
			else if (gpaTotal < 40)
			{
				subjects[subject]['gpa'] = '0.8';
			}
			
			alert("Response recorded: For subject "+subject+", examination name is "+name+" with a mark of "+mark+" out of "+total+".");
		}
		else alert(errAlert);
	});
	
	//form collection for GPA goal setting
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
			$.getJSON(url,{'requestType':'goal','subject':subject,'goal':gpa},null);
		}
		else alert(errAlert);
	});
});