from django.urls import path
from .views import *

urlpatterns = [
    path('main_world/',MainWorldListAPIView.as_view(),name = 'main_world'),

    path('about_me/',AboutMeListAPIView.as_view(),name = 'about_me'),

    path('review/',ImgReviewAPIView.as_view(),name = 'review'),

    path('consultation/', ConsultationViewSet.as_view(), name='consultation-list'),

    path('registration/', RegistrationViewSet.as_view(), name='registration-create'),

    path('my_services/', My_ServicesViewSet.as_view(), name='my-services'),

    path('services_list/', ServicesViewSet.as_view(), name='service-list'),

    path('services_detail/<int:pk>/', ServicesDetailAPIView.as_view(), name='service-detail'),

    path('questions/',QuestionsListAPIView.as_view(),name = 'questions'),

    path('public_offer/',Public_offerList.as_view(),name  = 'public_offer'),

    path('public_offer_text/',Public_offerTextList.as_view(),name = 'public_offer_text'),

    path('safety/',SafetyList.as_view(),name = 'safety'),

    path('safety/',SafetyMainListAPIView.as_view(),name = 'safety_class'),

    path('my_contact/',My_conactListAPIView.as_view(),name = 'my_contact'),
]
