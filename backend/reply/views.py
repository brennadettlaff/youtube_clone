from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from .serializers import ReplySerializer
from .models import Reply

# Create your views here.

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def reply_list(request, comment):
    if request.method == 'GET':
        reply = Reply.objects.filter(comment=comment)
        serializer = ReplySerializer(reply, many=True)
        return Response(serializer.data)
    

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def reply_detail(request):
    if request.method == 'POST':
        serializer = ReplySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user = request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)




                