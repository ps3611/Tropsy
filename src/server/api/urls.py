from django.urls import path, include
from django.contrib import admin
from rest_framework.routers import DefaultRouter
from api import views

router = DefaultRouter()
router.register(r'rankings/atp', views.PlayerViewSet)
router.register(r'rankings/elo', views.PlayerViewSetElo)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
]
