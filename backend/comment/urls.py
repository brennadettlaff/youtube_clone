from django.urls import path
from . import views

urlpatterns = [
    path('<str:video_id>/', views.comment_list),
    path('', views.comment_detail),
    path('edit/<int:pk>/', views.edit_comment),
]
