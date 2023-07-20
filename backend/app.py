# app.py
from flask import Flask,jsonify
from flask_cors import CORS
from routes.user_route import userRoute

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return jsonify(
        {'msg':'Welcome to Cosmos'}
        )

# Registering the userRoute blueprint
app.register_blueprint(userRoute, url_prefix='/user')

if __name__ == '__main__':
    app.run(debug=True)
