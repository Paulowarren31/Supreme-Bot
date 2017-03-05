#scrapes Supreme's store for item codes
# by Paulo Warren 3/5/17

from bs4 import BeautifulSoup
from urllib.request import urlopen
import json

url = 'http://www.supremenewyork.com/shop/all'
content = urlopen(url).read()
soup = BeautifulSoup(content, 'html.parser')

with open('items.json', 'r') as f:
  data = json.load(f)

add_c = 0
print('starting scan')
for img in soup.find_all('img'):
  link = img.parent.get('href')
  url = 'http://www.supremenewyork.com' + link

  specific_content = urlopen(url)
  s_soup = BeautifulSoup(specific_content, 'html.parser')

  title_split = str(s_soup.title.string.encode('utf-8'))[11:-1].split(' - ')

  title = title_split[0]
  color = title_split[1]
  alt = img.get('alt')

  item = {
      'title': title,
      'color': color,
      'alt': alt
      }

  if item not in data['items']:
    print('found new item ' + title + ' ' + color)
    add_c += 1
    data['items'].append(item)

with open('items.json', 'w') as f:
  if(add_c != 0):
    json.dump(data, f)
    print('found ' + str(add_c) + ' new items and saved them')
