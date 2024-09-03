from django.urls import path
from .views import TaskListCreateView, TaskDetailView, TaskStatusUpdateView

urlpatterns = [
    path('', TaskListCreateView.as_view(), name='tasks-list-create'),
    path('<int:pk>/', TaskDetailView.as_view(), name='task-detail'),
    path('status/<int:pk>/', TaskStatusUpdateView.as_view(), name='task-status-update'),
]
