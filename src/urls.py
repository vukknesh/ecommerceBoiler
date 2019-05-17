
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

# from django.views.generic.base import TemplateView

urlpatterns = [
  
    path('', include('frontend.urls')),
    path('api/', include('api.urls')),
    path('admin/', admin.site.urls),
]

# to load static/media files in development environment
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL,
                          document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)


