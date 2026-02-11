FROM python:3.11-slim

WORKDIR app/

RUN pip install poetry

COPY webapp/__init__.py webapp/__init__.py

COPY pyproject.toml README.md ./

RUN poetry config virtualenvs.create false
RUN poetry install --no-dev

COPY webapp/ webapp/

ENTRYPOINT ["poetry", "run", "uvicorn", "webapp.app:create_app"]
CMD ["--host", "0.0.0.0", "--port", "8000", "--no-access-log", "--factory"]