from django.urls import path
from .views import ClientListView, ClientDetailView

urlpatterns = [
    path('clients/', ClientListView.as_view()),
    path('clients/<int:pk>/', ClientDetailView.as_view()),
]
