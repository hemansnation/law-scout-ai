from fastapi import FastAPI
import uvicorn
from app.modules.auth.router import router as auth_router
from app.modules.AI.router import router as ai_router
from app.core.database import init_db
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],       # <-- change this to the frontend URL in production
    allow_credentials=True,
    allow_methods=["*"],       # Allow POST, GET, OPTIONS, etc.
    allow_headers=["*"],       # Allow Content-Type: application/json
)

app.include_router(auth_router)
app.include_router(ai_router)

init_db()

if __name__ == "__main__":
    uvicorn.run("app.main:app", host="127.0.0.1", port=3000, reload=True)
