from rest_framework import viewsets
from api.models import Player
from api.serializers import PlayerSerializer

class PlayerViewSet(viewsets.ModelViewSet):
    queryset = Player.objects.order_by('-points_tour_live')
    serializer_class = PlayerSerializer

class PlayerViewSetElo(viewsets.ModelViewSet):
    queryset = Player.objects.order_by('-elo_tour_live')
    serializer_class = PlayerSerializer
