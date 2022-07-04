from django.urls import path

from . import views

urlpatterns = [
    path('', views.MyReactView.as_view(), name='home'), 
]