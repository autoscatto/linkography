/*
 *           DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
 *                   Version 2, December 2004
 *
 *           DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
 *  TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION
 *
 *  0. You just DO WHAT THE FUCK YOU WANT TO.
 *********************************************************************/

var counter = (function() {var n = 0; return function() { return n++; };})(); //closure is the new flunitrazepam

var subdata={num:"",url:"",newline:"\n",interr:"-------------------------"}
var tone="{newline}{newline}{interr}{newline}"
var t="{newline}{num}. {url}"

function parses(tmpl,s) {
    var rex;
    for (p in s) {
        rex = new RegExp('{'+p+'}','g');
        tmpl = tmpl.replace(rex,s[p]); }
    return tmpl;
}

var Linkography = {
    do: function (u) {
      if(u != null && u != ''){
        var c=counter();
        var e = GetCurrentEditor();
        var e_type = GetCurrentEditorType();
        var pr=e.insertHTML;
        if( e_type == 'textmail' || e_type == 'text' ) {
          pr=e.insertText;
          subdata.newline="\n"
        }
        else subdata.newline="<br>";
        e.beginTransaction();
          pr('['+c+'] ');
          e.endOfDocument();
          if(c==0) pr(parses(tone,subdata));
          subdata.num=c;
          subdata.url=u;
          pr(parses(t,subdata));
        e.endTransaction();
      }
    },
    dialog: function(){
      var returnv= { accepted : false , result : ''};
      window.openDialog('chrome://linkography/content/urldialog.xul','url-insert', 'modal,centerscreen',returnv);
      if(returnv.accepted){this.do(returnv.result);}
    }
}
