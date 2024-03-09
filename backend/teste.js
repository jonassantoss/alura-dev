let stringCode = `<!-- page heading -->
<div class='container container-dark p-y-md'>
  <div class='header-content'>
    <h1>Material Search Animation</h1>
    <h2>Usign CSS Transitions</h2>
  </div>
</div>


<!-- page content + floating button -->
<div class='container p-y-md'>
  <div class='control'>
    <div class='btn-material'></div>
`

let string2 = stringCode.replace(/\n/g, '\n')
console.log(JSON.stringify(string2))