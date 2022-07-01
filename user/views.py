from django.shortcuts import render
from allauth.account.views import SignupView
# Create your views here.


class UserSignupView(SignupView):
    # change template name and path
    template_name = 'user/custom_signup.html'
    

    