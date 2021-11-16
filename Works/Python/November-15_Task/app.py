# import os
# # print(
# #     """
# #     - Dekstop-da OsModule adinda bir folder yaradin
# #     """
# # )

# os.chdir('/home/me/Desktop/OsModule')

# # a txt
# file_object = open('a.txt', 'a')
# file_object.write('Men python yazmaga cehd elirem')
# file_object.close()

# # b txt
# file_object = open('b.txt', 'a')
# file_object.write('')
# file_object.close()

# # rename b.txt
# os.rename('b.txt','yeniB.txt')

# # print(os.listdir())


# # print(
# #     """
# #     - File ne vaxt yarandigi tarixi gosterdim
# #     """
# # )
# # mod_time = os.stat('PragmatechFoundationProject').st_mtime
# # print(datetime.fromtimestamp(mod_time))

# # print(os.listdir())

# print('Salam')

# import os
# # file = os.getcwd()
# # print(file)
# file = os.chdir('/home/me/Desktop/TestRepo')
# print(file)

# # # a txt
# test_file = open('a.txt', 'a')
# test_file.write('Men python yazmaga cehd elirem')
# test_file.close()

# os.rename('a.txt','Test.txt')

import os

# os.mkdir(os.path.join('/home/me/Desktop/','Join'))

# file = open(os.path.join('/home/me/Desktop/Join','join.html'),'x')

if os.path.exists(os.path.join('/home/me/Desktop/','Join')):
    print('Bunu bir defe elemisen de ne  diresirsen')
else:
    os.mkdir(os.path.join('/home/me/Desktop/','Join'))

file = open(os.path.join('/home/me/Desktop/Join','join.txt'),'w')

file.write('Salam, github-a push ele her gun :)')