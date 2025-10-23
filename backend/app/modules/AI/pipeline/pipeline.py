from app.modules.AI.pipeline.ingest.ingest import process_files
from app.modules.AI.pipeline.ingest.chunking import chunk_documents
from app.modules.AI.pipeline.embeddings.embeddings import generate_and_store_embeddings, generate_embedding_from_question
from pathlib import Path


# ROUTE to the folder containing documents --- change as needed
#folder_path = Path("documents/synthetic_best")
# Process files in the specified folder

 
def gen_and_store_embeddings(folder_path: Path):

    # Ingesta
    results = process_files(folder_path)
    docs = results["Memoria_Anual.docx"] 

    # Chunking
    final_chunks = chunk_documents(docs)

    # Generate Embeddings
    generate_and_store_embeddings(final_chunks)



  

