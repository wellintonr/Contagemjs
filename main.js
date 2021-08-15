var btn= document.getElementById('btncont').addEventListener('click',function(){
var Inti = document.getElementById('txtinit')
var Fim = document.getElementById('txtfim')
var Passos = document.getElementById('txtpassos')
let res = document.getElementById('result')
if(Inti.value.length===0||Fim.value.length===0||Passos.value.length===0){
  res.innerHTML='Impossível contar'
  //alert('[Erro] Dados insuficientes ')
}else{
  res.innerHTML='Cotando: '
  let i = Number(Inti.value)
  let f = Number(Fim.value)
  let p = Number(Passos.value)
  if(p<=0){
    alert('Passo invalido considerando passo 1')
    p=1
  }
  if(i < f){
    //Contagem crescente 
  for(let c=i  ; c<=f;  c+=p ){
    res.innerHTML+=`${c} \u{1f449}`
  }
   }else{ 
     //Contagem regressiva
    for(let c = i; c>=f; c-=p){
      res.innerHTML+=`${c} \u{1f449}`
    }}
  res.innerHTML+=`\u{1f3c1}`
}});