from flask import Flask,redirect,url_for,render_template,request
from flask_sqlalchemy import SQLAlchemy

app=Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class Todo(db.Model):
    id=db.Column(db.Integer, primary_key=True)
    title=db.Column(db.String(100))
    content=db.Column(db.Text)
    complete=db.Column(db.Boolean)

@app.route("/")
def index():
    todos = Todo.query.all()
    return render_template("index.html", todos=todos)

@app.route("/add",methods=["GET","POST"])   
def add():
    title=request.form.get("title")
    content=request.form.get("content")
    newTodo=Todo(title=title,content=content,complete = False)
    db.session.add(newTodo)
    db.session.commit()
    return redirect("/")

@app.route("/delete/<int:id>")
def delete(id):
    todo = Todo.query.filter_by(id=id).first()
    db.session.delete(todo)
    db.session.commit()
    return redirect("/")

@app.route("/edit/<int:id>", methods=["GET","POST"])
def edit(id):
    edit = Todo.query.filter_by(id=id).first()
    if request.method == "POST":
        edit = Todo.query.filter_by(id=id).first()
        edit.title=request.form['title']
        edit.content=request.form['content']
        db.session.commit()
        return redirect(url_for("index"))
    return render_template("edit.html",edit=edit)

if __name__ == "__main__":
    db.create_all()
    app.run(debug=True)
