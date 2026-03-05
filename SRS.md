# Software Requirements Specification (SRS)
## Модель клиента

{
  id: number
  name: string
  email: string
  status: "active" | "inactive" | "blocked"
  balance: number | string | null
  createdAt: string | null
}

В данных могут встречаться:
- дублирующиеся id
- некорректные даты
- balance как строка
- balance = null
- отрицательный баланс

## Требуется

1. Загрузка клиентов из API
2. Таблица клиентов
3. Фильтрация по статусу
4. Поиск по имени
5. Сортировка по балансу и дате
6. Обработка loading / error

## Логическая задача

Реализовать функцию:

function isVip(client): boolean

VIP если:
- balance > 1000
- зарегистрирован более 30 дней назад
- status !== "blocked"

createdAt и balance могут быть некорректными.

## Что сдавать
- Репозиторий или архив
- DECISIONS.md
- Инструкцию по запуску
