# app/modules/AI/pipeline/generator/generator.py

from typing import Dict
from app.core.environment import settings
from app.modules.AI.pipeline.generator.utils import CustomDBRetriever
from langchain_openai import ChatOpenAI
from langchain.prompts import ChatPromptTemplate
from langchain.chains.combine_documents import create_stuff_documents_chain
from langchain.chains.retrieval import create_retrieval_chain

def generate_answer_from_db(query: str) -> Dict:
    # 1. Crear el retriever
    retriever = CustomDBRetriever()

    # 2. Inicializar el LLM con API key
    llm = ChatOpenAI(
        model="gpt-4o-mini",
        temperature=0.0,
        api_key=settings.OPENAI_API_KEY
    )

    # 3. Crear prompt template
    prompt = ChatPromptTemplate.from_template(
        """
        Usa el siguiente contexto para responder la pregunta.
        Si la respuesta no está en el contexto, di: "No tengo esa información".

        Contexto:
        {context}

        Pregunta:
        {input}
        """
    )

    # 4. Crear chain que combina documentos
    combine_docs_chain = create_stuff_documents_chain(
        llm=llm,
        prompt=prompt
    )

    # 5. Crear retrieval chain
    chain = create_retrieval_chain(
        retriever=retriever,
        combine_docs_chain=combine_docs_chain
    )

    # 6. Ejecutar la consulta
    result = chain.invoke({"input": query})

    # 7. Retornar respuesta + documentos fuente
    return {
        "answer": result["answer"],
        "source_documents": result.get("context", [])
    }
