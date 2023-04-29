import openai
import os

# Load your API key from an environment variable
api_key = os.getenv("OPENAI_API_KEY")

# Authenticate with the API key
openai.api_key = "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"

# Set up the API request
prompt = "Write a summary of the following text: 'The Great Gatsby is a novel by F. Scott Fitzgerald. It tells the story of Jay Gatsby, a mysterious millionaire, and his unrequited love for the beautiful Daisy Buchanan.'"
response = openai.Completion.create(
    engine="davinci",
    prompt=prompt,
    max_tokens=100,
    n=1,
    stop=None,
    temperature=0.8,
)

print(response)

# Extract and print the response
summary_text = response.choices[0].text.strip()
print(summary_text)

