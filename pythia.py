from imageai.Detection import ObjectDetection 
import os
from mySQLDatabaseScipt import *



def findImages(l):

    d =[] 
    for item in l: 
        if 'PNG' in item: 
            d.append(item)
    
    return d


if __name__== "__main__": 


    # Grabbing images from local directory 
    file_names = 
    
    # create detector 
    detector = ObjectDetection()

    # Getting current working directory and set model to yolo 3
    current_directory = os.getcwd()
    detector.setModelTypeAsYOLOv3()
    
    # setting path to current model
    detector.setModelPath(os.path.join(current_directory , "yolo.h5"))
    detector.loadModel()

    # for each file in file_names, do detection, spit output image to local directory
    for file in file_names: 
        total = 0
        update = file.split(".")[1] + "_detected.PNG"
        detections = detector.detectObjectsFromImage(
            input_image = os.path.join(current_directory, file), 
            output_image_path = os.path.join(current_directory , update))

        for object in detections: 
            if (object["name"] == 'car'): 
                total += 1
        
        # total/#_of_spaces 

    

            
    for eachObject in detections:
        print(
            eachObject["name"] , " : ",
            eachObject["percentage_probability"], " : ",
            eachObject["box_points"] )
    print("--------------------------------")
    
    

