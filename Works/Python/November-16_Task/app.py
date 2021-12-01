import os
import shutil

def organizeFolder(folder_path) :
    location = "/Desktop/PragmatechFoundationProjectClone/PragmatechFoundationProject/Works/Python/November-16_Task/project/"
    path_one = os.path.join(location,folder_path)
    if folder_path == "Html":
        os.mkdir(path_one)
        shutil.move(os.path.join(location,"about.html"),path_one)
        shutil.move(os.path.join(location,"contact.html"),path_one)
        shutil.move(os.path.join(location,"index.html"),path_one)
        shutil.move(os.path.join(location,"work.html"),path_one)
    # elif folder_path == "Css":
    #    os.mkdir(path_one)
    #    shutil.move(os.path.join(location,"style.css"),path_one)
    #    shutil.move(os.path.join(location,"layout.css"),path_one)
    #    shutil.move(os.path.join(location,"common.css"),path_one)
    # elif folder_path == "Js":
    #     os.mkdir(path_one)
    #     shutil.move(os.path.join(location,"app.js"),path_one)
    #     shutil.move(os.path.join(location,"gallery.js"),path_one)
    #     shutil.move(os.path.join(location,"script.js"),path_one)
    # elif folder_path == "Image":
    #     os.mkdir(path_one)
    #     shutil.move(os.path.join(location,"1.jpg"),path_one)
    #     shutil.move(os.path.join(location,"2.jpg"),path_one)
    #     shutil.move(os.path.join(location,"3.jpg"),path_one)
    #     shutil.move(os.path.join(location,"7.jpg"),path_one)
    #     shutil.move(os.path.join(location,"14.jpg"),path_one)
    #     shutil.move(os.path.join(location,"22.jpg"),path_one)