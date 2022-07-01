from rest_framework.response import Response
from .models import Todo
from .serializers import TodoSerializer


def getTodoList(request):
    todos = Todo.objects.all()
    serializer = TodoSerializer(todos, many=True)
    return Response(serializer.data)


# def getTodoDetail(request, pk):
#     Todos = Todo.objects.get(id=pk)
#     serializer = TodoSerializer(Todos, many=False)
#     return Response(serializer.data)


# def createTodo(request):
#     data = request.data
#     Todo = Todo.objects.create(
#         body=data['body']
#     )
#     serializer = TodoSerializer(Todo, many=False)
#     return Response(serializer.data)

# def updateTodo(request, pk):
#     data = request.data
#     Todo = Todo.objects.get(id=pk)
#     serializer = TodoSerializer(instance=Todo, data=data)

#     if serializer.is_valid():
#         serializer.save()

#     return serializer.data


# def deleteTodo(request, pk):
#     Todo = Todo.objects.get(id=pk)
#     Todo.delete()
#     return Response('Todo was deleted!')