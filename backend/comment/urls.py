from django.urls import path
from . import views

urlpatterns = [
    path('<str:video_id>/', views.comment_list),
    path('create/<str:video_id>/', views.comment_detail)
]
