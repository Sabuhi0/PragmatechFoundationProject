data = [
    {
        'id':1,
        'name':'Jhon',
        'surname':'Doe'
    },
     {
        'id':2,
        'name':'Eh',
        'surname':'Quliyev'
    },
    {
        'id':3,
        'name':'Sabir',
        'surname':'Eliyev'
    },
    {
        'id':4,
        'name':'Qulu',
        'surname':'Quliyev'
    },
    {
        'id':5,
        'name':'Sabir',
        'surname':'Memmedov'
    }
]

def istifadecileriGormek():
    for i in data:
        print(i)

def istifadeciTap():
    name = str(input('Axtardiginiz adamin adini daxil edin, bu size hemen adamin melumatlarini verecek '))
    for i in data:
        if name == i['name']:
            print(i)

def istifadeciId():
    for i in data:
        if i['id'] > 2:
            print(i)

def enboyukID():
    maxId = max(data, key=lambda a:a ['id'])
    print(maxId)


print(
    """
   - Proqramdan cixmaq ucun 0 yazin
   - Istifadecileri gormek ucun 1 yazin     
   - Istifadecileri adinindan melumatlarini gormek ucun 2 yazin
   - Id-si 2 den boyuk olan istifadecileri gormek ucun 3 yazin
   - En boyuk id ye sahib istifadecinin melumatlarini gormek ucun 4 yazin
    """)


while(True):
    command = int(input('Istediyiniz emelyatin nomresini yazin : '))
    if command == 1:
        istifadecileriGormek()
    elif command == 2:
        istifadeciTap()
    elif command == 3:
        istifadeciId()
    elif command == 4:
        enboyukID()
    elif command == 0:
        break