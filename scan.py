#!/usr/bin/env python3

#scrapes Supreme's store for item codes
# by Paulo Warren 3/5/17

from bs4 import BeautifulSoup
from urllib.request import urlopen
from datetime import datetime
import json
import time


url = 'http://www.supremenewyork.com/shop/all'
content = urlopen(url).read()
soup = BeautifulSoup(content, 'html.parser')
results = []

add_c = 0
print('starting scan')
for img in soup.find_all('img'):
  try:
    link = img.parent.get('href')
    url = 'http://www.supremenewyork.com' + link

    specific_content = urlopen(url)
    s_soup = BeautifulSoup(specific_content, 'html.parser')
    title_split = str(s_soup.title.string.encode('ascii', errors='ignore'))[2:-1].split(' - ')

    title = title_split[0]
    color = title_split[1]
    alt = img.get('alt')

    item = {
        'title':  title,
        'color': color,
        'itemCode':  alt,
        }

    results.append(item)
    print('found new item ' + title + ' ' + color + ' ' + alt)
  except Exception as e:
    print(e)
    continue

with open('results.txt', 'w+') as f:
    for item in results:
        title = item['title']
        color = item['color']
        itemCode = item['itemCode']
        f.write(title + ' -- ' + color + ' -- ' + itemCode + '\n')
print('Scan finished, saved to results.txt')
