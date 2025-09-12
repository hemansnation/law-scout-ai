FROM python:3.11-slim

# Variables para evitar archivos .pyc y mejorar logs
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Crear directorio de trabajo
WORKDIR /app

# Instalar dependencias
COPY pyproject.toml requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Copiar el código
COPY app ./app

# Permitir setear el puerto en build (default 8000)
ARG BACKEND_PORT=8000
EXPOSE ${BACKEND_PORT}

# Comando por defecto (sin puerto fijo)
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--reload"]
