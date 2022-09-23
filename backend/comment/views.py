from django.shortcuts import get_object_or_404
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from .serializers import CommentSerializer
from .models import Comment
from reply.models import Reply
from reply.serializers import ReplySerializer

@api_view(['GET'])
@permission_classes([AllowAny])
def comment_list(request, video_id):  
    if request.method == 'GET':
        comments = Comment.objects.filter(video_id=video_id)
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def comment_detail(request, video_id):
    if request.method == 'POST':
        comments = Comment.objects.filter(video_id=video_id)
        serializer = CommentSerializer(comments, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    # elif request.method == 'GET':
    #     comments = Comment.objects.filter(user_id=request.user.id)
    #     serializer = CommentSerializer(comments, many=True)
    #     return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def reply_list(request):
    if request.method == 'GET':
        comments = Comment.objects.filter(user_id=request.comment.id)
        serializer = ReplySerializer(comments, many=True)
        return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def edit_comment(request, pk):
    music = get_object_or_404(Comment, pk=pk)
    if request.method == 'PUT':
        serializer = CommentSerializer(music, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


