from flask import Flask,request

app=Flask(__name__)

@app.route('/',methods=['GET','POST'])
def index():
    if request.method=='POST':
        _ad=request.form['ad']
        _pass=request.form['pass']
        if _ad=="admin" and _pass=="admin":
            return f'<h1>{_ad} Sehifemize xosh gelmisiz</h1>'
        else:
            return f'<h1>Daxil ediyiniz melumatlar sehvdi</h1>'

        
    return 'Hec zad'

@app.route('/about')
def about():
    return f"""
        <form action='/' method='POST' >
        <input type='text' placeholder='Name' name='ad'>
        <input type='password' placeholder='Password' name='pass'>
        <input type='submit' value='Gonder'>
        </form>
    """
    

if __name__=='__main__':
    app.run(debug=True)