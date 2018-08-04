## nothing-to-see / нечего смотреть или версия для слабовидящих
***
#Версия сайта для слабовидящих
#### Пример ее работы можно посмотреть [ЗДЕСЬ](http://54school.ru "Сайт школы")
###### Умеет менять размер шрифта, его начертание, межсимвольный и межстрочный интервалы у строк. Плюс меняет цветовую схему (ч/б, б/ч, серая), такая-же опция для изображений (цветные, серые или скрыть).



![Alt-как выглядит закрытая панель](https://puu.sh/B8qNH/6fe2ed0776.png "закрытая панель") 
***
![Alt-текст](https://puu.sh/B8rrQ/23a2a9424e.png "открытая панель")


Работает при помощи localStorage. При открытии панели сохраняет ее статус, если при переходе на другую страницу, она открыта подгружает остальные стили( после нажатия на другие кнопки), тоже из локального хранилища.
Размер шрифта и его начертание меняет через Inline стили, цветовые схемы через css-filter.

Была сделана чисто для [сайта](http://54school.ru "Сайт школы") школы.

#Установка
## Из index.html взять разметку панели

```
<div class="above">...</div>

```

Контейнеру идущему ниже в потоке присвоить
```
<div class="main-body"> ...</div>
```
Потому что выбор всех элементов для редактирования происходит по селектору 
```
document.querySelectorAll('.main-body *'); 
```

Код скрипта JS можно вставить инлайново, на ваше усмотрение. Стили находяться в nothing-to-see.css.

Картинки кнопок.
![Alt-текст](http://54school.ru/_mod_files/ce_images/loweyes/w_normal.png "кнопка сброса")![Alt-текст](http://54school.ru/_mod_files/ce_images/loweyes/f1.png "уменьшить размер шрифт")![Alt-текст](http://54school.ru/_mod_files/ce_images/loweyes/f2.png "сбросить размер шрифта")![Alt-текст](http://54school.ru/_mod_files/ce_images/loweyes/f3.png "увеличить размер шрифта")![Alt-текст](http://54school.ru/_mod_files/ce_images/loweyes/fn1.png "нет начертания")![Alt-текст](http://54school.ru/_mod_files/ce_images/loweyes/fn2.png "есть начертание")![Alt-текст](http://54school.ru/_mod_files/ce_images/loweyes/k1.png "открытая панель")![Alt-текст](http://54school.ru/_mod_files/ce_images/loweyes/k2.png "открытая панель")![Alt-текст](http://54school.ru/_mod_files/ce_images/loweyes/k3.png "открытая панель")![Alt-текст](http://54school.ru/_mod_files/ce_images/loweyes/h1.png "открытая панель")![Alt-текст](http://54school.ru/_mod_files/ce_images/loweyes/h2.png "открытая панель")![Alt-текст](http://54school.ru/_mod_files/ce_images/loweyes/h3.png "открытая панель")![Alt-текст](http://54school.ru/_mod_files/ce_images/loweyes/a1.png "открытая панель")![Alt-текст](http://54school.ru/_mod_files/ce_images/loweyes/a2.png "открытая панель")![Alt-текст](http://54school.ru/_mod_files/ce_images/loweyes/a3.png "открытая панель")![Alt-текст](http://54school.ru/_mod_files/ce_images/loweyes/c1.png "открытая панель")![Alt-текст](http://54school.ru/_mod_files/ce_images/loweyes/c2.png "открытая панель")![Alt-текст](http://54school.ru/_mod_files/ce_images/loweyes/c3.png "открытая панель")
Можете сохранить на своем хостинге. Описаны в css при помощи 
```
 background-image: url('');
```

#Проблемы
## 1. <span style="color:red">Нет полноценной работы в IE11</span>
## 2. <span style="color:red">Съежает кнопка открытия панели в firefox</span>

#Решения
## 1. <span style="color:green">Система еще развивается и дополняется...</span>
## 2. <span style="color:green">Буду рад полезному feedback'у</span>
