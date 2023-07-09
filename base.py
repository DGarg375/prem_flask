from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/profile')

def my_profile():
    response_body = {
        "name": "Divyansh",
        "about": "Hello! I'm a full stack developer that loves python and javascript"
    }
    return response_body