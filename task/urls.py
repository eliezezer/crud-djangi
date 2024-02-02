from django.urls import path,include
from rest_framework import routers
from task import views
#api versionando

router=routers.DefaultRouter()
router.register(r'task',views.TaskView,'task')
#urlpatterns = [
#    path('api/v1/',include(router.urls)),
#]
urlpatterns = [
    path('api/v1/',include(router.urls)),
    path('api/v2/',views.TaskListAPIView.as_view(),name='task-list'),
    path('api/v2/task/<int:pk>/',views.TaskEditAPIView.as_view(),name='task-list'),
    path('api/v2/delete-task/<int:pk>/',views.TaskEditAPIView.as_view(),name='delete-task'),
    path('api/v2/edit-task/<int:pk>/',views.TaskEditAPIView.as_view(),name='edit-task')

]
