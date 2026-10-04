# Features

## 💅 Lint text

Automatic proofreading with [textlint](https://github.com/textlint/textlint).

```shell
yarn lint --fix
```

It is also automatically executed when pre-commit by [husky](https://github.com/typicode/husky).  
proofreading rules are set with `.textlintrc`.

## 📝 Convert MD to PDF

You can generate PDF with [md-to-pdf](https://www.npmjs.com/package/md-to-pdf).

```shell
yarn build:pdf
```

The output PDF can be styled as you like with CSS. Edit the `pdf-configs/style.css`.  

## 🌐 Site with VitePress

The site is built with [VitePress](https://vitepress.dev/) and deployed to GitHub Pages on every push to `main`.

```shell
yarn docs:dev
```

`resolutions.vite` in `package.json` forces vite 6 because VitePress 1.x depends on vite 5, which has unpatched vulnerabilities.  
Remove it after upgrading to a stable VitePress 2.

## 🛠 Create release

When you push with a `v**` tag, GitHub Actions will run the build, generate the PDF, create a Release, and register the PDF to Assets.

```shell
git commit -m "add job"
git tag v1.0
git push origin --tags
```

## 📆 Remind update

Automatically generate issues every three months with GitHub Actions Schedules triggers to prompt you to update your resume.

To change the duration or stop the job, edit `.github/workflows/create-issue.yml`.  
To change the issue contents, edit `.github/ISSUE_TEMPLATE.md`.
