import urllib2
from bs4 import BeautifulSoup
base_url = "https://www.flashscore.com"

# get player urls
response = urllib2.urlopen(base_url + '/tennis/rankings/atp/')
html = response.read()
soup = BeautifulSoup(html, 'html.parser')
playerLinks = [link['href'] for link in soup.find_all('a', href=True) if 'player' in link['href']][:200]

# fill player image dictionary
image_dict = {}
for link in playerLinks:
    link1 = base_url + link
    response = urllib2.urlopen(link1)
    html = response.read()
    soup = BeautifulSoup(html, 'html.parser')
    img_div = soup.findAll("div", {"class": "team-logo"})[0]['style']
    img_url = base_url + img_div[img_div.find("(")+1:img_div.find(")")]
    name_div = soup.findAll("div", {"class": "team-name"})[0]
    name = name_div.text.rstrip()
    print(name)
    image_dict[name] = img_url

print(image_dict)
