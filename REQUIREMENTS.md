Задание 
---------

Написать статическое не требующее сервера веб-приложение TreeRender:
	
1. Приложение должно иметь текстовое поле для ввода и кнопку `Отрисовать`. Пользователь вводит текстовое определение дерева в текстовое поле, например: `(1 (2 (4 5 6 (7) 108 (9)) 3))`
2. После нажатия кнопки `Отправить`, приложение должно отобразить дерево в виде псевдо-графической текстовой визуализации прямо на веб-странице. Для ввода приведенного выше должен быть следующий вывод:
    
   ```code
   1---+
       2---+
       |   4
       |   5
       |   6-----+
       |   |     7
       |   108---+
       |         9
       3
   ```
