import urllib2
from bs4 import BeautifulSoup
base_url = "http://tennisabstract.com"

response = urllib2.urlopen(base_url + '/reports/atp_elo_ratings.html')
html = response.read()
soup = BeautifulSoup(html, 'html.parser')
table_rows = soup.find_all('tr')[5:]

elo_json = {}
for i in range(len(table_rows)):
    td = table_rows[i].find_all('td')
    player_name = td[1].text
    player_age = str(td[2].text)
    player_elo = str(int(round(float(td[3].text))))
    elo_json[player_name] = {
        "age": player_age,
        "elo": player_elo
    }

print(elo_json)
