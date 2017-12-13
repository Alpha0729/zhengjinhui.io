(function(win,doc){
    win.addEventListener('resize',change,false);
    function change(){
        doc.documentElement.style.fontSize=doc.documentElement.clientWidth/320*20+'px';
}
    change();
    (function
        () {
        var oTable=document.getElementById('table');
        var aTr=oTable.getElementsByTagName('tr');
        for(var i=0;i<aTr.length;i++){
            if(i%2==0){
                aTr[i].style.backgroundColor="#efefef";
            }
        }
    })();
})(window,document);
