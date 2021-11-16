import os
os.chdir('/home/me/Desktop/OsModule')

# b txt
file_object = open('b.txt', 'a')
file_object.write('')
file_object.close()

# rename b.txt
os.rename('b.txt','yeniB.txt')