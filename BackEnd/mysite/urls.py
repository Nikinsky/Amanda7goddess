from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from rest_framework import permissions

# Создаем схему API документации с поддержкой языков
schema_view = get_schema_view(
    openapi.Info(
        title="API Documentation",
        default_version='v1',
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

# Определяем URL-паттерны для каждого языка
api_patterns = [
    path('', include('phisology.urls')),  # Основные эндпоинты API
    path('admin/', admin.site.urls),  # Админ-панель
]

# Основные URL-паттерны, которые будут доступны на всех языках
base_urlpatterns = [
    # Оборачиваем api_patterns в языковой префикс
    path('api/<str:lang>/', include(api_patterns)),

    # Swagger документация доступна без языкового префикса
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0),
         name='schema-swagger-ui'),

    # URL для переключения языков
    path('i18n/', include('django.conf.urls.i18n')),
]

# Начинаем с базовых URL
urlpatterns = base_urlpatterns

# Добавляем обработку статических файлов в режиме разработки
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)