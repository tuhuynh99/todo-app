from django.urls import path

from . import views

urlpatterns = [
    path('todos/', views.TodoListView, name='todo_list'), 
    path('todo/<str:id>', views.TodoView, name='todo')
]