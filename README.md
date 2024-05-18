This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Некоторые моменты

- форму поиска мне показалось логично сделать client-side компонентом. можно было бы добавить валидацию, например через react-hook-form. Но так как в задаче этого не было, делать не стал.
- поиск возвращает до 10 объектов, включая подразделения организации (так по умолчанию в API). Убирать подразделения или менять кол-во не стал.
