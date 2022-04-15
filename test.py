from subprocess import Popen, PIPE
from socket import socket, AF_INET, SOCK_STREAM
from time import sleep

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException


def active_port(port):
    s = socket(AF_INET, SOCK_STREAM)
    res = s.connect_ex(("localhost", port))
    s.close()
    return res == 0


if __name__ == "__main__":
    print("Starting server...")
    server = Popen(["yarn", "dev"], stdout=PIPE)

    while not active_port(3000):
        sleep(0.25)

    driver = webdriver.Chrome()
    driver.get("http:localhost:3000/blog")

    links = driver.find_elements(by=By.TAG_NAME, value="a")
    hrefs = [link.get_attribute("href") for link in links]

    failure = False

    for href in hrefs:
        driver.get(href)

        if driver.title.startswith("404"):
            failure = True
            print("❌ Page does not exist: ", href)
        else:
            try:
                title = driver.find_element(by=By.CSS_SELECTOR, value="header > h1")
                print(title.text)
            except NoSuchElementException as e:
                failure = True
                print("❌ Page does not exist: ", href)

        sleep(0.1)

        driver.back()
    driver.quit()

    print("Terminating server...")
    server.terminate()

    if failure:
        exit(1)
