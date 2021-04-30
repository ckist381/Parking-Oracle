#------------------------------------
# created 4/17/2021
# last edit: 4/29/2021 

#no window: 
#https://sqa.stackexchange.com/questions/2609/running-webdriver-without-opening-actual-browser-window

from selenium import webdriver #open the webdriver
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.support.ui import WebDriverWait 
from selenium.webdriver.support import expected_conditions as EC 
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.firefox.options import Options as FirefoxOptions

#SETUP & OPTIONS -------------------------------------
options = FirefoxOptions()
options.add_argument("--headless")
driver = webdriver.Firefox(options=options, executable_path=r'C:\Users\lucym\Documents\code\SeleniumPython\geckodriver.exe') #tells where the driver for firefox is 

#to disable headless mode: remove options
#more info: https://stackoverflow.com/questions/46753393/how-to-make-firefox-headless-programmatically-in-selenium-with-python

driver.set_window_size(1000,1000) #set window size (for zoom)

#LOADING -------------------------------------
driver.get('http://www.insecam.org/en/view/916196/') #input url (maybe make it a variable?)

timeout = 3
try:
    #wait until camera footage loads before doing anything
    element = WebDriverWait(driver, 5).until(
        EC.presence_of_element_located((By.ID, "image0"))
    )
except:
    print("Page failed to load properly!")
    driver.quit()
finally:
    print("Page loaded successfully")

#TAKING SCREENSHOTS -------------------------
#screenshot specific element
#https://www.geeksforgeeks.org/screenshot-element-method-selenium-python/

try:
    element = driver.find_element_by_id("image0") #image0 - security camera image | grab the element
except:
    print("Error: Couldn't locate camera image!")
    driver.quit()
finally:
    print("Successfully located camera image!")
    element.screenshot('C:/Users/lucym/Documents/code/SeleniumPython/screenshots/screenshot.png') 
    driver.quit()
print("All done!")

