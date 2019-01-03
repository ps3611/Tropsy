from django.db import models

class Player(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    image_url = models.CharField(max_length=500)
    age = models.IntegerField(null=True, blank=True)
    ranking_tour = models.IntegerField(null=True, blank=True)
    ranking_tour_highest = models.IntegerField(null=True, blank=True)
    ranking_tour_change = models.IntegerField(null=True, blank=True)
    ranking_elo = models.IntegerField(null=True, blank=True)
    ranking_elo_highest = models.IntegerField(null=True, blank=True)
    ranking_elo_change = models.IntegerField(null=True, blank=True)
    current_tournament_name = models.CharField(max_length=100, null=True, blank=True)
    current_tournament_round = models.CharField(max_length=100, null=True, blank=True)
    in_tournament = models.BooleanField(default=False)
    video = models.CharField(max_length=500, null=True, blank=True)
    points_tour_live = models.IntegerField(null=True, blank=True)
    points_tour_next = models.IntegerField(null=True, blank=True)
    points_tour_change = models.IntegerField(null=True, blank=True)
    elo_tour_live = models.IntegerField(null=True, blank=True)
    elo_tour_next = models.IntegerField(null=True, blank=True)
    elo_tour_change = models.IntegerField(null=True, blank=True)
    next_prob = models.IntegerField(null=True, blank=True)


    class Meta:
        ordering = ('-points_tour_live',)
