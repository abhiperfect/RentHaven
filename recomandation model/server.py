from flask import Flask, jsonify, request
import pickle
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

app = Flask(__name__)


with open('properties.pkl', 'rb') as f:
    properties = pickle.load(f)

with open('user_history.pkl', 'rb') as f:
    user_history = pickle.load(f)

tfidf = TfidfVectorizer(stop_words='english')
tfidf_matrix = tfidf.fit_transform(properties['features'])
cosine_sim = cosine_similarity(tfidf_matrix, tfidf_matrix)


def recommend_properties(property_id, cosine_sim=cosine_sim):
    idx = properties.index[properties['id'] == property_id][0]
    sim_scores = list(enumerate(cosine_sim[idx]))
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
    sim_scores = sim_scores[1:6]  
    property_indices = [i[0] for i in sim_scores]
    return properties[['id', 'title', 'price', 'location', 'type']].iloc[property_indices]

@app.route('/recommendations', methods=['POST'])
def get_recommendations():
    user_id = request.json.get('user_id')
    
    if user_id not in user_history:
        return jsonify({"error": "User not found"}), 404
    
    
    viewed_properties = user_history[user_id]
    
    
    last_viewed_property_id = viewed_properties[-1]
    
    recommendations = recommend_properties(last_viewed_property_id)
    
    return recommendations.to_json(orient='records')

@app.route('/add_history', methods=['POST'])
def add_history():
    user_id = request.json.get('user_id')
    property_id = request.json.get('property_id')

    if user_id not in user_history:
        user_history[user_id] = []

    user_history[user_id].append(property_id)

    
    with open('user_history.pkl', 'wb') as f:
        pickle.dump(user_history, f)

    return jsonify({"message": "History updated"}), 200

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
