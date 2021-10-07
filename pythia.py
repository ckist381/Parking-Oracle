from imageai.Detection import ObjectDetection 
import os
import MySQLDatabaseScript 



def findImages(l):

    d =[] 
    for item in l: 
        if 'PNG' in item: 
            d.append(item)
    
    return d


if __name__== "__main__": 


    # Grabbing images from local directory 
    names = MySQLDatabaseScript.getNames() 

    
    
    # create detector 
    detector = ObjectDetection()

    # Getting current working directory and set model to yolo 3
    current_directory = os.getcwd()
    detector.setModelTypeAsYOLOv3()
    
    # setting path to current model
    detector.setModelPath(os.path.join(current_directory , "yolo.h5"))
    detector.loadModel()

    # for each file in file_names, do detection, spit output image to local directory
    for file in names: 
        total = 0
        file_name = MySQLDatabaseScript.getImageData(file)
        print(file_name)
        update = file_name + "_detected.PNG"
        detections = detector.detectObjectsFromImage(
            input_image = os.path.join(current_directory, file_name), 
            output_image_path = os.path.join(current_directory , update))

        for object in detections: 
            if (object["name"] == 'car'): 
                total += 1
        spaces = MySQLDatabaseScript.getSpacesTaken(file)
        MySQLDatabaseScript.updateFullPer(file, (total/spaces))

    

            
    for eachObject in detections:
        print(
            eachObject["name"] , " : ",
            eachObject["percentage_probability"], " : ",
            eachObject["box_points"] )
    print("--------------------------------")
    
    

