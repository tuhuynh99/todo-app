from django.urls import path

from . import views

urlpatterns = [
    path('home/', views.MyReactView.as_view(), name='home'), 
    path('login/', views.MyReactView.as_view(), name='login' )
]