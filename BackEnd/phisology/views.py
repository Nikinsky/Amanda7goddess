from django.shortcuts import render
from rest_framework import generics,viewsets
from .models import *
from .serializer import *
from rest_framework.pagination import PageNumberPagination
from .pagination import ImgPagination


class MainWorldListAPIView(generics.ListAPIView):
    queryset = MainWorld.objects.all()
    serializer_class = MainWorldSerializer

class AboutMeListAPIView(generics.ListAPIView):
    queryset = AboutMe.objects.all()
    serializer_class = AboutMeSerializer


class ConsultationViewSet(generics.ListAPIView):
    queryset = Consultation.objects.all()
    serializer_class = ConsultationSerializer


class RegistrationViewSet(generics.CreateAPIView):
    queryset = Registration.objects.all()
    serializer_class = RegistrationSerializer



class ImgReviewAPIView(generics.ListAPIView):
    queryset = Review.objects.all()
    serializer_class = ImgReviewSerializer


class ServicesViewSet(generics.ListAPIView):
    queryset = Services.objects.all()
    serializer_class = ServicesListSerializer


class ServicesDetailAPIView(generics.RetrieveAPIView):
    queryset = Services.objects.all()
    serializer_class = ServicesSerializer




class My_ServicesViewSet(generics.ListAPIView):
    queryset = My_Services.objects.all()
    serializer_class = MyServicesSerializer




class QuestionsListAPIView(generics.ListAPIView):
    queryset = Questions.objects.all()
    serializer_class = QuestionsSerializer


class Public_offerList(generics.ListAPIView):
    queryset = Public_offer.objects.all()
    serializer_class = Public_offerSerializer


class Public_offerTextList(generics.ListAPIView):
    queryset = Public_offerText.objects.all()
    serializer_class = Public_offerTextSerializer


class SafetyList(generics.ListAPIView):
    queryset = Safety.objects.all()
    serializer_class = SafetySerializer

class SafetyMainListAPIView(generics.ListAPIView):
    queryset = SafetyMain.objects.all()
    serializer_class = SafetyMainSerializer

class My_conactListAPIView(generics.ListAPIView):
    queryset = My_contact.objects.all()
    serializer_class = My_contactSerializer