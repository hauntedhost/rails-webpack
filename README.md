# Rails with Webpack

Example for very minimal integration of Rails with Webpack, React, Redux and hot reloading via [react-transform-hmr](https://github.com/gaearon/react-transform-boilerplate).

Involves only a few changes on Rails end (~30 lines of code) and no magic gems. Compatible with Heroku via [multiple buildpacks](https://devcenter.heroku.com/articles/using-multiple-buildpacks-for-an-app) (heroku/nodejs and heroku/ruby, in that order).

![React Hot Reloading Demo](http://i.imgur.com/Ux08chq.gif)

All frontend related code and Webpack configuration lives in `./frontend` (e.g., React components live in `./frontend/app/components`).

# Usage

```bash
bundle install && npm install
rake db:setup
foreman start -f Procfile.dev
```

ᕕ( ᐛ )ᕗ

---
Brewed by [Sean Omlor](http://seanomlor.com). [MIT License](/LICENSE).
