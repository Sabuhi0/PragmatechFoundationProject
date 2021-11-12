adlar=[
    'Fezail',
    'Rehman',
    'Elmar',
    'Sebuhi',
    'Aysel',
    'Murad',
    'Vesile',
    'Ravi'
]

print(
    """
    - Butun adlari ekrana cap eden metod yazin adlariGoster()
    """
)

def adlariGoster():
    for i in range(len(adlar)):
        print(i,adlar[i])
adlariGoster()

print(
    """
    - Listin cut yerde duran elementlerini gosteren metod yazin cutYerdekiler()
    """
)
def cutYerdekiler():
    for i in range(len(adlar)):
        if i % 2 == 0:
            print(i,adlar[i])
cutYerdekiler()

print(
    """
    - Listi elifba sirasina gore siralayan metod yazin listiSirala()
    """
)
def listiSirala():
    adlar.sort()
    adlariGoster()
listiSirala()

print(
    """
    - Listi icinde e herifi olanlari goster()
    """
)
def icindeEHerfiOlaniTap():
    for ad in adlar:
        if ad.find('e')!=-1:
            print(f'{ad} sozunde e herfi var')
        else:
            print(f'{ad} sozunde e herfi yoxdur')
icindeEHerfiOlaniTap()