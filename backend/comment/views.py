
=======
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Comment
from .serializers import CommentSerializer

# Create your views here.

@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_comments(request):
    comments = Comment.objects.all()
    serializer = CommentSerializer(comments, many=True)
    return Response(serializer.data)
>>>>>>> 32ef07752534fc875762ed6cec3ec103d66ff562
















from django.shortcuts import render
<<<<<<< HEAD
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import CommentSerializer
from .models import Comment


@api_view(['GET', 'POST'])

def comment_list(request):
    if request.method == 'GET':
        musiclibrary_songs = Comment.objects.all()
        serializer = CommentSerializer(musiclibrary_songs, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid() == True:
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE', 'PATCH'])
def comment_detail(request, pk):
    if request.method == 'GET':
        try:
            song = Comment.objects.get(pk=pk)
            serializer = CommentSerializer(song)
            return Response(serializer.data)
        except Comment.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
    elif request.method =='PUT':
        song = Comment.objects.get(pk=pk)
        serializer = CommentSerializer(song, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'DELETE':
        song = Comment.objects.get(pk=pk)
        song.delete()
        return Response(status=status.HTTP_200_OK)