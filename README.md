# Supreme-Bot
  Chrome extension to facilitate checkout on supremenewyork.com
  Buys your selected items on drop day. Has a timing feature so that you can just have it wait until drop time.

## Requirements
  1. Google Chrome
  2. VPN to somewhere in the UK
  3. Python3
  4. Beautiful Soup 4 python3 (pip3 install bs4 or pip install bs4)

## Running

  1. Navigate to "chrome://extensions" in Chrome.
  2. Enable developer mode in the corner
  3. Load unpacked extension and find where you cloned this repository. 
  4. Right click the newly added extension and go to options.
  5. To get the items you want, connect to your UK VPN and run `python3 scan.py`. This will create results.txt with info in the form "itemName -- color -- itemCode"
  6. Copy the itemCode of the item you want and paste it into the item field under the extension options. Separate by comma for multiple items.
  7. Fill out desired size and the rest of the checkout info. Separate by comma if you are fine with multiple sizes.
  8. At the time of new items released, click the extension icon and click start. 

  