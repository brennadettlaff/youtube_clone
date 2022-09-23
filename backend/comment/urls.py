from django.urls import path
from . import views

urlpatterns = [
    path('get-comment/<str:video_id>/', views.comment_list),
    path('create/', views.comment_detail),
    path('edit/<int:pk>/', views.edit_comment),
]
