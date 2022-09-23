from django.urls import path
from . import views

urlpatterns = [
    path('', views.comment_list),
    path('all/', views.comment_detail)
]
