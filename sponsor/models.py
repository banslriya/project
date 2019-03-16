from django.db import models

# Create your models here.
class Sponsor_info(models.Model):	
	name = models.CharField(max_length=30)
	email = models.EmailField(max_length=30)
	contact_no = models.IntegerField(help_text="dd/mm/yyyy",null=True,blank=True)
	description = models.TextField(max_length=200)
	