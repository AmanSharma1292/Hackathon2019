from flask import Flask
app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/<address>')
def show_address(address):
    return 'Address %s' % address