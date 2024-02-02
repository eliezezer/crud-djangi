from rest_framework import viewsets,status
from rest_framework.response import Response
from .serializer import TaskSerializers
from .models import Task
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404
# Create your views here.

class TaskView(viewsets.ModelViewSet):
    serializer_class=TaskSerializers
    queryset=Task.objects.all()

class TaskListAPIView(APIView):
    def get(self,request):
        tasks=Task.objects.all()
        serializers=TaskSerializers(tasks,many=True)
        #print(serializers.data)
        return Response(serializers.data, status=status.HTTP_200_OK)
    def post(self,request):
        serializer=TaskSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
class TaskEditAPIView(APIView):
    def get(self,request,pk):
        task=get_object_or_404(Task,pk=pk)
        serializer=TaskSerializers(task)    
        return Response(serializer.data,status=status.HTTP_200_OK)
    def put(self,request,pk):
        task=get_object_or_404(Task,pk=pk)
        serializer=TaskSerializers(task,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    def delete(self,request,pk):
        task=get_object_or_404(Task,pk=pk)
        task.delete()
        response_data={
            'message':'Tarea eliminada',
            'status':'succes'
        }
        return Response(response_data, status=status.HTTP_204_NO_CONTENT)