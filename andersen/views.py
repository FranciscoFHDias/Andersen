from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.http import Http404
from .permissions import IsOwnerOrReadOnly
from .models import Client, Referral, Partner
from .serializers import ClientCreateSerializer, ClientReadSerializer, ReferralSerializer, PartnerSerializer

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

class ReferralListView(APIView):

    permissions_classes = (IsAuthenticated,)

    def get(self, _request):
        referral = Referral.objects.all()
        serializer = ReferralSerializer(referral, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = ReferralSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=201)

        return Response(serializer.errors, status=422)

class ReferralDetailView(APIView):

    permission_classes = (IsOwnerOrReadOnly,)

    def get_referral(self, pk):
        try:
            referral = Referral.objects.get(pk=pk)
        except Referral.DoesNotExist:
            raise Http404

        return referral

    def get(self, _request, pk):
        referral = self.get_referral(pk)
        serializer = ReferralSerializer(referral)
        return Response(serializer.data)

    def put(self, request, pk):
        referral = self.get_referral(pk)
        serializer = ReferralSerializer(referral, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)

        return Response(serializer.errors, status=422)

    def delete(self, _request, pk):
        referral = self.get_referral(pk)
        referral.delete()

        return Response(status=204)

class PartnerListView(APIView):

    permissions_classes = (IsAuthenticated,)

    def get(self, _request):
        partner = Partner.objects.all()
        serializer = PartnerSerializer(partner, many=True)
        return Response(serializer.data)
