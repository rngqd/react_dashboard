# React + TypeScript + Vite + Zustand + Antd

Тестовое задание для компании IT Pro. В основе приложения - dashboard таблица, в которой отображается список из 10 новостей.

На данный момент, функционал у приложения очень сырой.

Имеем возможность найти нужную новость в таблице по клику на кнопку поиска.

Так же реализован функционал добавления/удаления колонок через модальное окно. Данный функционал не имеет глобального хранилища, так что после перехода по роутам состояние таблицы не сохраняется.

В приложении реализовано 2 роута
* '**/**' основная страница с dashboard
* '**/about**' подробная информация о новости

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
