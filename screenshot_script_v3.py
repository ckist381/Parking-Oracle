#------------------------------------
# created 4/17/2021
# last edit: 5/5/2021 

#no window: 
#https://sqa.stackexchange.com/questions/2609/running-webdriver-without-opening-actual-browser-window

from selenium import webdriver #open the webdriver
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.support.ui import WebDriverWait 
from selenium.webdriver.support import expected_conditions as EC 
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.firefox.options import Options as FirefoxOptions
import time

def getScreenshot(url, num):

#SETUP & OPTIONS -------------------------------------
    options = FirefoxOptions()
    options.add_argument("--headless") #comment out to view while it runs
    driver = webdriver.Firefox(options=options, executable_path=r'C:\Users\lucym\Documents\code\SeleniumPython\geckodriver.exe') #tells where the driver for firefox is 

#LOADING -------------------------------------
    driver.get(url)   

    try:
        #wait until video loads on page before doing anything
        #documentation: https://selenium-python.readthedocs.io/waits.html
        element = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.ID, "player-container"))
        )
    except:
        print("Page failed to load properly!")
        driver.quit()
    finally:
        #put video in full screen then pause to make sure it's at begining    
        #snatched from: https://stackoverflow.com/questions/42607714/click-youtube-button-selenium-python-check-my-code

        fullscreen = driver.find_element_by_xpath("//button[@class='ytp-fullscreen-button ytp-button']") 
        fullscreen.click()
        pauseBTN = driver.find_element_by_xpath("//button[@class='ytp-play-button ytp-button']")
        pauseBTN.click()
        print("Page is ready to be captured.")

#TAKING SCREENSHOTS -------------------------
    time.sleep(1) #buffer so video can load
    driver.save_screenshot('screenshot'+ str(num) + '.png')
    print("Screenshot Captured")
    driver.quit()

#for future: change to read from file?  
URLs = ['https://youtu.be/GuZnL1zaAKM', 'https://youtu.be/mCXNCUxAtSw', 'https://youtu.be/8x0HH5RyLJo', 'https://youtu.be/wJ-x0kkYzlk', 'https://youtu.be/gocIDkeAaKo']

#LOOP THROUGH PROVIDED URLS -------------------------
num = 1
for url in URLs:    
    getScreenshot(url,num)
    print("Screenshot #" + str(num) + " has been taken!")
    num = num+1

print("Screenshots Completed.")