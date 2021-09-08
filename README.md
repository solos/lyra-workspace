# ngx-datasheet-demo
A web-canvas-rxjs-angular-based spreadsheet.

## DEMO
[erikyu.github.io/ngx-datasheet/](https://erikyu.github.io/ngx-datasheet/)

## Usage
- `npm install --save @angular/cdk ngx-datasheet`
- add `@import url("~ngx-datasheet/style.css");` on your `src/styles.css`
- import `NgxDatasheetModule` to your AppModule
  ```ts
  @NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
      BrowserModule,
      NgxDatasheetModule,  // import module
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  ```
- simple example
  ```angular2html
  <nd-ngx-datasheet></nd-ngx-datasheet>
  ```
  
## Development
Suggest yarn when develop
- `yarn install`
- `yarn start`

## Step 1
### TODO:
0. <del>redo/undo</del>
1. <del>background color support</del>
2. <del>borders support</del>
3. <del>cell merge</del>
4. <del>text align/valign</del>
5. <del>text wrap support</del>
  - 5.1. text wrap optimize for Chinese characters
6. <del>Virtual scroll</del>
7. add filter support
8. add formula support
9. <del>edit mode</del>
11. ......

## Step2
1. create DI framework to replace @angular DI
2. split core and add react, vue wrapper

## Step 3
1. add Flutter support
