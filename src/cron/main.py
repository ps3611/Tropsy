import json
import requests
import random

# ENDPOINT_URL = 'http://34.201.104.13:8000' #AWS
ENDPOINT_URL = 'http://127.0.0.1:8000'; # desktop mobile
# ENDPOINT_URL = 'http://192.168.1.23:8000'; # mobile

# # get old data
# r = requests.get(url = ENDPOINT_URL + "/players/")
# old_data = r.json()
#
# # delete old data
# for i in range(len(old_data)):
#     id = old_data[i]['id']
#     r = requests.delete(ENDPOINT_URL + "/players/"+str(id)+"/")
#     print(r.status_code, r.reason)

# load rankings json data
with open('./db/atp-rankings.json') as i:
    rankings_data = json.load(i)

# load elo json data
with open('./db/elo-rankings.json') as i:
    elo_data = json.load(i)

# load image json data
with open('./db/images.json') as i:
    image_data = json.load(i)

# load country json data
with open('./db/country.json') as i:
    country_data = json.load(i)

# post json data
for i in range(len(rankings_data)):
    player = rankings_data[i]['fields']
    is_in_tour = 0.5 < random.uniform(0, 1)
    try:
        country = country_data[player['player_country']]
    except:
        country = 'XYZ'
    try:
        elo = int(elo_data[player['player_name']]['elo'])
        age = int(round(float(elo_data[player['player_name']]['age'])))
    except:
        elo = 1000
        age = 30
    data = {
        "first_name": player['player_name'].split()[0],
        "last_name": player['player_name'].split()[1],
        "country": country,
        "image_url": image_data[player['player_name']] if player['player_name'] in image_data else image_data['Roger Federer'],
        "age": age,
        "ranking_tour": player['current_rank'],
        "ranking_tour_change": int(round(random.uniform(-1, 1)*10)) if random.uniform(0, 1)>0.7 else None,
        "current_tournament_name": "Wimbledon" if is_in_tour else None,
        "current_tournament_round": "2nd" if is_in_tour else None,
        "in_tournament": True if is_in_tour else False,
        "points_tour_live": player['player_points'],
        "points_tour_next": player['player_points'] + 150 if is_in_tour else None,
        "points_tour_change": int(round(random.uniform(-1, 1)*10))*10 if random.uniform(0, 1)>0.7 else None,
        "elo_tour_live": elo,
        "elo_tour_next": elo + 45 if is_in_tour else None,
        "elo_tour_change": int(round(random.uniform(-1, 1)*10))*10 if random.uniform(0, 1)>0.7 else None,
        "next_prob": round(random.uniform(0, 1)*100) if is_in_tour else None,
    }
    r = requests.post( ENDPOINT_URL + "/players/", data = data )
    print(r.status_code, r.reason)
