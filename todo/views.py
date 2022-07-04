from django.shortcuts import render
from django.views.generic import TemplateView
from django.contrib.auth.mixins import LoginRequiredMixin

# Create your views here.

class MyReactView(TemplateView):
    template_name = 'index.html'
    # login_url = '/accounts/login/'
    # redirect_field_name = '/home/'


    def get_context_data(self, **kwargs):
        return {'context_variable': 'value'}