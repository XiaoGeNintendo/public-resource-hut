parser={
    ver:"0.0.3",
    parser:[
        {
            name:"Codeforces", //oj name
            regex:`.*codeforces\.com\/problemset\/problem\/.*\/.*`, //check site
            getId:function(){ //the function for getting id. UID=oj name+"_"+id. If null is returned, the problem won't be considered valid
                var vs=location.href.split("/");
                for(var i=0;i<vs.length;i++){
                    if(vs[i]=="problem"){
                        return vs[i+1]+nqoa(vs[i+2]).toUpperCase()
                    }
                }

                return null
            },
            getTitle:function(){ //the function for getting title. Null for invalid problem.
                return document.getElementsByClassName("title")[0].innerText;
            }
        },
        {
            name:"Codeforces", //oj name
            regex:`.*codeforces\.com\/(contest|gym)\/.*\/problem\/.*`, //check site
            getId:function(){ //the function for getting id. UID=oj name+"_"+id. If null is returned, the problem won't be considered valid
                var vs=location.href.split("/");
                for(var i=0;i<vs.length;i++){
                    if(vs[i]=="contest" || vs[i]=="gym"){
                        return vs[i+1]+nqoa(vs[i+3]).toUpperCase()
                    }
                }

                return null
            },
            getTitle:function(){ //the function for getting title. Null for invalid problem.
                return document.getElementsByClassName("title")[0].innerText;
            }
        },
        {
            name:"Atcoder", //oj name
            regex:`.*atcoder\.jp\/contests\/.*\/tasks\/.*`, //check site
            getId:function(){ //the function for getting id. UID=oj name+"_"+id. If null is returned, the problem won't be considered valid
                var vs=location.href.split("/");
                for(var i=0;i<vs.length;i++){
                    if(vs[i]=="contests"){
                        return vs[i+1]+"-"+nqoa(vs[i+3])
                    }
                }

                return null
            },
            getTitle:function(){ //the function for getting title. Null for invalid problem.
                return document.getElementsByClassName("h2")[0].innerText;
            }
        },
        {
            name:"Atcoder", //oj name
            regex:`.*\.contest\.atcoder\.jp\/tasks\/.*`, //check site
            getId:function(){ //the function for getting id. UID=oj name+"_"+id. If null is returned, the problem won't be considered valid
                var vs=location.href.split("/");
                for(var i=0;i<vs.length;i++){
                    if(vs[i].includes("contest")){
                        return vs[i].split(".")[0]+"-"+nqoa(vs[i+2])
                    }
                }

                return null
            },
            getTitle:function(){ //the function for getting title. Null for invalid problem.
                return document.getElementsByClassName("h2")[0].innerText;
            }
        },

        
    ]
}
