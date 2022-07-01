from rest_framework.response import Response
from todo.models import Todo
from .serializers import TodoSerializer


def getTodoList(request):
    uid = request.user.id
    todos = Todo.objects.filter(user=uid)
    serializer = TodoSerializer(todos, many=True)
    return Response(serializer.data)


def getTodoDetail(request, pk):
    Todos = Todo.objects.get(id=pk)
    serializer = TodoSerializer(Todos, many=False)
    return Response(serializer.data)


def createTodo(request):
    user = request.user

    data = request.data
    todo = Todo.objects.create(
        content=data['content'],
        user=user,
        complete=data['complete']
    )
    serializer = TodoSerializer(todo, many=False)
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