from fastapi import APIRouter, Depends
from app.modules.auth.schemas import RegisterRequest , LoginRequest
from app.modules.auth.service import AuthService
from app.modules.users.repository import UserRepository
from app.core.database import get_db
from app.core.security import create_access_token

router = APIRouter(prefix="/auth", tags=["Auth"])

def get_user_repo(db=Depends(get_db)):
    return UserRepository(db)


@router.post("/register")
def register_user(data: RegisterRequest, user_repo: UserRepository = Depends(get_user_repo)):
    auth_service = AuthService(user_repo)
    user = auth_service.register(data)
    return {"message": "User registered successfully", "user_id": user.id}

@router.post("/login")
def login_user(data: LoginRequest, user_repo: UserRepository = Depends(get_user_repo)):
    auth_service = AuthService(user_repo)
    user = auth_service.login(data)
    if user:
        token = create_access_token({"sub": user.id, "email": user.email, "username": user.username})
        return {"access_token": token, "token_type": "bearer"}
    return {"message": "Invalid credentials"}, 401
