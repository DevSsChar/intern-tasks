import streamlit as st
from googletrans import Translator, LANGUAGES

translator = Translator()

st.title("🌐 Language Translation Tool")
st.markdown("Translate text from one language to another using Google Translate API")

text_input = st.text_area("Enter text to translate:")

lang_names = list(LANGUAGES.values())
lang_codes = list(LANGUAGES.keys())

source_lang = st.selectbox("Select source language", options=["auto"] + lang_names)
target_lang = st.selectbox("Select target language", options=lang_names, index=lang_names.index("english"))

def get_lang_code(name):
    if name == "auto":
        return "auto"
    for code, lang in LANGUAGES.items():
        if lang == name:
            return code
    return "en"

def get_lang_name(code):
    return LANGUAGES.get(code, code)

if st.button("Translate"):
    if not text_input.strip():
        st.warning("Please enter some text.")
    else:
        src_code = get_lang_code(source_lang)
        dest_code = get_lang_code(target_lang)

        try:
            result = translator.translate(text_input, src=src_code, dest=dest_code)

            st.success("✅ Translation Complete")
            st.markdown(f"**Detected Language:** `{get_lang_name(result.src)}`")
            st.markdown(f"**Translated Text ({get_lang_name(dest_code)}):**")
            st.code(result.text)
        except Exception as e:
            st.error("❌ Translation failed. Please try again.")
            st.error(str(e))
