from django.utils.translation import activate
from django.urls import resolve
from django.conf import settings

class LanguageMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        try:
            # Извлекаем язык из URL
            resolved = resolve(request.path_info)
            if 'lang' in resolved.kwargs:
                language = resolved.kwargs['lang']
                # Проверяем, поддерживается ли язык
                if language in [lang[0] for lang in settings.LANGUAGES]:
                    activate(language)
                else:
                    # Если язык не поддерживается, используем язык по умолчанию
                    activate(settings.LANGUAGE_CODE)
        except:
            # В случае ошибки используем язык по умолчанию
            activate(settings.LANGUAGE_CODE)

        return self.get_response(request)