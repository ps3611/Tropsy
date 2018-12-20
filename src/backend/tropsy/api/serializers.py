from rest_framework import serializers
from api.models import Player

class PlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Player
        fields = (
            'id',
            'first_name',
            'last_name',
            'country',
            'image_url',
            'age',
            'ranking_tour',
            'ranking_tour_highest',
            'ranking_tour_change',
            'ranking_elo',
            'ranking_elo_highest',
            'ranking_elo_change',
            'current_tournament_name',
            'current_tournament_round',
            'in_tournament',
            'video',
            'points_tour_live',
            'points_tour_next',
            'points_tour_change',
            'elo_tour_live',
            'elo_tour_next',
            'elo_tour_change',
            'next_prob'
        )
