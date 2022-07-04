import json

from .utils import getTodoList, getTodoDetail, updateTodo, deleteTodo, createTodo
from todo.models import Todo
from django.shortcuts import render
from rest_framework.decorators import api_view
from .serializers import TodoSerializer
from django.contrib.auth.decorators import login_required

# Create your views here.


@api_view(['GET', 'POST'])
@login_required()
def TodoListView(request):
 
        if request.method == 'GET':
            return getTodoList(request)

        if request.method == 'POST':
            return createTodo(request)

@api_view(['GET','PUT', 'DELETE'])
@login_required()
def TodoView(request, id):
    if request.method == 'GET':
        return getTodoDetail(request, id)

    if request.method == 'PUT':
        return updateTodo(request, id)

    if request.method == 'DELETE':
        return deleteTodo(request, id)