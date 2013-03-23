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


var Linkography = {
    do: function (u) {
      if(u != null && u != ''){
      var c=counter();
      var e = GetCurrentEditor();
      var e_type = GetCurrentEditorType();
      e.beginTransaction();
      var pr=e.insertHTML;
      if( e_type == 'textmail' || e_type == 'text' ) {
        pr=e.insertText;
        pr('['+c+'] ');
        e.endOfDocument();
        e.insertLineBreak;
        if(c==0) {e.insertLineBreak(); e.insertLineBreak(); pr('----------'); e.insertLineBreak();}
        e.insertLineBreak();
        pr(c+'. '+u);

      }
      else{
        pr('['+c+'] ');
        e.endOfDocument();
        if(c==0) pr('<br><br>----------<br>');
        pr('<br>'+c+'. '+u);
      }

      e.endTransaction();
    }
    },
    dialog: function(){
      var returnv= { accepted : false , result : ''};
      window.openDialog('chrome://linkography/content/urldialog.xul','url-insert', 'modal,centerscreen',returnv);
      if(returnv.accepted){this.do(returnv.result);}
    }
}
