from django.shortcuts import render
from django.shortcuts import get_object_or_404
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from comment.serializers import CommentSerializer
from comment.models import Comment
from .serializers import ReplySerializer
from .models import Reply

# Create your views here.

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def reply_list(request, comment):
    if request.method == 'GET':
        reply = Reply.objects.filter(comment=comment)
        serializer = ReplySerializer(reply, many=True)
        return Response(serializer.data)