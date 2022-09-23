from django.urls import path
from . import views

urlpatterns = [
        path('<int:comment>/', views.reply_list)
]