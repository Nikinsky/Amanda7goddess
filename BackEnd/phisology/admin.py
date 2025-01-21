from django.contrib import admin
from .models import *

from django.contrib import admin
from modeltranslation.admin import TranslationAdmin,TranslationInlineModelAdmin





class ImgInlines(admin.TabularInline):
    model = Img
    extra = 0


class Consultation_keysInlines(TranslationInlineModelAdmin,admin.TabularInline):
    model = Consultation_Keys
    extra = 1


@admin.register(Review)
class ReviewAdmin(TranslationAdmin):
    inlines = [ImgInlines]
    class Media:
        js = (
            'http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js',
            'http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.2/jquery-ui.min.js',
            'modeltranslation/js/tabbed_translation_fields.js',
        )
        css = {
            'screen': ('modeltranslation/css/tabbed_translation_fields.css',),
        }


@admin.register(Consultation)
class ConsultationAdmin(TranslationAdmin):
    inlines = [Consultation_keysInlines]
    class Media:
        js = (
            'http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js',
            'http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.2/jquery-ui.min.js',
            'modeltranslation/js/tabbed_translation_fields.js',
        )
        css = {
            'screen': ('modeltranslation/css/tabbed_translation_fields.css',),
        }


@admin.register(AboutMe,MainWorld,My_Services,Questions,
                Safety,Public_offer,Public_offerText,SafetyMain)
class AboutMeAdmin(TranslationAdmin):
    class Media:
        js = (
            'http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js',
            'http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.2/jquery-ui.min.js',
            'modeltranslation/js/tabbed_translation_fields.js',
        )
        css = {
            'screen': ('modeltranslation/css/tabbed_translation_fields.css',),
        }


class Services_KeysInline(TranslationInlineModelAdmin,admin.TabularInline):
    model = Services_Keys
    extra = 0

class ImgServicesInline(TranslationInlineModelAdmin,admin.TabularInline):
    model = ImgServices
    extra = 0




@admin.register(Services)
class AboutMeAdmin(TranslationAdmin):
    inlines = [Services_KeysInline,ImgServicesInline]
    class Media:
        js = (
            'http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js',
            'http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.2/jquery-ui.min.js',
            'modeltranslation/js/tabbed_translation_fields.js',
        )
        css = {
            'screen': ('modeltranslation/css/tabbed_translation_fields.css',),
        }

admin.site.register(Registration)
admin.site.register(Pattern)
admin.site.register(My_contact)
