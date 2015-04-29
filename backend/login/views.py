from django.shortcuts import render
from models import User
from django.http import JsonResponse

# Create your views here.

def sign_in(request):
	render("whatever.html")

def sign_in_check(request):
	username = request.POST["username"]
	password = request.POST["password"]

	user = authenticate(username = username, password = password)

	if user is not None:

		if user.is_active:
			login(request, user)
			JsonResponse({"logged_in":"true"})

		else:
			JsonResponse({"logged_in":"inactive"})

	else:

		JsonResponse({"logged_in":"failed"})

