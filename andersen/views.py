from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.http import Http404
from .permissions import IsOwnerOrReadOnly
from .models import Client
from .serializers import ClientCreateSerializer, ClientReadSerializer

# Create your views here.
class ClientListView(APIView):

    permissions_classes = (IsAuthenticated,)

    def get(self, _request):
        client = Client.objects.all()
        serializer = ClientReadSerializer(client, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = ClientCreateSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=201)

        return Response(serializer.errors, status=422)

class ClientDetailView(APIView):

    permission_classes = (IsOwnerOrReadOnly,)

    def get_client(self, pk):
        try:
            client = Client.objects.get(pk=pk)
        except Client.DoesNotExist:
            raise Http404

        return client

    def get(self, _request, pk):
        client = self.get_client(pk)
        serializer = ClientReadSerializer(client)
        return Response(serializer.data)

    def put(self, request, pk):
        client = self.get_client(pk)
        serializer = ClientCreateSerializer(client, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)

        return Response(serializer.errors, status=422)

    def delete(self, _request, pk):
        client = self.get_client(pk)
        client.delete()

        return Response(status=204)
