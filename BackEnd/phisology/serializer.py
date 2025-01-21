from rest_framework import serializers
from .models import *

class MainWorldSerializer(serializers.ModelSerializer):
    class Meta:
        model = MainWorld
        fields = ['profession','main_text','publication','follower','subscription','main_photo']

class AboutMeSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutMe
        fields = ['bio','profession','about_me','photo','back_round_img']


class Consultation_KeysSerializer(serializers.ModelSerializer):
    class Meta:
        model = Consultation_Keys
        fields = ['id', 'keys']


class ConsultationSerializer(serializers.ModelSerializer):
    con_keys = Consultation_KeysSerializer(many=True)
    class Meta:
        model = Consultation
        fields = ['id', 'title', 'description', 'con_keys', 'duration', 'format', 'feedback', 'price']




class RegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Registration
        fields = ['id', 'first_name', 'last_name', 'email', 'number', 'telegram','country',]




class ImgServicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImgServices
        fields = ['img','services_text']


class Services_KeysSerializer(serializers.ModelSerializer):
    class Meta:
        model = Services_Keys
        fields=  ['services_title','keys']


class ServicesListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Services
        fields = ['id','name_services','pattern']

class PatternSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pattern
        fields = ['patterns']

class  MyServicesSerializer(serializers.ModelSerializer):
    services = ServicesListSerializer(many=True)
    class Meta:
        model = My_Services
        fields = ['title','services']


class ServicesSerializer(serializers.ModelSerializer):
    photo = ImgServicesSerializer(many=True)
    services_keys = Services_KeysSerializer(many=True)
    class Meta:
        model = Services
        fields = ['name_services','text1','text2','text3','text4','price','photo','services_keys','main_img']


class ImgSerializer(serializers.ModelSerializer):
    class Meta:
        model = Img
        fields = ['img']


class ImgReviewSerializer(serializers.ModelSerializer):
    feedback_img = ImgSerializer(many=True, read_only=True)
    class Meta:
        model = Review
        fields = ['feedback','feedback_img']


class QuestionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Questions
        fields = ['questions','answer']


class Public_offerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Public_offer
        fields = ['main']


class Public_offerTextSerializer(serializers.ModelSerializer):
    class Meta:
        model = Public_offerText
        fields = ['title','text']


class SafetySerializer(serializers.ModelSerializer):
    class Meta:
        model = Safety
        fields = ['title','text']

class SafetyMainSerializer(serializers.ModelSerializer):
    class Meta:
        model = SafetyMain
        fields = ['safety_name']


class My_contactSerializer(serializers.ModelSerializer):
    class Meta:
        model = My_contact
        fields = ['email','my_phone','name','title']

