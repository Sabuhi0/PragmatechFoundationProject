from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello():
    return "<h1 style='font-family: sans-serif;'>Hello world</h1>"

if __name__=='__main__':
    app.run(debug=True)