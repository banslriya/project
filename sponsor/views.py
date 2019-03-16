from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import Sponsor_info
from django.urls import reverse
from .forms import SponsorForm

# Create your views here.
def sponsor(request):
	if request.method == "POST":
		form = SponsorForm(request.POST)
		if form.is_valid():
			form.save()
		return redirect(reverse('home'))
	else:	
		form = SponsorForm()
	return render(request,'home/sponsor.html',{'form':form})

