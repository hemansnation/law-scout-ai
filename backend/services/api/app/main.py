from fastapi import FastAPI
import uvicorn
from app.modules.auth.router import router as auth_router
from app.core.database import init_db

app = FastAPI()

app.include_router(auth_router)

init_db()

if __name__ == "__main__":
    uvicorn.run("app.main:app", host="127.0.0.1", port=3000, reload=True)
