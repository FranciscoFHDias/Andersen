from django.urls import path
from .views import ClientListView, ClientDetailView, ReferralListView, ReferralDetailView, PartnerListView

urlpatterns = [
    path('clients/', ClientListView.as_view()),
    path('clients/<int:pk>/', ClientDetailView.as_view()),
    path('referrals/', ReferralListView.as_view()),
    path('referrals/<int:pk>/', ReferralDetailView.as_view()),
    path('partners/', PartnerListView.as_view()),
]
