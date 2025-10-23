from pathlib import Path
from app.modules.AI.pipeline.ingest.utils import process_docx, process_md



def process_files(folder_path: Path):
    # Dictionary that stores-> key: filename -> value : a list with a unique Document object
    results = {}

    if not folder_path.exists() or not folder_path.is_dir():
        print(f"La ruta especificada no existe o no es un directorio: {folder_path}")
        exit(1)
    # Process all files in the folder and store results in results
    for file in folder_path.iterdir():
        if file.is_file():
            ext = file.suffix.lower()
            if ext == ".pdf":
                results[file.name] = process_pdf(file)
            elif ext == ".docx":
                results[file.name] = process_docx(file)
            elif ext == ".md":
                results[file.name] = process_md(file)
            else:
                print(f"Tipo de archivo no soportado: {file.name}")

    return results

    # Show first 500 characters of results. Example for one specific file
    #if "Manual_Politicas_Corporativas.docx" in results:
    #    doc_example = results["Manual_Politicas_Corporativas.docx"][0]
    #    print("Metadata:", doc_example.metadata)
    #    print("Texto:", doc_example.page_content[:500])