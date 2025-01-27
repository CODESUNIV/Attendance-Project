FROM python:3.9-slim

WORKDIR /app

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . .
EXPOSE 15000
EXPOSE 5005
CMD ["python", "my_flask.py"]
