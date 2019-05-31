function changeIndex ( event ) {
  if ( event.target.className == "lev4" ) return
  var elem = document.querySelector ( '.lev4' )
  elem.className = event.target.className
  event.target.className = "lev4"
}
window.onload = function () {
  document.collection = document.getElementsByTagName ( 'div' )
  for ( var i = 0; i < document.collection.length; i++ ) {
    document.collection [i].addEventListener ( 'mouseover', changeIndex )
  }
}
