from django.http import JsonResponse
from math import ceil, floor
from .models import Subjects, Exams
from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_exempt
import json
import urllib2
import copy

# Create your views here.


def index(request):
    all_subjects = Subjects.objects.all()
    jsontemp = {
        "gpa": "",
        "goal": "4.0",
        "chartdata": []
    }

    chartdart_temp = {
        "exam": "",
        "percentage": 0,
        "weight": 0,
        "done": None,
    }

    jsonrsp = {}

    for subject in all_subjects:
        
        temp = copy.copy(jsontemp)
        
        jsonrsp[subject.name] = temp
        total_percentage = 0
        gotten_percentage = 0

        for exam in subject.exams.all():
            
            chart_temp = copy.copy(chartdart_temp)

            chart_temp["exam"] = exam.name
            chart_temp["percentage"] = (exam.percentage_gotten)

            chart_temp["weight"] = exam.percentage_weight
            chart_temp["done"] = exam.done
            
            print(exam.percentage_gotten)

            if exam.done:
                total_percentage += exam.percentage_weight
                gotten_percentage += exam.percentage_gotten

            jsonrsp[subject.name]["chartdata"].append(chart_temp)

        if total_percentage !=0 :
            gpa = gpa_calculate(gotten_percentage/total_percentage)
        else:
            gpa = '4.0'
        jsonrsp[subject.name]["gpa"] = str(gpa)
        

    # str_json = '<p>' + str(jsonrsp) + '</p>'
    
    print(jsonrsp)

    return JsonResponse(jsonrsp, safe=False)


def gpa_calculate(percentage):

    act_percentage = ceil(percentage)

    if act_percentage >= 80:
        return 4.0
    elif act_percentage > 69 and act_percentage < 80:
        return 3.6
    elif act_percentage < 40:
        return 0.8
    elif act_percentage > 54 and act_percentage < 60:
        return 2.4

    factor = int(floor((percentage - 40) / 5))
    return (0.4 * factor) + 1.2


def home(request):

    return render(request, "index.html")


@csrf_exempt
def addExam(request):
    if request.is_ajax:
        if request.method == 'POST':
            
            
            try:
                
                print(request.body)
                data = json.loads(request.body)
                print(data)
            
                if data['requestType']=='addExam':
            
                    subject = Subjects.objects.get(name=data["subject"])
                    exam = Exams(name=data['exam'], percentage_weight=float(data['weight']), 
                    percentage_gotten=float(data['percentage']), done=bool(data['done']), belongs_to=subject)
            
                    exam.save()
                    
                elif data['requestType']=='updateExam':
                    
                    subject = Subjects.objects.get(name=data["subject"])
                    
                    exam = Exams.objects.get(name=data['exam'], belongs_to=subject)
                    exam.done = True
                    exam.percentage_gotten = data["percentage"]
                    exam.save()
                    
                    print(exam.percentage_gotten)
                    
                elif data['requestType']=='addExamNew':
                    
                    subject = Subjects(name=data['subject'])
                    subject.save()
                    
                    exam = Exams(name=data['exam'], percentage_weight=float(data['weight']), 
                    percentage_gotten=float(data['percentage']), done=bool(data['done']), belongs_to=subject)
            
                    exam.save()
                    
                    print('success')
                    print(subject)
                    print(exam)
                    
                elif  data['requestType'] == 'goal':
                    
                    subject = Subjects.objects.get(name=data['subject'])
                    subject.goal_gpa = float(data['goal'])
                    subject.save()
                
                    
            except Exception as error:
                print error
                
    return JsonResponse({"status":"success"})
            
#def updateExam(request):




    
