from flask import Flask,render_template,request

app=Flask(__name__)
xeberler=[
    {
        'id':1,
        'basliq':'Əfqanıstan-İran sərhədində döyüşlər dayandırılıb',
        'xeber':"""
        Təhsil İran sərhədçiləri və “Taliban” hərəkatının silahlıları arasında İran-Əfqanıstan sərhədində gedən atışma və artilleriya zərbələri mübadiləsi dayandırılıb.

Bu barədə “Etemad” qəzeti məlumat yayıb. Qeyd olunub ki, mövcud prosedurlara əsasən, tərəflər insidentlə bağlı təcili iclas keçirməlidir."""
    },
    {
        'id':2,
        'basliq':'Azərbaycan və Ermənistanın xarici işlər naziri İsveçdə görüşəcək',
        'xeber':"""
        Dekabrın 2-də Azərbaycanın xarici işlər naziri Ceyhun Bayramovla Ermənistanın xarici işlər naziri Ararat Mirzoyan İsveçdə görüşəcək.
Trend-in məlumatına görə, bunu Avropa İttifaqının xarici siyasət qurumunun nümayəndəsi Lük Pyer Devin deyib."""
    }
]

@app.route('/news')
def news():
    return render_template('news.html',news=xeberler)
@app.route('/news/<int:id>')
def single(id):
    for xeber in xeberler:
         if xeber['id']==id:
             return render_template('single.html',xeber=xeber)
    
    return 'Empty data'

if __name__=='__main__':
    app.run(debug=True)