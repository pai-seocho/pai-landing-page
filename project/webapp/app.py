from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from webapp.routers import base
import logging

logger = logging.getLogger(__name__)


def create_app() -> FastAPI:
    """FastAPI 인스턴스를 생성

    router를 생성하여 FastAPI 인스턴스에 등록

    Returns:
        FastAPI 인스턴스
    """
    app = FastAPI(
        title="CICD Project",
        description="CICD 템플릿 Project."
    )

    app.include_router(
        base.router,
        tags=['Product']
    )

    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    return app
