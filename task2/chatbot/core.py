import json
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from chatbot.utils import preprocess

class FAQChatbot:
    def __init__(self, faq_path):
        with open(faq_path, 'r') as file:
            self.faqs = json.load(file)

        self.original_questions = list(self.faqs.keys())
        self.cleaned_questions = [preprocess(q) for q in self.original_questions]
        self.answers = list(self.faqs.values())
        
        self.vectorizer = TfidfVectorizer()
        self.question_vectors = self.vectorizer.fit_transform(self.cleaned_questions)

    def get_response(self, user_query):
        cleaned_query = preprocess(user_query)
        query_vector = self.vectorizer.transform([cleaned_query])

        similarity = cosine_similarity(query_vector, self.question_vectors)
        best_match = similarity.argmax()
        confidence = similarity[0][best_match]

        if confidence > 0.3:
            return self.answers[best_match]
        else:
            return "Sorry, I don't have an answer for that."
