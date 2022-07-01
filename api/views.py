import json

from .utils import getTodoList
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