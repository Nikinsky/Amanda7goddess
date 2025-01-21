from .models import *
from modeltranslation.translator import TranslationOptions,register

@register(AboutMe)
class AboutMeTranslationOptions(TranslationOptions):
    fields = ('bio','profession','about_me')


@register(MainWorld)
class MainWorldTranslationOptions(TranslationOptions):
    fields = ('profession', 'main_text', 'follower')


@register(Review)
class ReviewTranslationOptions(TranslationOptions):
    fields = ('feedback',)


@register(Consultation)
class ConsultationTranslationOptions(TranslationOptions):
    fields = ('title', 'description', 'duration', 'format', 'feedback')


@register(Consultation_Keys)
class Consultation_keysTranslationOptions(TranslationOptions):
    fields = ('keys',)


@register(My_Services)
class My_ServicesTranslationOptions(TranslationOptions):
    fields = ('title',)



@register(Services)
class ServicesTranslationOptions(TranslationOptions):
    fields = ('name_services','text1','text2','text3','text4',)



@register(Services_Keys)
class Services_KeysTranslationOptions(TranslationOptions):
    fields = ('keys',)


@register(ImgServices)
class ImgServicesTranslationOptions(TranslationOptions):
    fields = ('services_text',)



@register(Questions)
class QuestionsTranslationOptions(TranslationOptions):
    fields = ('questions','answer')


@register(Public_offer)
class Public_offerTranslationOptions(TranslationOptions):
    fields = ('main',)


@register(Public_offerText)
class Public_offerTextTranslationOptions(TranslationOptions):
    fields = ('title','text')


@register(Safety)
class QuestionsTranslationOptions(TranslationOptions):
    fields = ('title','text')

@register(SafetyMain)
class QuestionsTranslationOptions(TranslationOptions):
    fields = ('safety_name',)

