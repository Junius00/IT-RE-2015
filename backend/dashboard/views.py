from django.http import JsonResponse
from math import ceil, floor
from .models import Subjects
from django.shortcuts import render, redirect

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
        jsonrsp[subject.name] = jsontemp
        total_percentage = 0
        gotten_percentage = 0

        for exam in subject.exams_set.all():

            chartdart_temp["exam"] = exam.name
            chartdart_temp["percentage"] = (exam.percentage_gotten /
                                            exam.percentage_weight * 100)

            chartdart_temp["weight"] = exam.percentage_weight
            chartdart_temp["done"] = exam.done

            if exam.done:
                total_percentage += exam.percentage_weight
                gotten_percentage += exam.percentage_gotten

            jsonrsp[subject.name]["chartdata"].append(chartdart_temp)

        gpa = gpa_calculate(gotten_percentage / total_percentage * 100)
        jsonrsp[subject.name]["gpa"] = str(gpa)

    # str_json = '<p>' + str(jsonrsp) + '</p>'

    return JsonResponse(jsonrsp, safe=False)


def gpa_calculate(percentage):
    """le doc"""
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


def form(request):
    pass
