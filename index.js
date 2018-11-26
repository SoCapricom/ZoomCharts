function getQueryVariable(variable)
{
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
            if(pair[0] == variable){return pair[1];}
    }
    return(false);
}
var ID=this.getQueryVariable("id")//获取某一个参数方法里穿参数名字符串就可以
var ZoomChartsLicense = "ZCS-s535pa759: ZoomCharts SDK Single Developer Licencefor wan..@..3.com (valid for development only); upgrades until: 2019-11-13";
var ZoomChartsLicenseKey = "b38155cae6e014f7d088df9c083d5497e764976398f3907a22" +
   "d453de0759e5d98697d904f80d4ea94b7622e8f5632d253331f3404394d657a757d75c99be54d" +
   "06592a2d8bd368939713cc0df673df98b6edb99dcb8cb77e4e319e3019ef535400203d2bf202b" +
   "edd93ae5f33c0715d202fd48b06403dcaab593dd14bd315b9888e6c552ea3f44f84034a69de4a" +
   "8f4dcc58ad7dd1a41459fea15a114fae78417e3ac6de1b9f35754252c997a9b41852706b9df64" +
   "ba5ed17b0940c8a51a9052d56aa73126ef3fb5acfc5426a86e7a9a1695d6f91c1d1e789d51426" +
   "d0c2773162e2cd0fe0e92d9cc99b51608487807976c62cb04656cd766bf4e1473403a63ae6dc8";
   var sliceColors = [
      "rgba(111,82,184,1)",
      "rgba(255,214,24,1)",
      "rgba(47,195,47,1)",
      "rgba(86,185,247,1)", 
      "rgba(234,180,4,1)",
      "rgba(222,103,44,1)"
  ];
chart = new NetChart({
   navigation: {
      focusNodeExpansionRadius: 1,
      numberOfFocusNodes: 1,
      expandOnClick:false,//点击是否展示节点
      initialNodes: ["ab1ab122-169f-4769-ba6a-b2ff33e2f580"],
      mode: "focusnodes"
   },

   focusnodes: {
      
      // relevance: "Expanded flag",
      focusAtutoFadeout: true,
   },
   layout: {
      mode: "dynamic",
      nodeSpacing: 50
   },
   style: {
      linkLabel:{
         padding: 3,
         borderRadius: 999,  //make as round as possible
         textStyle:{font:"12px Arial", fillColor: "white"},
         backgroundStyle:{fillColor:"rgba(86,185,247,0.8)", lineColor:"rgba(28,124,213,0.9)"}
     },
      node: {
         // display:"roundtext",
         lineWidth: 3,
         lineColor: "#2fc32f",
      },
      
      "nodeStyleFunction": function (node) {
         node.labelStyle.padding = 6;
         // node.overlayColor = "rgba(0,0,0,0,0.3)";
         node.label = node.data.name;
         // node.labelStyle.backgroundStyle.fillColor = "rgba(47,195,47,0.8)";
         // node.labelStyle.textStyle.fillColor = "white";
         if(!node.data.fillColor) {
            var color = sliceColors[Math.floor(Math.random()*sliceColors.length)];

            node.fillColor = node.data.fillColor = color; 
            node.lineColor = node.data.lineColor =color.replace(",1)",",0.5)"); 
            node.lineWidth = node.data.lineWidth = 8;
        } else {
            node.fillColor = node.data.fillColor;
            node.lineColor = node.data.lineColor;
            node.lineWidth = node.data.lineWidth;
        }
      },
      "linkStyleFunction":function(link){
         // link.fromDecoration = "circle";
         link.toDecoration = "arrow";
         link.label = link.data.type;
         if(link.data.type=="产学研"||link.data.type=="下游"||link.data.type=="上游"){
            link.fromDecoration = "arrow";
         }
         // link.lineDash= [5,5];
         
         // link.length = 2;
         // link.items={
         //    text: link.data.type,
         //        padding:2,
         // }
      //   node.labelStyle.padding = 2;
            
         
         
      }
   },
   container: document.getElementById("chartContainer"),
   events: {
      onDoubleClick: dclickEvent,
      onClick: clickEvent,
   },

   data: { url: "queryList.json" },
   toolbar: {
      fullscreen: true,
      enabled: true
   },
   interaction: {
      resizing: {
         enabled: false
      }
   },
})

function dclickEvent(event) {
   // console.log(event)
}
function clickEvent(event) {
   console.log(event)
   event.capture=false
}