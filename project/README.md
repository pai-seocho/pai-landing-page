cicd를 위한 대상 프로젝트 


```python
poetry init

poetry install

poetry add fastapi

poetry add uvicorn

uvicorn main:app --reload
```



```python
docker build -t cicd-project .

docker run -d -p 8000:8000 cicd-project
```