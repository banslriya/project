from django.contrib import admin
from django.urls import path
from django.views.generic import TemplateView

from .views import emailView, successView

urlpatterns = [
	path('',TemplateView.as_view(template_name='contact-us.html'),name='contact'),
    path('email/', emailView, name='email'),
    path('success/', successView, name='success'),
]