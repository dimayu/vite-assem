# Vite-assem
# Заготовка сборки
Для установки пакетов используйте команду npm install

## Команды

### Запуск сервера для разработки
```shell
npm run dev
```

### Сборка проекта с оптимизацией
```shell
npm run build
```

### Components
````html
{{> header/header logo="logo" }}
````

### Images to webp
````html
<picture>
  <source srcset="img/img.webp" type="image/webp">
  <img src="img/img.jpg" alt="image" width="1200" height="797">
</picture>
````


### Sprite
```html
    <svg>
      <use xlink:href="img/sprite/sprite.svg#icon"></use>
    </svg>
```
