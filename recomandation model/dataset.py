import pandas as pd
import random
import pickle


properties = pd.DataFrame({
    "id": range(1, 201),
    "title": [f"Property {i}" for i in range(1, 201)],
    "price": [random.randint(100000, 2000000) for _ in range(200)],
    "location": random.choices(['Downtown', 'Suburbs', 'City Center', 'Beach', 'Rural'], k=200),
    "type": random.choices(['Residential', 'Commercial', 'Vacation'], k=200)
})


properties['features'] = properties['location'] + " " + properties['type']


with open('properties.pkl', 'wb') as f:
    pickle.dump(properties, f)


user_history = {
    f"user_{i}": random.sample(list(properties['id']), random.randint(5, 20)) for i in range(1, 101)
}


with open('user_history.pkl', 'wb') as f:
    pickle.dump(user_history, f)

print("Datasets created and saved as pickle files.")
