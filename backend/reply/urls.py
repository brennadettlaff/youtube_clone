from django.urls import path
from . import views

urlpatterns = [
        path('view/<int:comment>/', views.reply_list),
        path('add/', views.reply_detail)
]