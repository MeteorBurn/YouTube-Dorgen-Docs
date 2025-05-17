---
sidebar_position: 2
title: Руководство по API
---

## Руководство по API

YouTube-Parser поддерживает работу с двумя типами API:

1. **YouTube Data API v3** - официальный API YouTube
2. **InnerTube API** - внутренний API YouTube

### YouTube Data API v3

Для работы с YouTube Data API v3 необходимо иметь API-ключ. API-ключ можно получить в [Google Cloud Console](https://console.cloud.google.com/).

#### Лимиты API

YouTube Data API v3 имеет ограничения на количество запросов в день. Каждый запрос потребляет определенное количество квоты. Базовая квота составляет 10 000 единиц в день.

### InnerTube API

InnerTube API - это внутренний API YouTube, который используется самим YouTube для работы своего веб-интерфейса. Этот API не имеет официальной документации и может изменяться без предупреждения.

#### Преимущества InnerTube API

- Не требует API-ключа
- Не имеет ограничений на количество запросов
- Предоставляет больше данных, чем официальный API
