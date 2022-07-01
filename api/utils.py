from rest_framework.response import Response
from .models import Todo
from .serializers import TodoSerializer


def getTodoList(request):
    todos = Todo.objects.all()
    serializer = TodoSerializer(todos, many=True)
    return Response(serializer.data)


def getTodoDetail(request, pk):
    Todos = Todo.objects.get(id=pk)
    serializer = TodoSerializer(Todos, many=False)
    return Response(serializer.data)


def createTodo(request):
    data = request.data
    Todo = Todo.objects.create(
        body=data['body']
    )
    serializer = TodoSerializer(Todo, many=False)
    return Response(serializer.data)

def updateTodo(request, pk):
    data = request.data
    todo = Todo.objects.get(id=pk)
    serializer = TodoSerializer(instance=todo, data=data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)


def deleteTodo(request, pk):
    todo = Todo.objects.get(id=pk)
    todo.delete()
    return Response('Todo was deleted!')