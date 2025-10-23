from fastapi import APIRouter
from app.modules.AI.pipeline.generator.generator import generate_answer_from_db
from app.modules.AI.pipeline.pipeline import gen_and_store_embeddings
from app.modules.AI.pipeline.embeddings.embeddings import retrieve_answer
from pathlib import Path
from app.modules.AI.schemas import QueryRequest

router = APIRouter(prefix="/ai", tags=["AI"])

BASE_DIR = Path(__file__).resolve().parent  # -> /app/app/modules/AI
folder_path = BASE_DIR / "documents" / "synthetic_best"

@router.get("/run")
def run_gen_and_store_embeddings():
    gen_and_store_embeddings(folder_path)
    return {"message": "Embedding generation and storage executed successfully."}

@router.post("/retrieve_from_query")
def get_answer_from_query(request: QueryRequest):
    answer = retrieve_answer(request.query)
    return {"answer": answer}

@router.get("/siu")
def siu():
    return {"message": "SIU endpoint reached."}

@router.post("/rag_from_query")
def get_answer_from_query(request: QueryRequest):
    answer = generate_answer_from_db(request.query)
    return {"answer": answer}