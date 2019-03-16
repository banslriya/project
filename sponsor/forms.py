from django import forms
from .models import Sponsor_info

class SponsorForm(forms.ModelForm):
	class Meta:
		model = Sponsor_info
		fields = '__all__'
	