#  book = [{
#     'ad':'Sherlock Holmes',
#     'yazar':'Artur Konan Doylun',
#     'sehifeSayi':'200',
#     'capİli':'1887-ci ildə'
#  }] 
# print(book)



# showBook={}

# showBook["ad"] = 'Sherlock Holmes'
# showBook["yazar"] = 'Artur Konan Doylun'
# showBook["sehifeSayi"] = "200"
# showBook["capIli"] = "1887-ci ildə"

# print(showBook)


# showBook = input("Kitabin adi ne olsun ")

# print(showBook)

def new_func():
    showBook = [{
    'ad':'Sherlock Holmes',
    'yazar':'Artur Konan Doylun',
    'sehifeSayi':'200',
    'capİli':'1887-ci ildə'
    }] 
    print(showBook)

new_func()

def changeBookInfo():
    ad = input("Kitabin adinin deyishin ")
    showBook = [{
    'ad':ad,
    'yazar':'Artur Konan Doylun',
    'sehifeSayi':'200',
    'capİli':'1887-ci ildə'
    }]  
    print(showBook)

changeBookInfo()        