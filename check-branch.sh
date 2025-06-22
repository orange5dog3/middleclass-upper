#!/bin/bash

# 現在のブランチを取得
branch=$(git rev-parse --abbrev-ref HEAD)

# カラー設定
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

if [ "$branch" = "main" ]; then
    echo -e "${RED}⚠️  警告: 現在mainブランチにいます！${NC}"
    echo -e "${YELLOW}💡 開発用ブランチを作成することを推奨します：${NC}"
    echo -e "   ${GREEN}git checkout -b feature/your-feature-name${NC}"
    echo ""
else
    echo -e "${GREEN}✅ 現在のブランチ: $branch${NC}"
fi 