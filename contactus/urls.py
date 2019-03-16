from django.contrib import admin
from django.urls import path
from django.views.generic import TemplateView
from .views import emailView, successView

app_name = 'contactus'
urlpatterns = [
    path('email/', emailView, name='email'),
    path('success/', successView, name='success'),
]