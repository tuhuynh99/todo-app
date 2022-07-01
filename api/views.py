import json

from .utils import getTodoList, getTodoDetail, updateTodo, deleteTodo
from .models import Todo
from django.shortcuts import render
from rest_framework.decorators import api_view
from .serializers import TodoSerializer
# Create your views here.

@api_view(['GET', 'POST'])
def TodoListView(request):
        if request.method == 'GET':
            return getTodoList(request)

        if request.method == 'POST':
            pass

@api_view(['GET','PUT', 'DELETE'])
def TodoView(request, id):
    if request.method == 'GET':
        return getTodoDetail(request, id)

    if request.method == 'PUT':
        return updateTodo(request, id)

    if request.method == 'DELETE':
        return deleteTodo(request, id)