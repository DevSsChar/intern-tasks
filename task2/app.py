import streamlit as st
from chatbot.core import FAQChatbot

st.title("🤖 FAQ Chatbot")
bot = FAQChatbot("data/faqs.json")

user_query = st.text_input("Ask a question:")
if user_query:
    response = bot.get_response(user_query)
    st.markdown(f"**Bot:** {response}")
