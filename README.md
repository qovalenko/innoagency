https://shaggy-crm.web.app/ - Shaggy CRM  
https://us-central1-shaggy-crm.cloudfunctions.net/api/graphql - GraphQL сервер для Shaggy CRM  
https://api.nubble.ru/ - REST API сервер тестовых данных  
https://swagger.nubble.ru/ - SWAGGER для REST API  
https://мойшерстяной.рф  - Сайт для размещения анкет животных

Ссылка для подключения к БД (MongoDB):  
mongodb://shaggy:fG4bArMN5AyT@cluster-ineedshaggy-shard-00-00.zsweo.mongodb.net:27017,cluster-ineedshaggy-shard-00-01.zsweo.mongodb.net:27017,cluster-ineedshaggy-shard-00-02.zsweo.mongodb.net:27017/devs?ssl=true&replicaSet=atlas-cceg4u-shard-0&authSource=admin&retryWrites=true&w=majority

### Shaggy CRM
React ANT + ApoloJS = FirebaseApp  
  
### Hello
3 уровня доступа:  
Департамент: owner@nubble.ru, pass: ownerowner  
Префектура: manager@nubble.ru, pass: managermanager  
Эксплуатирующая организация: pet@nubble.ru, pass: petpet  

Теперь мы должны познакомиться и донести до Вас нашу этику написания кода.  
Мы пишем на TypeScript / NestJS / React / GraphQL / MongoDB / NEO4j  
Мы стараемся идти в ногу со временем и придерживаемся парадигмы  
Domain Driven Design  
Ещё мы знаем, что бизнес логику с фреймворком объединять нелья!  
При добавлении новой фитчи, код должен быть обособлен и не затрагивать уже написанный.  
  
### REST API
Сейчас сервер обрабатывает все запросы, но мы привыкли писать чистый код, поэтому расскажем как будет выглядеть архитектура.  
Решение будет представлять собой связку:  
NestJS сервер  
Стандартные облачный балансировщик  
Redis хранилище  
Кластер MongoDB  
Оркестрация контейнеров с помощью Kubernetes  

Разработка готового решения, по предварительной оценки должна занять 3 месяца, мы выкладываем устоявшиеся парадигмы и
фрагменты кода для того, чтобы показать силь и архитектуру, которой мы придерживаемся.  

### DDD
Пример реализации DDD шаблона  
- `application` - Ядро системы controllers, DI  
- `infrastructure` - Вызовы API, подключения к базе данных   
- `domain` - Непосредственно бизнес логика  

### DI
Код, который ярко показывает необходимость внедрения DI систем  

### PASSPORT AUTH
У нас большой опыт внедрения разных стратеги авторизации  

### HEXAGONAL
Архитектура, которая выражает устройство модульной системы  
